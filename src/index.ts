import type { OxfmtConfig } from 'oxfmt'

import { defineConfig } from 'oxfmt'

import { GLOB_EXCLUDE } from './globs.ts'

export function factory({
  userIgnores = [],
  ...overrides
}: OxfmtConfig & {
  userIgnores?: string[] | ((originals: string[]) => string[])
} = {}): OxfmtConfig {
  let ignores = [...GLOB_EXCLUDE]

  if (typeof userIgnores === 'function') {
    ignores = userIgnores(ignores)
  } else {
    ignores = [...ignores, ...userIgnores]
  }

  return defineConfig({
    semi: false,
    singleQuote: true,
    sortImports: {
      groups: [
        'type-import',
        ['type-parent', 'type-sibling', 'type-index', 'type-internal'],

        'value-builtin',
        'value-external',
        'value-internal',
        ['value-parent', 'value-sibling', 'value-index'],
        'side_effect',
        'unknown',
      ],
    },

    ...overrides,

    ignorePatterns: [
      '**/node_modules',
      '**/dist',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/bun.lockb',

      '**/output',
      '**/coverage',
      '**/temp',
      '**/.temp',
      '**/tmp',
      '**/.tmp',
      '**/.history',
      '**/.vitepress/cache',
      '**/.nuxt',
      '**/.next',
      '**/.svelte-kit',
      '**/.vercel',
      '**/.changeset',
      '**/.idea',
      '**/.cache',
      '**/.output',
      '**/.vite-inspect',
      '**/.yarn',
      '**/vite.config.*.timestamp-*',

      '**/CHANGELOG*.md',
      '**/*.min.*',
      '**/LICENSE*',
      '**/__snapshots__',
      '**/auto-import?(s).d.ts',
      '**/components.d.ts',

      ...ignores,
    ],
  })
}

export default factory
