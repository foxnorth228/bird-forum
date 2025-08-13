import { LoginForm } from '@features/auth/ui/login-form';
import { BaseAuthPage } from '@shared/ui/base-auth-page';

export const LoginPage = () => {
  return (
    <BaseAuthPage>
      <LoginForm />
    </BaseAuthPage>
  );
};
