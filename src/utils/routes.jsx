import { AboutPage, EverWorldPage, HomePage, MensPage, NotFoundPage } from "../pages";

export const routes = [
  {
    id: 1,
    element: <HomePage />,
    path: '/',
  },
  {
    id: 2,
    element: <HomePage />,
    path: '/womens/',
  },
  {
    id: 3,
    element: <MensPage />,
    path: '/mens/',
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