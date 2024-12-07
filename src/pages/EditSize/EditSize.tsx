import { useParams } from 'react-router-dom';
import { Center, Title } from '@mantine/core';
import { LinkBack, UpdateSizeForm } from '@/components';
import { useSizeStore } from '@/store/sizeStore';

export const EditSize = () => {
  const { id } = useParams();
  const { sizes } = useSizeStore();
  const size = sizes.find((s) => s.id === Number(id));

  return (
    <div>
      <LinkBack title="Back" href="/sizes" />
      <Center>
        <Title>Edit {size?.name || 'entity'}</Title>
      </Center>
      <UpdateSizeForm />
    </div>
  );
};
