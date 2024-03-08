import { AcquirerAnalyticsData, NotificationAnalyticsData, UserAnalyticsData } from '../../src/interfaces'

export const acquirerAnalyticsData: AcquirerAnalyticsData = {
    branch: 'branch',
    branchScopes: { auth: true },
    offer: 'offer',
    scopeType: 'scopeType',
    offerScopes: { auth: true },
    request: 'request',
    scopeList: { auth: true },
    scopes: ['auth'],
    reason: 'reason',
    package: [{ scope: 'auth', document: 'passport' }],
    offerRequestType: 'offerRequestType',
    deliveryTypes: ['deliveryType1', 'deliveryType2'],
}

export const notificationAnalyticsData: NotificationAnalyticsData = {
    reason: 'reason',
}

export const userAnalyticsData: UserAnalyticsData = {
    lastActivityDate: 'lastActivityDate',
    lastDocumentUpdate: 'lastDocumentUpdate',
}

export const analyticsData = {
    key1: 'val1',
    key2: 'val2',
}
