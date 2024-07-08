import { NotificationTemplateParams } from '@diia-inhouse/types'

export enum RatingCategory {
    PublicService = 'public-service',
    Document = 'document',
    DiiaId = 'diia-id',
}

export enum DiiaIdServiceCode {
    Authorization = 'authorization',
    Signing = 'signing',
}

export enum RatingType {
    UserInitiative = 'userInitiative',
    ByRequest = 'byRequest',
}

export enum RatingAvailabilityProcessCode {
    RatingAlreadySaved = 47101002,
    RatingMissingTaxpayerCard = 47101003,
}

export enum RatingChipCommon {
    RegistryUnavailable = 'registryUnavailable',
    IncorrectData = 'incorrectData',
    MoreOneTry = 'moreOneTry',
    Other = 'other',
    LongServiceSearch = 'longServiceSearch',
    LongApplicationProcessing = 'longApplicationProcessing',
    NotComprehensibleText = 'notComprehensibleText',
    ComprehensibleText = 'comprehensibleText',
    EnoughHints = 'enoughHints',
    NotEnoughHints = 'notEnoughHints',
    Design = 'design',
    BadDesign = 'badDesign',
    EasyFast = 'easyFast',
    WasWaitingForService = 'wasWaitingForService',
    PostOfficeInteraction = 'postOfficeInteraction',
    UsefulService = 'usefulService',
    SeveralPaymentAttempts = 'severalPaymentAttempts',
    SigningError = 'signingError',
    LicenseWasNotDisplayed = 'licenseWasNotDisplayed',
    LicensePlateSelection = 'licensePlateSelection',
    LongRegistration = 'longRegistration',
    AddressError = 'addressError',
    DigitalDocument = 'digitalDocument',
    DemocracyInSmartphone = 'democracyInSmartphone',
    UntimelyCert = 'UntimelyCert',
    GotError = 'gotError',
    GeolocationNotConfirmed = 'geolocationNotConfirmed',
    StreetMissing = 'streetMissing',
    GotRefuse = 'gotRefuse',
    AutomaticService = 'automaticService',
    NeededHelp = 'neededHelp',
    MissingData = 'missingData',
    EmploymentCenterInteraction = 'employmentCenterInteraction',
    NoNotification = 'noNotification',
    PaymentFee = 'paymentFee',
    PaymentOptions = 'paymentOptions',
    PaymentProcessing = 'paymentProcessing',
    PaymentIssues = 'paymentIssues',
    Delivery = 'delivery',
    FastPayment = 'fastPayment',
    InconvenientPlayer = 'inconvenientPlayer',
    SlowLoading = 'slowLoading',
    NotEnoughRadioWaves = 'notEnoughRadioWaves',
    NotEnoughChannels = 'notEnoughChannels',
    NotTheFirstTimePayment = 'notTheFirstTimePayment',
    Convenient = 'convenient',
    Inconvenient = 'inconvenient',
    IntuitiveInterface = 'intuitiveInterface',
    NoTariffing = 'noTariffing',
    NoTVProgram = 'noTVProgram',
    PushNotReceived = 'pushNotReceived',
    VehicleLicenseIsStillActive = 'vehicleLicenseIsStillActive',
    Mobility = 'mobility',
    BadConditions = 'badConditions',
    LostPayment = 'lostPayment',
    FrequentUse = 'frequentUse',
    InteractionWithServiceCenter = 'interactionWithServiceCenter',
    BadInteractionWithServiceCenter = 'badInteractionWithServiceCenter',
    DownloadSolutionFile = 'downloadSolutionFile',
    AddMeetingCalendar = 'addMeetingCalendar',
    NoFineCame = 'noFineCame',
    TakesALongToLoad = 'takesALongToLoad',
    IrrelevantInformation = 'irrelevantInformation',
    AlwayRelevantInformation = 'alwayRelevantInformation',
    NotUnderstandingWhatNext = 'notUnderstandingWhatNext',
    WrongfulRefusal = 'wrongfulRefusal',
    UploadingPhoto = 'uploadingPhoto',

    // Military bonds
    LimitedSelectionCities = 'limitedSelectionCities',
    BadPartnersInteraction = 'badPartnersInteraction',
    ContributionVictory = 'contributionVictory',
    PartnersInteraction = 'partnersInteraction',
}

