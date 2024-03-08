import { ObjectId } from 'bson'

import { AnalyticsDevice } from './device'

export interface NextGenAnalytics {
    date: string
    category: string
    action: {
        type: string
        result: string
    }
    identifier?: string
    acquirer?: ObjectId
    appVersion?: string
    device?: AnalyticsDevice
    data?: Record<string, unknown>
}
