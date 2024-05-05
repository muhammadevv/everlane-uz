import { AboutPage, EverWorldPage, HomePage, MensPage, NotFoundPage } from "../pages";

export const routes = [
  {
    id: 1,
    element: <HomePage />,
    path: '/',
  },
  {
    id: 2,
    element: <MensPage />,
    path: '/mens',
  },
  {
    id: 3,
    element: <HomePage />,
    path: '/womens',
  },
  {
    id: 4,
    element: <AboutPage />,
    path: '/about',
  },
  {
    id: 5,
    element: <EverWorldPage />,
    path: '/ever-world',
  },
  {
    id: 6,
    element: <NotFoundPage />,
    path: '*',
  },
]

export const category = [
  {
    id: 1,
    title: 'Men',
    slug: '/mens',
  },
  {
    id: 2,
    title: 'Women',
    slug: '/womens',
  },
  {
    id: 3,
    title: 'About',
    slug: '/about',
  },
  {
    id: 4,
    title: 'Everworld Stories',
    slug: '/ever-world',
  },
]