export type RatingServiceCode = DiiaIdServiceCode | string

/** @deprecated */
export enum RatingChip {
    NeedesHelp = 'needesHelp' /** @deprecated use NeededHelp instead */,
    RegistryUnavailable = 'registryUnavailable',
    OutdatedData = 'outdatedData' /** @deprecated use IncorrectData instead */,
    IncorrectData = 'incorrectData',
    MoreOneTry = 'moreOneTry',
    Other = 'other',
    LongServiceSearch = 'longServiceSearch',
    LongProcessing = 'longProcessing' /** @deprecated use LongApplicationProcessing instead */,
    LongApplicationProcessing = 'longApplicationProcessing',
    NotComprehensibleText = 'notComprehensibleText',
    ComprehensibleText = 'comprehensibleText',
    EnoughHints = 'enoughHints',
    NotEnoughHints = 'notEnoughHints',
    Design = 'design',
    BadDesign = 'badDesign',
    EasyFast = 'easyFast',
    WasWaitingForService = 'wasWaitingForService',
    PostOfficeInteraction = 'postOfficeInteraction',
    UsefulService = 'usefulService',
    SeveralPaymentAttempts = 'severalPaymentAttempts',
    SigningError = 'signingError',
    LicenseWasNotDisplayed = 'licenseWasNotDisplayed',
    AddressError = 'addressError',
    DigitalDocument = 'digitalDocument',
    UntimelyCert = 'UntimelyCert',
    NotTheFirstTime = 'notTheFirstTime',
    GotError = 'gotError',
    GeolocationNotConfirmed = 'geolocationNotConfirmed',
    StreetMissing = 'streetMissing',
    GotRefuse = 'gotRefuse',
    AutomaticService = 'automaticService',
    InteractionWithCommission = 'interactionWithCommission',
    WrongfulRefusal = 'wrongfulRefusal',
    RefusalDueToRepairsMade = 'RefusalDueToRepairsMade',
    NeededHelp = 'neededHelp',
    MissingData = 'missingData',
    EmploymentCenterInteraction = 'employmentCenterInteraction',
    NoNotification = 'noNotification',
    PaymentFee = 'paymentFee',
    PaymentOptions = 'paymentOptions',
    FastPayment = 'fastPayment',
    InconvenientPlayer = 'inconvenientPlayer',
    SlowLoading = 'slowLoading',
    NotEnoughRadioWaves = 'notEnoughRadioWaves',
    NotEnoughChannels = 'notEnoughChannels',
    Convenient = 'convenient',
    Inconvenient = 'inconvenient',
    IntuitiveInterface = 'intuitiveInterface',
    NoTariffing = 'noTariffing',
    NoTVProgram = 'noTVProgram',
    PushNotReceived = 'pushNotReceived',
    VehicleLicenseIsStillActive = 'vehicleLicenseIsStillActive',
    AllInSmartphone = 'allInSmartphone' /** @deprecated use Mobility instead */,
    ComplexServices = 'complexServices' /** @deprecated use Mobility instead */,
    Mobility = 'mobility',
    BadConditions = 'badConditions',
    LostPayment = 'lostPayment',
    FrequentUse = 'frequentUse',

    // Documents
    NotAcceptDocument = 'notAcceptDocument',
    UsePlastic = 'usePlastic',
    NotUsePlastic = 'notUsePlastic',
    DocumentNotDisplayedSometimes = 'documentNotDisplayedSometimes',

    // Office
    GoogleServices = 'googleServices',
    ForwardingFromApplication = 'forwardingFromApplication',
    NotFindColleagues = 'notFindColleagues',
    MissingUnit = 'missingUnit',

    // Residence registration
    ProblemsApproval = 'problemsApproval',
    QrCodeError = 'qrCodeError',
    ApplicationSubmission = 'applicationSubmission',

    // Deposit guarantee payments
    BadBankInteraction = 'badBankInteraction',
    NoLiquidatedBank = 'noLiquidatedBank',
    AccountOpeningProblems = 'accountOpeningProblems',
    BankInteraction = 'bankInteraction',

    // Award
    SetUpNotifications = 'setUpNotifications',
    AddPostOffices = 'addPostOffices',
    ImproveDelivery = 'improveDelivery',
    AwardOffline = 'awardOffline',
    EverythingYouDo = 'everythingYouDo',
    ConvenientDelivery = 'convenientDelivery',
    DeleteFunction = 'deleteFunction',
    OnlineOfflineVersions = 'onlineOfflineVersions',
}

