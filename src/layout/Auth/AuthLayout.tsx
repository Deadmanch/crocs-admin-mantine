import { Outlet } from 'react-router-dom';
import { Center, Flex, Title } from '@mantine/core';

export const AuthLayout = () => {
  return (
    <>
      <Center h="100vh">
        <Flex direction="column" align="center">
          <Title size={40} order={1}>
            Crocs Admin
          </Title>
          <Outlet />
        </Flex>
      </Center>
    </>
  );
};
