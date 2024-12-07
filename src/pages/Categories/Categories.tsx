import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Center, Flex, Title } from '@mantine/core';
import { deleteCategory } from '@/api/category';
import { AnchorButton, CustomPagination, LinkBack, Table } from '@/components';
import { useCategoryStore } from '@/store/categoryStore';

export const Categories = () => {
  const { categories, total, currentPage, setPage, fetchCategories } = useCategoryStore();

  useEffect(() => {
    fetchCategories(currentPage, 10);
  }, [fetchCategories, currentPage]);

  const handleDelete = async (id: number) => {
    try {
      await deleteCategory(id);
      toast.success('Category deleted successfully');
      fetchCategories(currentPage, 10);
    } catch (error) {
      toast.error('Error deleting category');
    }
  };

  return (
    <>
      <LinkBack title="Home" href="/" />
      <Flex align="center" justify="space-between">
        <Title>Categories</Title>
        <AnchorButton href="/categories/create">Create new entity</AnchorButton>
      </Flex>
      <Table onDelete={handleDelete} href="/categories" lists={categories} />
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