export enum RatingScore {
    Awful = '1',
    Bad = '2',
    Ok = '3',
    Good = '4',
    Excellent = '5',
}

export enum CustomRatingFormCode {
    PenaltiesPaid = 'penaltiesPaid',
    PenaltiesPaidOutside = 'penaltiesPaidOutside',
    CancelProperUser = 'cancelProperUser',
    PollClosed = 'pollClosed',
    DebtsIn = 'debtsIn',
    DebtsOut = 'debtsOut',
    ResidenceRegistrationApplicant = 'residenceRegistrationApplicant',
    ResidenceRegistrationOwner = 'residenceRegistrationOwner',
    ResidenceRegistrationParent = 'residenceRegistrationParent',
    DepositGuaranteePaymentsDoneRefuse = 'depositGuaranteePaymentsDoneRefuse',
    ReplacementDriverLicenseWithPlastic = 'replacementDriverLicenseWithPlastic' /** @deprecated use ReplacementDriverLicenseWithPlasticPickup instead */,
    ReplacementDriverLicenseWithPlasticPickup = 'replacementDriverLicenseWithPlasticPickup',
    ReplacementDriverLicenseWithPlasticPost = 'replacementDriverLicenseWithPlasticPost',
    ReplacementDriverLicenseDigitalOnly = 'replacementDriverLicenseDigitalOnly',
    DamagedPropertyDecision = 'damagedPropertyDecision',
    DestroyedPropertyDecision = 'destroyedPropertyDecision',
    DamagedPropertyRepairMessage = 'damagedPropertyRepairMessage',
    CourtPenaltiesPaid = 'courtPenaltiesPaid',
    MortgageDone = 'mortgageDone',
    TargetFeedbackShelters = 'targetFeedbackShelters',
    TargetFeedbackInvincibility = 'targetFeedbackInvincibility',
    MilitaryBondsDoneRefuse = 'militaryBondsDoneRefuse',
}

export type ScreenCode = StaticScreenCode | string

