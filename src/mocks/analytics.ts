import { RatingForm } from '@diia-inhouse/types'

import { RatingChipMeta, RatingScore } from '../interfaces'

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

    return {
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
                    chipBlocks: [],
                },
                {
                    rate: RatingScore.Bad,
                    emoji: '😢',
                    chip: {
                        label: 'Що засмутило?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                    chipBlocks: [],
                },
                {
                    rate: RatingScore.Ok,
                    emoji: '😐',
                    chip: {
                        label: 'На що команді звернути увагу?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                    chipBlocks: [],
                },
                {
                    rate: RatingScore.Good,
                    emoji: '😁',
                    chip: {
                        label: 'Що сподобалось?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                    chipBlocks: [],
                },
                {
                    rate: RatingScore.Excellent,
                    emoji: '😍',
                    chip: {
                        label: 'Що сподобалось?',
                        description: 'Оберіть один або кілька варіантів.',
                        chips,
                    },
                    chipBlocks: [],
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
