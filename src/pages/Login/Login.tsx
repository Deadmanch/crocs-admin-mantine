import { Link } from 'react-router-dom';
import { Container, Paper, Text } from '@mantine/core';
import { LoginForm } from '@/components';

export function Login() {
  return (
    <Container size={420}>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet? <Link to="/auth/register">Create account</Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30}>
        <LoginForm />
      </Paper>
    </Container>
  );
}
