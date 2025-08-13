import { BrowserRouter, Route, Routes } from 'react-router';

import { PrivateRoute } from './routes/private-route';
import { routes } from './routes/routes';

export function AppRouter({ currentRole }: { currentRole: string }) {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element, private: isPrivate, rolesAllowed }, i) => {
          let content = element;

          if (isPrivate) {
            content = (
              <PrivateRoute rolesAllowed={rolesAllowed} currentRole={currentRole}>
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
