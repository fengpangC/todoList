import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewTodo } from './pages/new-todo/new-todo';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'new-todo',
    component: NewTodo,
  },
];
