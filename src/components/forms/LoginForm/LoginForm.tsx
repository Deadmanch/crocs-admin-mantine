import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { login } from '@/api/auth';
import { ILoginRequest } from '@/api/interfaces/auth.interface';
import { useUserStore } from '@/store/userStore';
import { loginSchema } from './schemas/loginShema';
import styles from './LoginForm.module.css';

interface ILoginFormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const LoginForm = ({ className, ...props }: ILoginFormProps) => {
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginRequest>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: ILoginRequest) => {
    try {
      const response = await login(data);
      setUser(response.data.user, response.data.access_token);
      toast.success('User logged in successfully');
      navigate('/');
    } catch (error) {
      toast.error('Error logging in user');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={clsx(className, styles.form)} {...props}>
      <TextInput
        {...register('email')}
        error={errors.email?.message}
        className={styles.input}
        label="Email"
        placeholder="you@mantine.dev"
        required
      />
      <PasswordInput
        {...register('password')}
        error={errors.password?.message}
        className={styles.input}
        label="Password"
        placeholder="Your password"
        required
        mt="md"
      />
      <Button type="submit" className={styles.button} fullWidth mt="xl">
        Sign in
      </Button>
    </form>
  );
};
