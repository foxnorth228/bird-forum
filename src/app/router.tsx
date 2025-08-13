import { useAuth } from '@entities/auth/model/use-auth';
import { BrowserRouter, Route, Routes } from 'react-router';

import { PrivateRoute } from './routes/private-route';
import { routes } from './routes/routes';

export function AppRouter() {
  const user = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, rolesAllowed, loginRequired }, i) => {
          let content = element;

          if (loginRequired !== undefined) {
            content = (
              <PrivateRoute user={user} rolesAllowed={rolesAllowed} loginRequired={loginRequired}>
                {element}
              </PrivateRoute>
            );
          }

          return <Route key={i} path={path} element={content} />;
        })}
      </Routes>
    </BrowserRouter>
  );
}
