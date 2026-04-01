# @ghettoddos/oxfmt-config

## Usage

### Manual Install

```bash
pnpm i -D oxfmt @ghettoddos/oxfmt-config
```

And create `oxfmt.config.ts` in your project root:

```ts
import type { OxfmtConfig } from 'oxfmt'
import { factory } from '@ghettoddos/oxfmt-config'

const config: OxfmtConfig = factory()

export default config
```
