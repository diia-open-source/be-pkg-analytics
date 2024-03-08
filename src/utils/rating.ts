import {
    ChipParams,
    RatingCategory,
    RatingChipCommon,
    RatingForm,
    RatingFormCode,
    RatingItem,
    RatingScore,
    TextParams,
} from '../interfaces'

export class RatingUtils {
    private readonly chipCodeToValueDefaultMap: Record<RatingChipCommon, string> = {
        [RatingChipCommon.RegistryUnavailable]: 'Реєстр недоступний',
        [RatingChipCommon.IncorrectData]: 'Неактуальні дані',
        [RatingChipCommon.MoreOneTry]: 'Не з 1 разу вийшло',
        [RatingChipCommon.Other]: 'Інше',
        [RatingChipCommon.LongServiceSearch]: 'Довго шукав послугу',
        [RatingChipCommon.LongApplicationProcessing]: 'Заявку опрацьовували довго',
        [RatingChipCommon.LicensePlateSelection]: 'Вибір номерного знака',
        [RatingChipCommon.LongRegistration]: 'Довго реєстрували',
        [RatingChipCommon.PaymentIssues]: 'Проблеми з оплатою',
        [RatingChipCommon.Delivery]: 'Доставка',
        [RatingChipCommon.ComprehensibleText]: 'Зрозумілі тексти',
        [RatingChipCommon.NotComprehensibleText]: 'Незрозумілий текст',
        [RatingChipCommon.EasyFast]: 'Легко і швидко',
        [RatingChipCommon.NotEnoughHints]: 'Мало підказок',
        [RatingChipCommon.EnoughHints]: 'Вдосталь підказок',
        [RatingChipCommon.Design]: 'Дизайн',
        [RatingChipCommon.WasWaitingForService]: 'Давно чекав на цю послугу',
        [RatingChipCommon.BadDesign]: 'Дизайн',
        [RatingChipCommon.PostOfficeInteraction]: 'Взаємодія з поштою',
        [RatingChipCommon.UsefulService]: 'Корисна послуга',
        [RatingChipCommon.SeveralPaymentAttempts]: 'Не з 1 разу оплатили',
        [RatingChipCommon.SigningError]: 'Помилка з підписанням',
        [RatingChipCommon.LicenseWasNotDisplayed]: 'Не відобразилось посвідчення',
        [RatingChipCommon.AddressError]: 'Помилка з адресою',
        [RatingChipCommon.DigitalDocument]: 'Цифровий документ',
        [RatingChipCommon.UntimelyCert]: 'Витяг не прийшов за 30 днів',
        [RatingChipCommon.GotError]: 'На жаль, сталася помилка',
        [RatingChipCommon.GeolocationNotConfirmed]: 'Не підтверджувалася геолокація',
        [RatingChipCommon.StreetMissing]: 'Відсутня моя адреса',
        [RatingChipCommon.GotRefuse]: 'Отримую відмову',
        [RatingChipCommon.AutomaticService]: 'Автоматична послуга',
        [RatingChipCommon.NeededHelp]: 'Потрібна була допомога',
        [RatingChipCommon.MissingData]: 'Не знайшли мої дані',
        [RatingChipCommon.EmploymentCenterInteraction]: 'Взаємодія з центром зайнятості',
        [RatingChipCommon.NoNotification]: 'Немає сповіщення',
        [RatingChipCommon.PushNotReceived]: 'Не прийшов пуш',
        [RatingChipCommon.PaymentFee]: 'Оплата з комісією',
        [RatingChipCommon.PaymentOptions]: 'Декілька варіантів оплати',
        [RatingChipCommon.PaymentProcessing]: 'Опрацювання оплати',
        [RatingChipCommon.FastPayment]: 'Швидко опрацювали оплату',
        [RatingChipCommon.InconvenientPlayer]: 'Незручний плеєр',
        [RatingChipCommon.SlowLoading]: 'Повільно завантажується',
        [RatingChipCommon.NotEnoughRadioWaves]: 'Мало радіохвиль',
        [RatingChipCommon.NotEnoughChannels]: 'Мало каналів',
        [RatingChipCommon.NotTheFirstTimePayment]: 'Не з 1 разу оплатили',
        [RatingChipCommon.Convenient]: 'Зручно',
        [RatingChipCommon.Inconvenient]: 'Незручно',
        [RatingChipCommon.IntuitiveInterface]: 'Зрозумілий інтерфейс',
        [RatingChipCommon.NoTariffing]: 'Відсутня тарифікація',
        [RatingChipCommon.NoTVProgram]: 'Немає телепрограми',
        [RatingChipCommon.Mobility]: 'Все у смартфоні',
        [RatingChipCommon.BadConditions]: 'Не підходять умови',
        [RatingChipCommon.LostPayment]: 'Боюся, що оплата загубиться',
        [RatingChipCommon.VehicleLicenseIsStillActive]: 'Досі активний техпаспорт',
        [RatingChipCommon.FrequentUse]: 'Часто користуюся',
        [RatingChipCommon.InteractionWithServiceCenter]: 'Взаємодія з сервісним центром',
        [RatingChipCommon.BadInteractionWithServiceCenter]: 'Взаємодія з сервісним центром',
        [RatingChipCommon.DemocracyInSmartphone]: 'Демократія в смартфоні',
        [RatingChipCommon.DownloadSolutionFile]: 'Завантаження файлу рішення',
        [RatingChipCommon.AddMeetingCalendar]: 'Додавання засідання в календар',
        [RatingChipCommon.NoFineCame]: 'Не прийшов штраф',
        [RatingChipCommon.TakesALongToLoad]: 'Довго завантажується інформація',
        [RatingChipCommon.IrrelevantInformation]: 'Неактуальна інформація',
        [RatingChipCommon.AlwayRelevantInformation]: 'Завжди актуальна інформація',
        [RatingChipCommon.NotUnderstandingWhatNext]: 'Не розумію, що буде далі',
        [RatingChipCommon.WrongfulRefusal]: 'Неправомірна відмова',
        [RatingChipCommon.UploadingPhoto]: 'Завантаження фото',
        [RatingChipCommon.LimitedSelectionCities]: 'Обмежений вибір міст',
        [RatingChipCommon.BadPartnersInteraction]: 'Взаємодія з партнерами',
        [RatingChipCommon.ContributionVictory]: 'Внесок у перемогу',
        [RatingChipCommon.PartnersInteraction]: 'Взаємодія з партнерами',
    }

