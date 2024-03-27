import { AsyncLocalStorage } from 'async_hooks'

import { ObjectId } from 'bson'

import { IdentifierService } from '@diia-inhouse/crypto'
import Logger from '@diia-inhouse/diia-logger'
import TestKit, { mockClass } from '@diia-inhouse/test'
import { AlsData } from '@diia-inhouse/types'

import { AnalyticsActionResult, AnalyticsActionType, AnalyticsCategory, AnalyticsService } from '../../../src'
import { acquirerAnalyticsData, analyticsData, notificationAnalyticsData, userAnalyticsData } from '../../mocks/analyticsData'

describe(`${AnalyticsService.name} service`, () => {
    // @ts-ignore
    const identifierService = new IdentifierService({ salt: 'salt' })
    const testKit = new TestKit(/*identifierService*/)

    const AsyncLocalStorageMock = mockClass(AsyncLocalStorage)
    const asyncLocalStorage = new AsyncLocalStorageMock<AlsData>()

    const MockedLogger = mockClass(Logger)
    const logger: Logger = new MockedLogger()

    const analyticsService = new AnalyticsService(logger, asyncLocalStorage)

    describe(`method ${analyticsService.acquirerLog.name}`, () => {
        const mockedCurrentDate = new Date('2023-07-01')
        const analyticsHeaders = testKit.session.getHeaders()
        const { mobileUid, platformType, platformVersion, appVersion: applicationVersion } = analyticsHeaders
        const analyticsDevice = {
            identifier: mobileUid,
            platform: {
                type: platformType,
                version: platformVersion,
            },
        }

        beforeEach(() => {
            jest.useFakeTimers().setSystemTime(mockedCurrentDate)
        })

        it.each([
            ['with data', analyticsHeaders, analyticsDevice, applicationVersion, acquirerAnalyticsData],
            ['without data', analyticsHeaders, analyticsDevice, applicationVersion, undefined],
            ['without headers', undefined, undefined, undefined, undefined],
        ])('should log analytics %s', (_msg, headers, device, appVersion, data) => {
            const category = AnalyticsCategory.Acquirers
            const acquirerId = new ObjectId()
            const actionType = AnalyticsActionType.AddOffer
            const actionResult = AnalyticsActionResult.Available
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    acquirer: acquirerId,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    appVersion,
                    device,
                    data,
                },
            }

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.acquirerLog(category, acquirerId, actionType, actionResult, headers, data)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })
    })

    describe(`method ${analyticsService.userAcquirerLog.name}`, () => {
        const mockedCurrentDate = new Date('2023-07-02')
        const analyticsHeaders = testKit.session.getHeaders()
        const { mobileUid, platformType, platformVersion, appVersion: applicationVersion } = analyticsHeaders
        const analyticsDevice = {
            identifier: mobileUid,
            platform: {
                type: platformType,
                version: platformVersion,
            },
        }

        beforeEach(() => {
            jest.useFakeTimers().setSystemTime(mockedCurrentDate)
        })

        it.each([
            ['with data', analyticsHeaders, analyticsDevice, applicationVersion, acquirerAnalyticsData],
            ['without data', analyticsHeaders, analyticsDevice, applicationVersion, undefined],
            ['without headers', undefined, undefined, undefined, undefined],
        ])('should log analytics %s', (_msg, headers, device, appVersion, data) => {
            const { user } = testKit.session.getUserSession()
            const category = AnalyticsCategory.Acquirers
            const userIdentifier = user.identifier
            const acquirerId = new ObjectId()
            const actionType = AnalyticsActionType.AddOffer
            const actionResult = AnalyticsActionResult.Available
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    acquirer: acquirerId,
                    identifier: userIdentifier,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    appVersion,
                    device,
                    data,
                },
            }

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.userAcquirerLog(category, userIdentifier, acquirerId, actionType, actionResult, headers, data)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })
    })

    describe(`method ${analyticsService.notificationLog.name}`, () => {
        const mockedCurrentDate = new Date('2023-07-01')

        beforeEach(() => {
            jest.useFakeTimers().setSystemTime(mockedCurrentDate)
        })

        it.each([
            ['with data', notificationAnalyticsData],
            ['without data', undefined],
        ])('should log analytics %s', (_msg, data) => {
            const headers = testKit.session.getHeaders()
            const { mobileUid, platformType, platformVersion, appVersion } = headers
            const category = AnalyticsCategory.Notification
            const actionType = AnalyticsActionType.AddOffer
            const actionResult = AnalyticsActionResult.Available
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    appVersion,
                    device: {
                        identifier: mobileUid,
                        platform: {
                            type: platformType,
                            version: platformVersion,
                        },
                    },
                    data,
                },
            }

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.notificationLog(actionType, actionResult, headers, data)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })
    })

    describe(`method ${analyticsService.userLog.name}`, () => {
        const mockedCurrentDate = new Date('2023-07-01')

        beforeEach(() => {
            jest.useFakeTimers().setSystemTime(mockedCurrentDate)
        })

        it.each([
            ['with data', userAnalyticsData],
            ['without data', undefined],
        ])('should log analytics %s', (_msg, data) => {
            const { user } = testKit.session.getUserSession()
            const userIdentifier = user.identifier
            const headers = testKit.session.getHeaders()
            const { mobileUid, platformType, platformVersion, appVersion } = headers
            const category = AnalyticsCategory.Users
            const actionType = AnalyticsActionType.AddOffer
            const actionResult = AnalyticsActionResult.Available
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    identifier: userIdentifier,
                    appVersion,
                    device: {
                        identifier: mobileUid,
                        platform: {
                            type: platformType,
                            version: platformVersion,
                        },
                    },
                    data,
                },
            }

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.userLog(actionType, actionResult, userIdentifier, headers, data)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })
    })

    describe(`method ${analyticsService.authLog.name}`, () => {
        const mockedCurrentDate = new Date('2023-07-01')

        beforeEach(() => {
            jest.useFakeTimers().setSystemTime(mockedCurrentDate)
        })

        it.each([
            ['with data', analyticsData],
            ['without data', undefined],
        ])('should log analytics %s', (_msg, data) => {
            const { user } = testKit.session.getUserSession()
            const userIdentifier = user.identifier
            const headers = testKit.session.getHeaders()
            const { mobileUid, platformType, platformVersion, appVersion } = headers
            const category = AnalyticsCategory.Auth
            const actionType = AnalyticsActionType.AddOffer
            const actionResult = AnalyticsActionResult.Available
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    identifier: userIdentifier,
                    appVersion,
                    device: {
                        identifier: mobileUid,
                        platform: {
                            type: platformType,
                            version: platformVersion,
                        },
                    },
                    data,
                },
            }

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.authLog(actionType, actionResult, userIdentifier, headers, data)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })
    })

    describe(`method ${analyticsService.log.name}`, () => {
        const mockedCurrentDate = new Date('2023-07-05')

        beforeEach(() => {
            jest.useFakeTimers().setSystemTime(mockedCurrentDate)
        })

        it('should log error if no context found in async local storage', () => {
            const category = AnalyticsCategory.Auth
            const actionType = AnalyticsActionType.Check
            const actionResult = AnalyticsActionResult.Inactive

            const loggerSpy = jest.spyOn(logger, 'fatal')

            jest.spyOn(asyncLocalStorage, 'getStore').mockReturnValue(undefined)

            analyticsService.log(category, actionType, actionResult, analyticsData)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics log is used without als context')
        })

        it('should log analytics', () => {
            const session = testKit.session.getPartnerSession()
            const headers = testKit.session.getHeaders()
            const alsData = { headers, session }
            const category = 'acquirersRequest'
            const actionType = AnalyticsActionType.Delivery
            const actionResult = AnalyticsActionResult.Delivered
            const { appVersion, mobileUid, platformType, platformVersion } = alsData.headers
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    appVersion: appVersion,
                    device: {
                        identifier: mobileUid,
                        platform: {
                            type: platformType,
                            version: platformVersion,
                        },
                    },
                    data: analyticsData,
                },
            }

            jest.spyOn(asyncLocalStorage, 'getStore').mockReturnValue(alsData)

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.log(category, actionType, actionResult, analyticsData)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })

        it('should log analytics for user session', () => {
            const alsData = testKit.session.getUserActionArguments()
            const category = 'acquirersRequest'
            const actionType = AnalyticsActionType.Delivery
            const actionResult = AnalyticsActionResult.Delivered
            const { appVersion, mobileUid, platformType, platformVersion } = alsData.headers
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    appVersion: appVersion,
                    device: {
                        identifier: mobileUid,
                        platform: {
                            type: platformType,
                            version: platformVersion,
                        },
                    },
                    data: analyticsData,
                    identifier: alsData.session.user.identifier,
                },
            }

            jest.spyOn(asyncLocalStorage, 'getStore').mockReturnValue(alsData)

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.log(category, actionType, actionResult, analyticsData)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })

        it('should log analytics with data for service entrance session', () => {
            const session = testKit.session.getServiceEntranceSession()
            const headers = testKit.session.getHeaders()
            const alsData = { headers, session }
            const category = 'acquirersRequest'
            const actionType = AnalyticsActionType.Delivery
            const actionResult = AnalyticsActionResult.Delivered
            const { appVersion, mobileUid, platformType, platformVersion } = alsData.headers
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    appVersion: appVersion,
                    device: {
                        identifier: mobileUid,
                        platform: {
                            type: platformType,
                            version: platformVersion,
                        },
                    },
                    acquirer: session.entrance.acquirerId,
                    data: {
                        ...analyticsData,
                        branch: session.entrance.branchHashId,
                        offer: session.entrance.offerHashId,
                    },
                },
            }

            jest.spyOn(asyncLocalStorage, 'getStore').mockReturnValue(alsData)

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.log(category, actionType, actionResult, analyticsData)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })

        it('should log analytics without data for service entrance session', () => {
            const session = testKit.session.getServiceEntranceSession()
            const headers = testKit.session.getHeaders()
            const alsData = { headers, session }
            const category = 'acquirersRequest'
            const actionType = AnalyticsActionType.Delivery
            const actionResult = AnalyticsActionResult.Delivered
            const { appVersion, mobileUid, platformType, platformVersion } = alsData.headers
            const expected = {
                analytics: {
                    date: mockedCurrentDate.toISOString(),
                    category,
                    action: {
                        type: actionType,
                        result: actionResult,
                    },
                    appVersion: appVersion,
                    device: {
                        identifier: mobileUid,
                        platform: {
                            type: platformType,
                            version: platformVersion,
                        },
                    },
                    acquirer: session.entrance.acquirerId,
                },
            }

            jest.spyOn(asyncLocalStorage, 'getStore').mockReturnValue(alsData)

            const loggerSpy = jest.spyOn(logger, 'info')

            analyticsService.log(category, actionType, actionResult)

            expect(loggerSpy).toHaveBeenCalledWith('Analytics', expected)
        })
    })
})
