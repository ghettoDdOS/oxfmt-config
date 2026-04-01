import { factory } from '@ghettoddos/oxlint-config'

export default factory({
  typescript: { typeAware: true },
  type: 'lib',
  jsxA11y: false,
  overrides: [
    {
      files: ['src/**/*.ts'],
      rules: { 'perfectionist/sort-objects': 'error' },
    },
  ],
})
