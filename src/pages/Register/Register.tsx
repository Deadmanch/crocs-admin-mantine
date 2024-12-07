import { Link } from 'react-router-dom';
import { Container, Paper, Text } from '@mantine/core';
import { RegisterForm } from '@/components';

export const Register = () => {
  return (
    <Container size={420}>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account? <Link to="/auth/login">Login</Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <RegisterForm />
      </Paper>
    </Container>
  );
};
