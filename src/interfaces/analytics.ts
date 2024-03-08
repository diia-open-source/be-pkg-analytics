import { ObjectId } from 'bson'

import { AnalyticsActionResult } from './actionResult'
import { AnalyticsActionType } from './actionType'
import { AnalyticsCategory } from './categories'
import { AcquirerAnalyticsData, NotificationAnalyticsData, UserAnalyticsData } from './data'
import { AnalyticsDevice } from './device'

interface BaseAnalytics {
    date: string
    category: AnalyticsCategory
    action: {
        type: AnalyticsActionType
        result: AnalyticsActionResult
    }
    appVersion?: string
    device?: AnalyticsDevice
}

export interface AcquirerAnalytics extends BaseAnalytics {
    acquirer?: ObjectId
    identifier?: string
    data?: AcquirerAnalyticsData
}

export interface NotificationAnalytics extends BaseAnalytics {
    data?: NotificationAnalyticsData
}

export interface UserAnalytics extends BaseAnalytics {
    identifier: string
    data?: UserAnalyticsData
}

export interface AuthAnalytics extends BaseAnalytics {
    identifier: string
    data?: Record<string, unknown>
}

export type Analytics = AcquirerAnalytics | NotificationAnalytics | UserAnalytics | AuthAnalytics

export interface AnalyticsLog {
    analytics: Analytics
}
