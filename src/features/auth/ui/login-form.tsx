import { useLogin } from '@entities/auth/model/use-login';
import { BaseAuthForm, SError, STitle } from '@shared/ui/base-auth-form';
import { SButton } from '@shared/ui/button';
import { SInput, SInputWrapper, SLabel, SSpan } from '@shared/ui/input';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useTheme } from 'styled-components';

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const theme = useTheme();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({ mode: 'onChange' });
  const { login } = useLogin();

  const onSubmit = useCallback(
    (data: Inputs) => {
      const result = login(data.email, data.password);
      if (result === null) {
        setError('root.serverError', { type: 'custom', message: 'Email or password is incorrect' });
      }
    },
    [login, setError]
  );

  return (
    <BaseAuthForm onSubmit={handleSubmit(onSubmit)}>
      <STitle>Login</STitle>
      {errors.root?.serverError && <SError>{errors.root.serverError.message}</SError>}
      <SInputWrapper>
        <SLabel htmlFor={'email'}>Email</SLabel>
        <SInput
          id="email"
          type="email"
          {...register('email', { required: 'This field is required' })}
        />
        {errors.email && <SSpan>{errors.email.message}</SSpan>}
      </SInputWrapper>
      <SInputWrapper>
        <SLabel htmlFor={'password'}>Password</SLabel>
        <SInput
          id="password"
          type="password"
          {...register('password', {
            required: 'This field is required',
            minLength: { value: 8, message: 'At least 8 characters' },
          })}
        />
        {errors.password && <SSpan>{errors.password.message}</SSpan>}
      </SInputWrapper>
      <SButton
        type="submit"
        $variant="contained"
        $color={theme.colors.primary}
        $secondColor={theme.colors.background}
      >
        Login
      </SButton>
    </BaseAuthForm>
  );
};
