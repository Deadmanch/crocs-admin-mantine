import { Center, Title } from '@mantine/core';
import { CreateCategoryForm, LinkBack } from '@/components';

export const AddCategories = () => {
  return (
    <div>
      <LinkBack title="Back" href="/categories" />
      <Center>
        <Title>Create an entry</Title>
      </Center>
      <CreateCategoryForm />
    </div>
  );
};
