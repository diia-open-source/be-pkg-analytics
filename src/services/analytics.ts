import { AsyncLocalStorage } from 'async_hooks'

import { ObjectId } from 'bson'

import { ActHeaders, AlsData, Logger } from '@diia-inhouse/types'
import { guards } from '@diia-inhouse/utils'

import {
    AcquirerAnalytics,
    AcquirerAnalyticsData,
    Analytics,
    AnalyticsActionResult,
    AnalyticsActionType,
    AnalyticsCategory,
    AnalyticsDevice,
    AnalyticsLog,
    AuthAnalytics,
    NextGenAnalytics,
    NotificationAnalytics,
    NotificationAnalyticsData,
    UserAnalytics,
    UserAnalyticsData,
} from '../interfaces'

export class AnalyticsService {
    constructor(
        private readonly logger: Logger,
        private readonly asyncLocalStorage: AsyncLocalStorage<AlsData>,
    ) {}

    acquirerLog(
        category: AnalyticsCategory,
        acquirerId: ObjectId,
        actionType: AnalyticsActionType,
        actionResult: AnalyticsActionResult,
        headers: ActHeaders | undefined,
        data?: AcquirerAnalyticsData,
    ): void {
        const analytics: AcquirerAnalytics = {
            date: this.getDate(),
            category,
            acquirer: acquirerId,
            action: {
                type: actionType,
                result: actionResult,
            },
            appVersion: headers?.appVersion,
            device: this.getDevice(headers),
            data,
        }

        this.logAnalytics(analytics)
    }

    userAcquirerLog(
        category: AnalyticsCategory,
        userIdentifier: string,
        acquirerId: ObjectId | undefined,
        actionType: AnalyticsActionType,
        actionResult: AnalyticsActionResult,
        headers: ActHeaders | undefined,
        data?: AcquirerAnalyticsData,
    ): void {
        const analytics: AcquirerAnalytics = {
            date: this.getDate(),
            category,
            acquirer: acquirerId,
            identifier: userIdentifier,
            action: {
                type: actionType,
                result: actionResult,
            },
            appVersion: headers?.appVersion,
            device: this.getDevice(headers),
            data,
        }

        this.logAnalytics(analytics)
    }

    notificationLog(
        actionType: AnalyticsActionType,
        actionResult: AnalyticsActionResult,
        headers: ActHeaders,
        data?: NotificationAnalyticsData,
    ): void {
        const analytics: NotificationAnalytics = {
            date: this.getDate(),
            category: AnalyticsCategory.Notification,
            action: {
                type: actionType,
                result: actionResult,
            },
            appVersion: headers.appVersion,
            device: this.getDevice(headers),
            data,
        }

        this.logAnalytics(analytics)
    }

    userLog(
        actionType: AnalyticsActionType,
        actionResult: AnalyticsActionResult,
        userIdentifier: string,
        headers: ActHeaders,
        data?: UserAnalyticsData,
    ): void {
        const analytics: UserAnalytics = {
            date: this.getDate(),
            category: AnalyticsCategory.Users,
            action: {
                type: actionType,
                result: actionResult,
            },
            identifier: userIdentifier,
            appVersion: headers.appVersion,
            device: this.getDevice(headers),
            data,
        }

        this.logAnalytics(analytics)
    }

    authLog(
        actionType: AnalyticsActionType,
        actionResult: AnalyticsActionResult,
        userIdentifier: string,
        headers: ActHeaders,
        data?: Record<string, unknown>,
    ): void {
        const analytics: AuthAnalytics = {
            date: this.getDate(),
            category: AnalyticsCategory.Auth,
            action: {
                type: actionType,
                result: actionResult,
            },
            identifier: userIdentifier,
            appVersion: headers.appVersion,
            device: this.getDevice(headers),
            data,
        }

        this.logAnalytics(analytics)
    }

    log(category: string, actionType: string, actionResult: string, data?: Record<string, unknown>): void {
        const context = this.asyncLocalStorage.getStore()
        if (!context) {
            this.logger.fatal('Analytics log is used without als context')

            return
        }

        const { session, headers } = context
        const analytics: NextGenAnalytics = {
            date: this.getDate(),
            category,
            action: {
                type: actionType,
                result: actionResult,
            },
            appVersion: headers?.appVersion,
            device: this.getDevice(headers),
            data,
        }
        if (guards.isUserSession(session)) {
            analytics.identifier = session.user.identifier
        }

        if (guards.isServiceEntranceSession(session)) {
            const { acquirerId, branchHashId, offerHashId } = session.entrance

            analytics.acquirer = acquirerId
            if (!data) {
                data = {}
            }

            if (!data.branch) {
                data.branch = branchHashId
            }

            if (!data.offer) {
                data.offer = offerHashId
            }
        }

        this.logger.info('Analytics', { analytics })
    }

    private getDate(): string {
        return new Date().toISOString()
    }

    private getDevice(headers?: ActHeaders): AnalyticsDevice | undefined {
        if (!headers) {
            return
        }

        const { mobileUid, platformType, platformVersion } = headers

        return {
            identifier: mobileUid,
            platform: {
                type: platformType,
                version: platformVersion,
            },
        }
    }

    private logAnalytics(analytics: Analytics): void {
        const log: AnalyticsLog = { analytics }

        this.logger.info('Analytics', log)
    }
}
