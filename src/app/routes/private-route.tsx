import { ReactNode } from 'react';
import { Navigate } from 'react-router';

interface PrivateRouteProps {
  children: ReactNode;
  rolesAllowed?: string[];
  currentRole: string;
}

export function PrivateRoute({ children, rolesAllowed, currentRole }: PrivateRouteProps) {
  if (!currentRole) {
    return <Navigate to="/login" replace />;
  }

  if (rolesAllowed && !rolesAllowed.includes(currentRole)) {
    return <Navigate to="/forbidden" replace />;
  }

  return <>{children}</>;
}
