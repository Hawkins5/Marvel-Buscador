import { lazy } from 'react';

const Characters = lazy(() => import('./Pages/Characters'));
const Comics = lazy(() => import('./Pages/Comics'));
const CharacterDetail = lazy(() => import('./Pages/Characters/CharacterDetail'));

const routes = [
  {
    path: '/',
    exact: true,
    component: Characters,
  },
  {
    path: '/comics',
    exact: true,
    component: Comics,
  },
  {
    path: '/character/:characterId',
    exact: true,
    component: CharacterDetail,
  },
];

export default routes;
