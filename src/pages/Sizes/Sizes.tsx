import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { Center, Flex, Title } from '@mantine/core';
import { sizeDelete } from '@/api/size';
import { AnchorButton, CustomPagination, LinkBack, Table } from '@/components';
import { useSizeStore } from '@/store/sizeStore';

export const Sizes = () => {
  const { sizes, fetchSizes, total, currentPage, setPage } = useSizeStore();
  useEffect(() => {
    fetchSizes(currentPage, 10);
  }, [fetchSizes, currentPage]);

  const handleDelete = async (id: number) => {
    try {
      await sizeDelete(id);
      toast.success('Category deleted successfully');
      fetchSizes(currentPage, 10);
    } catch (error) {
      toast.error('Error deleting category');
    }
  };

  return (
    <>
      <LinkBack title="Home" href="/" />
      <Flex align="center" justify="space-between">
        <Title>Sizes</Title>
        <AnchorButton href="/sizes/create">Create new entity</AnchorButton>
      </Flex>
      <Table onDelete={handleDelete} href="/sizes" lists={sizes} />
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
