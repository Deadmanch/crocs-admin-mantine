import { useParams } from 'react-router-dom';
import { Center, Title } from '@mantine/core';
import { LinkBack, UpdateColorForm } from '@/components';
import { useColorStore } from '@/store/colorStore';

export const EditColor = () => {
  const { id } = useParams();
  const { colors } = useColorStore();
  const color = colors.find((c) => c.id === Number(id));

  return (
    <div>
      <LinkBack title="Back" href="/colors" />
      <Center>
        <Title>Edit {color?.name || 'entity'}</Title>
      </Center>
      <UpdateColorForm />
    </div>
  );
};
