import { Suspense, lazy, ReactNode, Key } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const MainLayout = lazy(() => import('../pages/layout'))
const PageSsd = lazy(() => import('../pages/ssd'))
const PageIndex = lazy(() => import('../App'))
const Page404 = lazy(() => import('@/pages/compoents/404'))

interface RouteMeta {
  title: string
  icon?: string
}

export type RouteItem = {
  key: Key
  path: string
  element: ReactNode
  title: string
  icon?: ReactNode
  children?: RouteItem[]
  meta?: RouteMeta
}
export const routeItems: RouteItem[] = [
  {
    key: 'ssd',
    path: '/',
    title: '总览看板',
    element: <PageSsd />,
  },
  {
    key: 'ssd',
    path: '/ssd',
    title: '总览看板',
    element: <PageSsd />,
  },
  {
    key: '404',
    path: '/404',
    title: '404',
    element: <Page404 />,
  },
  {
    key: '*',
    path: '*',
    title: '404',
    element: <Page404 />,
  },
]

const RouterConfig = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {routeItems.map((d) => (
            <Route key={d.key} path={d.path} element={d.element} />
          ))}
        </Route>
        <Route path="/test" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouterConfig
