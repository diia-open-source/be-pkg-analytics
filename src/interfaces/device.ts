import { PlatformType } from '@diia-inhouse/types'

export interface AnalyticsDevice {
    identifier?: string
    platform: {
        type?: PlatformType
        version?: string
    }
}
