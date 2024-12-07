import { Center, Title } from '@mantine/core';
import { CreateProductForm, LinkBack } from '@/components';

export const AddProducts = () => {
  return (
    <div>
      <LinkBack title="Back" href="/products" />
      <Center>
        <Title>Create an entry</Title>
      </Center>
      <CreateProductForm />
    </div>
  );
};
