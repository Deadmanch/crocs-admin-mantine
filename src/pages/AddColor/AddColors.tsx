import { Center, Title } from '@mantine/core';
import { CreateColorForm, LinkBack } from '@/components';

export const AddColors = () => {
  return (
    <div>
      <LinkBack title="Back" href="/colors" />
      <Center>
        <Title>Create an entry</Title>
      </Center>
      <CreateColorForm />
    </div>
  );
};
