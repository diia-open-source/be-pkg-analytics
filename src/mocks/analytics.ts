import { RatingChipMeta, RatingForm, RatingScore } from '../interfaces'

export function getRatingFormMock(ratingForm: Partial<RatingForm> = {}): RatingForm {
    const chips: RatingChipMeta[] = [
        {
            code: 'addressError',
            name: 'name',
        },
        {
            code: 'mobility',
            name: 'name',
        },
    ]

    return <RatingForm>{
        title: 'Поділіться враженнями',
        rating: {
            label: 'Задоволені замовленням та отриманням послуги в Дії?',
            items: [
                {
                    rate: RatingScore.Awful,
                    emoji: '😡',
                    chip: {
                        label: 'Що засмутило?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                },
                {
                    rate: RatingScore.Bad,
                    emoji: '😢',
                    chip: {
                        label: 'Що засмутило?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                },
                {
                    rate: RatingScore.Ok,
                    emoji: '😐',
                    chip: {
                        label: 'На що команді звернути увагу?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                },
                {
                    rate: RatingScore.Good,
                    emoji: '😁',
                    chip: {
                        label: 'Що сподобалось?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                },
                {
                    rate: RatingScore.Excellent,
                    emoji: '😍',
                    chip: {
                        label: 'Що сподобалось?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                },
            ],
        },
        comment: {
            label: 'Як можна покращити послугу?',
            hint: 'Розкажіть більше про враження (необовʼязково)',
        },
        mainButton: 'Надіслати відгук',
        ...ratingForm,
    }
}
