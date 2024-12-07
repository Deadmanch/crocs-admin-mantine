import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Center, Checkbox, Flex, TextInput } from '@mantine/core';
import { createColor } from '@/api/color';
import { IColorCreateRequest } from '@/api/interfaces/color.interface';
import { Button, ImageDropzone } from '@/components';
import { createColorFormSchema } from './schemas/create-color-form-schema';

export const CreateColorForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IColorCreateRequest>({
    resolver: zodResolver(createColorFormSchema),
    defaultValues: {
      inStock: true,
      images: [],
    },
  });

  const onSubmit = async (data: IColorCreateRequest) => {
    try {
      await createColor(data);
      toast.success('Color created successfully');
      navigate('/colors');
    } catch (error) {
      toast.error('Error creating color');
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
                placeholder="Color Name"
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

          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <ImageDropzone onFilesChange={(files) => setValue('images', files)} {...field} />
            )}
          />
        </Flex>
      </Center>

      <Center mt={40}>
        <Button ButtonType="ghost" type="submit">
          Create Color
        </Button>
      </Center>
    </form>
  );
};
