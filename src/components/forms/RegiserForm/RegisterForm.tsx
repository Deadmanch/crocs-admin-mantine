import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Button, PasswordInput, TextInput } from '@mantine/core';
import { registerUser } from '@/api/auth';
import { IRegisterRequest } from '@/api/interfaces/auth.interface';
import { registerSchema } from './schemas/registerSchema';
import styles from './RegisterForm.module.css';

interface IRegisterProps extends React.FormHTMLAttributes<HTMLFormElement> {}

export const RegisterForm = ({ className, ...props }: IRegisterProps) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IRegisterRequest>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data: IRegisterRequest) => {
    try {
      const dataWithRole: IRegisterRequest = {
        ...data,
        role: 'ADMIN',
      };

      await registerUser(dataWithRole);
      toast.success('User created successfully');
      navigate('/auth/login');
    } catch (error) {
      toast.error('Error creating user');
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
      <TextInput
        {...register('fullName')}
        error={errors.fullName?.message}
        className={styles.input}
        label="Full Name"
        placeholder="Your full name"
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
        Create account
      </Button>
    </form>
  );
};