export enum StaticScreenCode {
    Document = 'document',
    Start = 'start',
    Home = 'home',
    Status = 'status',
    ChildrenCertificatesSelection = 'childrenCertificatesSelection',
    ReasonSelection = 'reasonSelection',
    CertTypeSelection = 'certTypeSelection',
    RequesterData = 'requesterData',
    BirthPlace = 'birthPlace',
    Nationality = 'nationality',
    RegistrationPlace = 'registrationPlace',
    RegistrationPlaceSelection = 'registrationPlaceSelection',
    Contacts = 'contacts',
    Application = 'application',
    VehicleSelection = 'vehicleSelection',
    VehiclePrice = 'vehiclePrice',
    LicensePlateType = 'licensePlateType',
    GenLicensePlate = 'genLicensePlate',
    LicensePlates = 'licensePlates',
    VehicleLicenseType = 'vehicleLicenseType',
    ExpirationDateSelection = 'expirationDateSelection',
    Sharing = 'sharing',
    SharingCancelProperUser = 'sharingCancelProperUser',
    ConfirmationRequest = 'confirmationRequest',
    ProperUsers = 'properUsers',
    ProperUser = 'properUser',
    StartCancelProperUser = 'startCancelProperUser',
    StatusCancelProperUser = 'statusCancelProperUser',
    ApplicationCancelProperUser = 'applicationCancelProperUser',
    LedSelection = 'ledSelection',
    LedExchange = 'ledExchange',
    PostOfficeSelection = 'postOfficeSelection',
    DocumentTypeSelection = 'documentTypeSelection',
    ResidenceCert = 'residenceCert',
    CurrentResidencePlaceSelection = 'currentResidencePlaceSelection',
    CurrentResidencePlaceConfirmation = 'currentResidencePlaceConfirmation',
    BankAccountSelection = 'bankAccountSelection',
    AssistanceTypes = 'assistanceTypes',
    Payment = 'payment',
    AllCertificatesDoneOk5 = 'allCertificatesDoneOk5',
    AllCertificatesDoneOk7 = 'allCertificatesDoneOk7',
    ConfirmJobLoss = 'confirmJobLoss',
    EmploymentCenterRegistration = 'employmentCenterRegistration',
    AddPassportData = 'addPassportData',
    ConfirmationAwaiting = 'confirmationAwaiting',
    PropertyTypes = 'propertyTypes',
    ObjectApplications = 'objectApplications',
    ObjectMessages = 'objectMessages',
    ApplicationStatus = 'applicationStatus',
    MessageStatus = 'messageStatus',
    ApplicationMessages = 'applicationMessages',
    Onboarding = 'onboarding',
    RepairsQuestions = 'repairsQuestions',
    BenefitsQuestions = 'benefitsQuestions',
    CardAwaiting = 'cardAwaiting',
    LinkDrrp = 'linkDrrp',
    DiiaRadio = 'diiaRadio',
    DiiaRadioPlaying = 'diiaRadioPlaying',
    DiiaRadioPaused = 'diiaRadioPaused',
    DiiaTVPlaying = 'diiaTVPlaying',
    TvChannelSelection = 'tvChannelSelection',
    DamageMessages = 'damageMessages',
    DamagedPropertyRecovery = 'damagedPropertyRecovery',
    ChooseDrrpObject = 'chooseDrrpObject',
    AddManualObject = 'addManualObject',
    AddManualObjectAddress = 'addManualObjectAddress',
    DamageAssessment = 'damageAssessment',
    DamagesFixing = 'damagesFixing',
    NewAdultRegistration = 'newAdultRegistration',
    NewChildRegistration = 'newChildRegistration',
    Adult = 'adult',
    AddBirthCertificate = 'addBirthCertificate',
    AddBirthCertificateOwnersChild = 'addBirthCertificateOwnersChild',
    ApproveOwnerData = 'approveOwnerData',
    LiquidatedBanks = 'liquidatedBanks',
    CurrentAdultRegistration = 'currentAdultRegistration',
    CurrentChildRegistration = 'currentChildRegistration',
    ContactsOwner = 'contactsOwner',
    PenaltiesPaidOutside = 'penaltiesPaidOutside',
    Penalties = 'penalties',
    CriminalRecordCertificate = 'criminalRecordCertificate',
    ReplacementDriverLicense = 'replacementDriverLicense',
    QuizArchive = 'quizArchive',
    QuizDetailsActive = 'quizDetailsActive',
    QuizDetailsClose = 'quizDetailsClose',
    OfficialsPoll = 'officialsPoll',
    OfficialsWorkspace = 'officialsWorkspace',
    OfficialsBadges = 'officialsBadges',
    OfficialsSearchColleagues = 'officialsSearchColleagues',
    BenefitsConfirmation = 'benefitsConfirmation',
    OwnersConfirmation = 'ownersConfirmation',
    CourtCasesDetails = 'courtCasesDetails',
    CourtCasesDecisions = 'courtCasesDecisions',
    CourtCasesDecisionsDetails = 'courtCasesDecisionsDetails',
    CourtCasesHearings = 'courtCasesHearings',
    CourtCasesHearingsDetails = 'courtCasesHearingsDetails',
    AllApplications = 'allApplications',
    DownloadList = 'downloadList',
    Map = 'map',
    MaritalStatus = 'maritalStatus',
    ChildrenNumber = 'childrenNumber',
    Income = 'income',
    MortgageApartment = 'mortgageApartment',
    AddressMortgageApartment = 'addressMortgageApartment',
    MortgageBanks = 'mortgageBanks',
    SelectionRepairStage = 'selectionRepairStage',
    MediaUpload = 'mediaUpload',
    StartBookingFunds = 'startBookingFunds',
    SelectionBookingCertificate = 'selectionBookingCertificate',
    MapPointDetails = 'mapPointDetails',
    TargetFeedbackInvincibility = 'targetFeedbackInvincibility',
    TargetFeedbackShelters = 'targetFeedbackShelters',
    Specialities = 'specialities',
    AvailableBonds = 'availableBonds',
    AvailableBondsPartners = 'availableBondsPartners',
    AvailableBondsPartnersCart = 'availableBondsPartnersCart',
    CompensationType = 'compensationType',
    RepeatedDeliveryApplication = 'repeatedDeliveryApplication',
    RepeatedDeliveryContacts = 'repeatedDeliveryContacts',
    RepeatedDeliveryMethodsOfObtaining = 'repeatedDeliveryMethodsOfObtaining',
    DepartmentSelection = 'departmentSelection',
    DeliveryAddressDefinition = 'deliveryAddressDefinition',
    ConstructingStartMessage = 'constructingStartMessage',
    ConstructingCompletionMessage = 'constructingCompletionMessage',
}

