'use client';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { LogIn } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { LoginFormProps, LoginFormSchema } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppRoutesEnum } from '@/constants';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Logo from '../../../assets/black-logo.png';

export function LoginWrapper() {
  const router = useRouter();
  const { login } = useAuth();
  const {
    handleSubmit,
    formState: { errors },
    setError,
    control,
  } = useForm<LoginFormProps>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      userLogin: '',
      password: '',
    },
  });

  const handleFakeLogin = (data: LoginFormProps) => {
    const isValidUser = data.userLogin === 'teste@teste.com';
    const isValidPassword = data.password === 'teste123';

    if (!isValidUser) {
      setError('userLogin', { message: 'Usuário inválido' });
      return;
    }

    if (!isValidPassword) {
      setError('password', { message: 'Senha inválida' });
      return;
    }

    if (isValidUser && isValidPassword) {
      login();
      router.push(AppRoutesEnum.HOME);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-2 sm:px-0">
      <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-200 bg-white p-6 shadow-md">
        <div className="flex items-center justify-between">
          <h2 className="mb-6 text-center text-2xl font-semibold">Login</h2>
          <Image src={Logo} alt="Logo Montink" width={150} height={70} />
        </div>
        <form onSubmit={handleSubmit(handleFakeLogin)} className="flex flex-col gap-6">
          <div>
            <label htmlFor="userLogin" className="mb-1 block font-medium text-gray-700">
              E-mail
            </label>
            <Controller
              name="userLogin"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Digite seu e-mail ou CPF"
                  errorMessage={errors.userLogin?.message}
                  id="userLogin"
                />
              )}
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1 block font-medium text-gray-700">
              Senha
            </label>
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Digite sua senha"
                  type="password"
                  id="password"
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </div>
          <Button
            className="flex w-full flex-row-reverse justify-between"
            icon={<LogIn />}
            type="submit"
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