    private readonly chipLabelMap: Record<RatingScore, string> = {
        [RatingScore.Awful]: 'Що засмутило?',
        [RatingScore.Bad]: 'Що засмутило?',
        [RatingScore.Ok]: 'На що команді звернути увагу?',
        [RatingScore.Good]: 'Що сподобалось?',
        [RatingScore.Excellent]: 'Що сподобалось?',
    }

    private readonly ratingLabelMap = {
        [RatingCategory.PublicService]: 'Задоволені послугою в Дії?',
        [RatingCategory.Document]: 'Задоволені документом у Дії?',
        [RatingCategory.DiiaId]: 'Задоволені Дія.Підпис?',
    }

    private readonly commentLabelMap = {
        [RatingCategory.PublicService]: 'Як можна покращити послугу?',
        [RatingCategory.Document]: 'Як можна покращити документ?',
        [RatingCategory.DiiaId]: 'Як можна покращити послугу?',
    }

    getRatingForm<T extends string>(
        formCode: RatingFormCode,
        category: RatingCategory,
        chipParams: ChipParams<T>,
        textParams?: TextParams,
    ): RatingForm {
        const { title, ratingLabel, chipLabels, chipDescription, commentLabel, commentHint, mainButton } = textParams || {}
        const { chipsRateGroups = [], chipValueMap, chipBlockRateGroups } = chipParams

        const chipValueMergedMap = Object.assign(this.chipCodeToValueDefaultMap, chipValueMap)

        return {
            formCode,
            title: title || 'Поділіться враженнями',
            rating: {
                label: ratingLabel || this.ratingLabelMap[category],
                items: [
                    { rate: RatingScore.Awful, emoji: '😡' },
                    { rate: RatingScore.Bad, emoji: '😢' },
                    { rate: RatingScore.Ok, emoji: '😐' },
                    { rate: RatingScore.Good, emoji: '😁' },
                    { rate: RatingScore.Excellent, emoji: '😍' },
                ].map<RatingItem<T>>(({ rate, emoji }) => {
                    if (chipBlockRateGroups) {
                        const chipsBlockGroup = chipBlockRateGroups.find((group) => group.rate.includes(rate))
                        const { chipBlocks = [] } = chipsBlockGroup || {}

                        return {
                            rate,
                            emoji,
                            chip: { label: '', description: '', chips: [] },
                            chipBlocks,
                        }
                    }

                    const chipsRateGroup = chipsRateGroups.find((group) => group.rate.includes(rate))
                    const { chips = [] } = chipsRateGroup || {}
                    const chipItems = chips.map((chip) => ({
                        code: chip,
                        name: chipValueMergedMap[chip] || '',
                    }))

                    return {
                        rate,
                        emoji,
                        chip: chipItems.length
                            ? {
                                  label: chipLabels?.[rate] || this.chipLabelMap[rate],
                                  description: chipDescription ?? 'Оберіть один або кілька варіантів.',
                                  chips: chipItems,
                              }
                            : { label: '', description: '', chips: [] },
                    }
                }),
            },
            comment: {
                label: commentLabel || this.commentLabelMap[category],
                hint: commentHint || 'Розкажіть більше про враження (необовʼязково)',
            },
            mainButton: mainButton || 'Надіслати відгук',
        }
    }
}
