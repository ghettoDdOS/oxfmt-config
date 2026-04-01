import type { OxlintConfig } from 'oxlint'

import { factory } from '@ghettoddos/oxlint-config'

const config: OxlintConfig = factory({
  typescript: { typeAware: true },
  type: 'lib',
  overrides: [
    {
      files: ['src/**/*.ts'],
      rules: { 'perfectionist/sort-objects': 'error' },
    },
  ],
})

export default config
