import { randomUUID } from 'crypto'

import { ChipsRateGroup, CustomRatingFormCode, RatingCategory, RatingForm, RatingScore, RatingUtils } from '../../../src'

describe(`${RatingUtils.name} service`, () => {
    const ratingUtilsService = new RatingUtils()

    describe(`method ${ratingUtilsService.getRatingForm.name}`, () => {
        it('should return rating form with custom title and chips', () => {
            const customTitle = randomUUID()
            const chipValueMap = {
                chip1: 'val1',
                chip2: 'val2',
                chip5: 'val5',
            }
            const chipsRateGroups: ChipsRateGroup<string>[] = [
                {
                    rate: [RatingScore.Awful, RatingScore.Bad, RatingScore.Ok],
                    chips: ['chip1', 'chip2'],
                },
                {
                    rate: [RatingScore.Good, RatingScore.Excellent],
                    chips: ['chip3', 'chip4', 'chip5'],
                },
            ]

            const chipLabels: Partial<Record<RatingScore, string>> = {
                [RatingScore.Awful]: 'awfulChipLabel',
                [RatingScore.Bad]: 'badChipLabel',
            }

            const formCode = CustomRatingFormCode.CancelProperUser

            const result = ratingUtilsService.getRatingForm(
                formCode,
                RatingCategory.PublicService,
                {
                    chipsRateGroups,
                    chipValueMap,
                },
                { title: customTitle, chipLabels },
            )

            expect(result).toEqual<RatingForm>({
                formCode,
                title: customTitle,
                rating: {
                    label: expect.any(String),
                    items: [
                        {
                            rate: RatingScore.Awful,
                            emoji: expect.any(String),
                            chip: {
                                label: 'awfulChipLabel',
                                description: expect.any(String),
                                chips: [
                                    { code: 'chip1', name: 'val1' },
                                    { code: 'chip2', name: 'val2' },
                                ],
                            },
                        },
                        {
                            rate: RatingScore.Bad,
                            emoji: expect.any(String),
                            chip: {
                                label: 'badChipLabel',
                                description: expect.any(String),
                                chips: [
                                    { code: 'chip1', name: 'val1' },
                                    { code: 'chip2', name: 'val2' },
                                ],
                            },
                        },
                        {
                            rate: RatingScore.Ok,
                            emoji: expect.any(String),
                            chip: {
                                label: expect.any(String),
                                description: expect.any(String),
                                chips: [
                                    { code: 'chip1', name: 'val1' },
                                    { code: 'chip2', name: 'val2' },
                                ],
                            },
                        },
                        {
                            rate: RatingScore.Good,
                            emoji: expect.any(String),
                            chip: {
                                label: expect.any(String),
                                description: expect.any(String),
                                chips: [
                                    { code: 'chip3', name: '' },
                                    { code: 'chip4', name: '' },
                                    { code: 'chip5', name: 'val5' },
                                ],
                            },
                        },
                        {
                            rate: RatingScore.Excellent,
                            emoji: expect.any(String),
                            chip: {
                                label: expect.any(String),
                                description: expect.any(String),
                                chips: [
                                    { code: 'chip3', name: '' },
                                    { code: 'chip4', name: '' },
                                    { code: 'chip5', name: 'val5' },
                                ],
                            },
                        },
                    ],
                },
                comment: {
                    label: expect.any(String),
                    hint: expect.any(String),
                },
                mainButton: expect.any(String),
            })
        })
    })
})
