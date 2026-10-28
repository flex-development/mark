import type { CustomPluginOptions } from 'rollup'

declare module 'rollup' {
  interface ResolveIdOptions {
    attributes: Record<string, string>
    custom?: CustomPluginOptions
    importerAttributes?: Record<string, string> | undefined
    isEntry: boolean
  }
}
