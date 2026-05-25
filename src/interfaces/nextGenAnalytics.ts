import { AnalyticsDevice } from './device.js'

export interface NextGenAnalytics {
    date: string
    category: string
    action: {
        type: string
        result: string
    }
    identifier?: string
    acquirer?: string
    appVersion?: string
    device?: AnalyticsDevice
    data?: Record<string, unknown>
}
