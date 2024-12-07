import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Center, Flex, Title } from '@mantine/core';
import { deleteProduct } from '@/api/product';
import { AnchorButton, CustomPagination, LinkBack, Table } from '@/components';
import { useProductStore } from '@/store/productStore';

export const Products = () => {
  const { products, fetchProducts, total, currentPage, setPage } = useProductStore();
  useEffect(() => {
    fetchProducts(currentPage, 10);
  }, [fetchProducts, currentPage]);

  const handleDelete = async (id: number) => {
    try {
      await deleteProduct(id);
      toast.success('Category deleted successfully');
      fetchProducts(currentPage, 10);
    } catch (error) {
      toast.error('Error deleting category');
    }
  };

  return (
    <>
      <LinkBack title="Home" href="/" />
      <Flex align="center" justify="space-between">
        <Title>Products</Title>
        <AnchorButton href="/products/create">Create new entity</AnchorButton>
      </Flex>
      <Table onDelete={handleDelete} href="/products" lists={products} />
      <Center mt="xl">
        <CustomPagination
          total={Math.ceil(total / 10)}
          value={currentPage}
          onPageChange={setPage}
        />
      </Center>
    </>
  );
};
