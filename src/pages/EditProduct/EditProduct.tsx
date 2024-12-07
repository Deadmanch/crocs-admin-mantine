import { useParams } from 'react-router-dom';
import { Center, Title } from '@mantine/core';
import { LinkBack, UpdateProductForm } from '@/components';
import { useProductStore } from '@/store/productStore';

export const EditProduct = () => {
  const { id } = useParams();
  const { products } = useProductStore();
  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <LinkBack title="Back" href="/products" />
      <Center>
        <Title>Edit {product?.name || 'entity'}</Title>
      </Center>
      <UpdateProductForm />
    </div>
  );
};
