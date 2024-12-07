import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Center, Checkbox, Flex, TextInput } from '@mantine/core';
import { ISizeCreateRequest } from '@/api/interfaces/size.interface';
import { sizeCreate } from '@/api/size';
import { Button } from '@/components';
import { createSizeFormSchema } from './schemas/create-size-form.schema';

export const CreateSizeForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISizeCreateRequest>({
    resolver: zodResolver(createSizeFormSchema),
    defaultValues: {
      inStock: true,
    },
  });

  const onSubmit = async (data: ISizeCreateRequest) => {
    try {
      await sizeCreate(data);
      toast.success('Size created successfully');
      navigate('/sizes');
    } catch (error) {
      toast.error('Error creating size');
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
                required
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
          Create Size
        </Button>
      </Center>
    </form>
  );
};
