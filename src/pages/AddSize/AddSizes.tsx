import { Center, Title } from '@mantine/core';
import { CreateSizeForm, LinkBack } from '@/components';

export const AddSizes = () => {
  return (
    <div>
      <LinkBack title="Back" href="/sizes" />
      <Center>
        <Title>Create an entry</Title>
      </Center>
      <CreateSizeForm />
    </div>
  );
};
