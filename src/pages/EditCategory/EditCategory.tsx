import { useParams } from 'react-router-dom';
import { Center, Title } from '@mantine/core';
import { LinkBack, UpdateProductForm } from '@/components';
import { useCategoryStore } from '@/store/categoryStore';


export const EditCategory = () => {
  const { id } = useParams();
  const { categories } = useCategoryStore();
  const category = categories.find((c) => c.id === Number(id));

  return (
    <div>
      <LinkBack title="Back" href="/categories" />
      <Center>
        <Title>Edit {category?.name || 'entity'}</Title>
      </Center>
      <UpdateProductForm />
    </div>
  );
};