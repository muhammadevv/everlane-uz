import { AboutPage, EverWorldPage, HomePage, WomenPage, NotFoundPage, ProductPage, Collections } from "../pages";

export const routes = [
  {
    id: 1,
    element: <HomePage />,
    path: '/',
  },
  {
    id: 2,
    element: <HomePage />,
    path: '/mens',
  },
  {
    id: 3,
    element: <WomenPage />,
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
    element: <ProductPage />,
    path: '/products',
  },
  {
    id: 7,
    element: <Collections />,
    path: '/collections',
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