export type RatingFormCode = RatingServiceCode | CustomRatingFormCode

export interface RatingForm<T = string> {
    formCode?: RatingFormCode
    resourceId?: string
    title: string
    rating: {
        label: string
        items: RatingItem<T>[]
    }
    comment: {
        label: string
        hint: string
    }
    mainButton: string
}

export interface RatingItem<T = string> {
    rate: RatingScore
    emoji: string
    chip: {
        label: string
        description: string
        chips: RatingChipMeta<T>[]
    }
    chipBlocks?: ChipBlock<T>[]
}

export interface ChipBlock<T> {
    label: string
    description?: string[]
    chips: RatingChipMeta<T>[]
}

export interface RatingChipMeta<T = string> {
    code: T
    name: string
}

export interface GetRatingFormParams {
    userIdentifier: string
    category: RatingCategory
    serviceCode: RatingServiceCode
    statusDate: Date
    resourceId?: string
    ratingFormCode?: RatingFormCode
    screenCode?: ScreenCode
    hasRatingSubmitThreshold?: boolean
    daysAfterLastRatingSubmitThreshold?: number
    intervalDelay?: number
    intervalDuration?: number
}

export interface GetRatingFormResponse {
    ratingForm?: RatingForm
    ratingStartsAtUnixTime: number
}

export interface RateServiceEventPayload {
    userIdentifier: string
    category: RatingCategory
    serviceCode: RatingServiceCode
    ratingFormCode?: RatingFormCode
    resourceId?: string
    notificationParams?: NotificationTemplateParams
    delay?: number
}

export interface ChipsRateGroup<T> {
    rate: RatingScore[]
    chips: T[]
}

export interface ChipsBlockRateGroup<T> {
    rate: RatingScore[]
    chipBlocks: ChipBlock<T>[]
}

export interface TextParams {
    title?: string
    ratingLabel?: string
    chipLabels?: Partial<Record<RatingScore, string>>
    chipDescription?: string
    commentLabel?: string
    commentHint?: string
    mainButton?: string
}

export interface ChipParams<T extends string> {
    chipsRateGroups?: ChipsRateGroup<T>[]
    chipValueMap?: Partial<Record<T, string>>
    chipBlockRateGroups?: ChipsBlockRateGroup<T>[]
}

export interface GetUserInitiativeRatingFormRequest {
    screenCode?: ScreenCode
    resourceId?: string
}

export interface GetUserInitiativeRatingFormResponse {
    ratingForm?: RatingForm
    processCode?: RatingAvailabilityProcessCode
}

export interface IsUserInitiativeRatingAvailableRequest {
    userIdentifier: string
    category: RatingCategory
    serviceCode: RatingServiceCode
    screenCode?: ScreenCode
    resourceId?: string
    checkTaxpayerCard?: boolean
    ignoreScreenCodes?: ScreenCode[]
}

export interface IsByRequestRatingAvailableRequest {
    userIdentifier: string
    category: RatingCategory
    serviceCode: RatingServiceCode
    statusDate: Date
    resourceId?: string
    ratingFormCode?: RatingFormCode
    screenCode?: ScreenCode
    hasRatingSubmitThreshold?: boolean
    daysAfterLastRatingSubmitThreshold?: number
    intervalDelay?: number
    intervalDuration?: number
}

export interface RatingService<T, K extends Partial<RateServiceEventPayload> = Partial<RateServiceEventPayload>> {
    sendRatingPush(model: T, userIdentifier: string, params?: K): Promise<void>
    getRatingForm(model: T, userIdentifier: string, params?: K): Promise<RatingForm | undefined>
    getUserInitiativeRatingForm?(userIdentifier: string, serviceCode: RatingServiceCode): Promise<GetUserInitiativeRatingFormResponse>
    getUserInitiativeRatingFormByResourceId?(
        userIdentifier: string,
        serviceCode: RatingServiceCode,
        resourceId: string,
    ): Promise<GetUserInitiativeRatingFormResponse>
}
