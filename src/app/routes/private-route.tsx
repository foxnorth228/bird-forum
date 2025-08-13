import { IRole, IUser } from '@entities/users/model/types';
import { ReactNode } from 'react';
import { Navigate } from 'react-router';

interface PrivateRouteProps {
  children: ReactNode;
  user: IUser | null;
  loginRequired: boolean;
  rolesAllowed?: IRole[];
}

export function PrivateRoute({ children, user, rolesAllowed, loginRequired }: PrivateRouteProps) {
  if (loginRequired && !user) {
    return <Navigate to="/login" replace />;
  }

  if (!loginRequired && user) {
    return <Navigate to="/posts" replace />;
  }

  // @ts-expect-error includes should check undefined
  if (rolesAllowed && !rolesAllowed.includes(user?.role)) {
    return <Navigate to="/posts" replace />;
  }

  return <>{children}</>;
}
