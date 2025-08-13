import { IRole } from '@entities/users/model/types';
import { AdminPage } from '@pages/admin/ui/admin-page';
import { LoginPage } from '@pages/login/ui/page';
import { PostPage } from '@pages/post/ui/post-page';
import { PostsPage } from '@pages/posts/ui/posts-page';
import { RegisterPage } from '@pages/register/ui/page';
import { ProfilePage } from '@pages/user/ui/profile-page';
import { ReactNode } from 'react';

export const routes: {
  path: string;
  element: ReactNode;
  rolesAllowed?: IRole[];
  loginRequired?: boolean;
}[] = [
  {
    path: 'profile',
    element: <ProfilePage />,
    loginRequired: true,
  },
  {
    path: 'posts',
    element: <PostsPage />,
  },
  {
    path: 'posts/:id',
    element: <PostPage />,
  },
  {
    path: 'admin',
    element: <AdminPage />,
    rolesAllowed: ['admin'],
    loginRequired: true,
  },
  {
    path: 'login',
    element: <LoginPage />,
    loginRequired: false,
  },
  {
    path: 'register',
    element: <RegisterPage />,
    loginRequired: false,
  },
];
