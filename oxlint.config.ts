import { defineConfig, base } from '@diia-inhouse/oxc-config/oxlint'

export default defineConfig({
    ...base,
    rules: {
        ...base.rules,
        '@diia-inhouse/locale/no-hardcoded-cyrillic': 'off',
        'eslint/no-restricted-imports': 'off',
    },
    overrides: [
        {
            files: ['tests/**/*.ts'],
            rules: {
                '@diia-inhouse/code/prefer-as-const-object': 'off',
                '@diia-inhouse/code/const-enum-naming': 'off',
                'import/no-unassigned-import': ['warn', { allow: ['vitest'] }],
            },
        },
    ],
})
