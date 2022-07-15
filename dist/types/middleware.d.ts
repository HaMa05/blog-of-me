import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/ha.bui/Desktop/Company-Project/Person/blog-person/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}