import { AdminPage } from '@pages/admin/ui/admin-page';
import { PostPage } from '@pages/post/ui/post-page';
import { PostsPage } from '@pages/posts/ui/posts-page';
import { ProfilePage } from '@pages/user/ui/profile-page';

export const routes = [
  {
    path: 'profile',
    element: <ProfilePage />,
    private: true,
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
  },
];
