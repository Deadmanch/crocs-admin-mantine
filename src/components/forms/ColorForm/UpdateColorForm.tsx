import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { Center, Checkbox, Flex, TextInput } from '@mantine/core';
import { updateColor } from '@/api/color';
import { IColorUpdateRequest } from '@/api/interfaces/color.interface';
import { Button, ImageDropzone } from '@/components';
import { updateColorFormSchema } from './schemas/update-color-form-schema';

export const UpdateColorForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IColorUpdateRequest>({
    resolver: zodResolver(updateColorFormSchema),
    defaultValues: {
      images: [],
    },
  });

  const onSubmit = async (data: IColorUpdateRequest) => {
    try {
      await updateColor(Number(id), data);
      toast.success('Color updated successfully');
      navigate('/colors');
    } catch (error) {
      toast.error('Error updating color');
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
          Update Color
        </Button>
      </Center>
    </form>
  );
};
