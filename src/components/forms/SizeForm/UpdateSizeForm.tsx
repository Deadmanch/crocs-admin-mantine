import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { Center, Checkbox, Flex, TextInput } from '@mantine/core';
import { ISizeUpdateRequest } from '@/api/interfaces/size.interface';
import { sizeUpdate } from '@/api/size';
import { Button } from '@/components';
import { updateSizeFormSchema } from './schemas/update-size-form.schema';

export const UpdateSizeForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISizeUpdateRequest>({
    resolver: zodResolver(updateSizeFormSchema),
    defaultValues: {
      inStock: true,
    },
  });

  const onSubmit = async (data: ISizeUpdateRequest) => {
    try {
      await sizeUpdate(Number(id), data);
      toast.success('Size updated successfully');
      navigate('/sizes');
    } catch (error) {
      toast.error('Error updating size');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center mt={40}>
        <Flex direction="column" gap="lg">
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextInput
                w={300}
                label="Title"
                placeholder="32"
                error={errors.title?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="inStock"
            control={control}
            render={({ field }) => (
              <Checkbox
                label="InStock"
                color="var(--primary)"
                variant="outline"
                size="md"
                checked={field.value}
                onChange={field.onChange}
                error={errors.inStock?.message}
              />
            )}
          />
        </Flex>
      </Center>
      <Center mt={40}>
        <Button ButtonType="ghost" type="submit">
          Update Size
        </Button>
      </Center>
    </form>
  );
};
