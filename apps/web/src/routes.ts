import { Route as rootRoute } from './app/routes/__root'
import { Route as IndexImport } from './app/routes/index'
import { Route as PostsIndexImport } from './app/routes/posts/index'
import { Route as PostsCreateImport } from './app/routes/posts/create'
import { Route as PostsIdImport } from './app/routes/posts/$id'

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PostsIndexRoute = PostsIndexImport.update({
  path: '/posts/',
  getParentRoute: () => rootRoute,
} as any)

const PostsCreateRoute = PostsCreateImport.update({
  path: '/posts/create',
  getParentRoute: () => rootRoute,
} as any)

const PostsIdRoute = PostsIdImport.update({
  path: '/posts/$id',
  getParentRoute: () => rootRoute,
} as any)
declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/posts/$id': {
      preLoaderRoute: typeof PostsIdImport
      parentRoute: typeof rootRoute
    }
    '/posts/create': {
      preLoaderRoute: typeof PostsCreateImport
      parentRoute: typeof rootRoute
    }
    '/posts/': {
      preLoaderRoute: typeof PostsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}
export const routeTree = rootRoute.addChildren([
  IndexRoute,
  PostsIdRoute,
  PostsCreateRoute,
  PostsIndexRoute,
])
