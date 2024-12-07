import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Center, Flex, Title } from '@mantine/core';
import { deleteColor } from '@/api/color';
import { AnchorButton, CustomPagination, LinkBack, Table } from '@/components';
import { useColorStore } from '@/store/colorStore';

export const Colors = () => {
  const { colors, fetchColors, total, currentPage, setPage } = useColorStore();

  useEffect(() => {
    fetchColors(currentPage, 10); // Загружаем данные при монтировании
  }, [fetchColors, currentPage]);

  const handleDelete = async (id: number) => {
    try {
      await deleteColor(id);
      toast.success('Category deleted successfully');
      fetchColors(currentPage, 10);
    } catch (error) {
      toast.error('Error deleting category');
    }
  };

  return (
    <>
      <LinkBack title="Home" href="/" />
      <Flex align="center" justify="space-between">
        <Title>Colors</Title>
        <AnchorButton href="/colors/create">Create new entity</AnchorButton>
      </Flex>
      <Table onDelete={handleDelete} href="/colors" lists={colors} />
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
