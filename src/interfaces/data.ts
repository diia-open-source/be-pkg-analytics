export interface AcquirerAnalyticsPackageItem {
    scope: string
    document: string
}

export interface AcquirerAnalyticsData {
    branch?: string
    branchScopes?: Record<string, unknown>
    offer?: string
    scopeType?: string
    offerScopes?: Record<string, unknown>
    request?: string
    scopeList?: Record<string, unknown>
    scopes?: Record<string, unknown> | unknown[]
    reason?: string
    package?: AcquirerAnalyticsPackageItem[]
    offerRequestType?: string
    deliveryTypes?: string[]
}

export interface UserAnalyticsData {
    lastActivityDate: string
    lastDocumentUpdate: string
}

export interface NotificationAnalyticsData {
    reason: string
}
