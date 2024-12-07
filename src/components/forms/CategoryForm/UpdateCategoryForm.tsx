import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import { Center, Flex, Text, TextInput } from '@mantine/core';
import { updateCategory } from '@/api/category';
import { ICategoryUpdateRequest } from '@/api/interfaces/category.interface';
import { Button, CustomRichTextEditor } from '@/components';
import { updateCategoryFormSchema } from './schemas/update-category-form.schema';

export const UpdateCategoryForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ICategoryUpdateRequest>({
    resolver: zodResolver(updateCategoryFormSchema),
  });

  const onSubmit = async (data: ICategoryUpdateRequest) => {
    try {
      await updateCategory(Number(id), data);
      toast.success('Category updated successfully');
      navigate('/categories');
    } catch (error) {
      toast.error('Error updating category');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex mt={40} direction="column" gap="xl">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextInput
              flex={1}
              label="Name"
              placeholder="Name"
              error={errors.name?.message}
              {...field}
            />
          )}
        />
        <Flex gap="lg">
          <Controller
            name="slug"
            control={control}
            render={({ field }) => (
              <TextInput
                flex={1}
                label="Slug"
                placeholder="Slug"
                error={errors.slug?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <TextInput
                flex={1}
                height={50}
                label="Title"
                placeholder="Title"
                error={errors.title?.message}
                {...field}
              />
            )}
          />
        </Flex>
        <Flex gap="lg">
          <Controller
            name="metaTitle"
            control={control}
            render={({ field }) => (
              <TextInput
                flex={1}
                label="Meta Title"
                placeholder="Meta Title"
                error={errors.metaTitle?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="metaDesc"
            control={control}
            render={({ field }) => (
              <TextInput
                flex={1}
                label="Meta Description"
                placeholder="Meta Description"
                error={errors.metaDesc?.message}
                {...field}
              />
            )}
          />
        </Flex>
        <Flex mt={100} gap="lg">
          <div>
            <Text size="sm">Seo Text Right</Text>
            <Controller
              name="seoTextRight"
              control={control}
              render={({ field }) => (
                <CustomRichTextEditor
                  content={field.value || ''}
                  onUpdate={(content) => setValue('seoTextRight', content)}
                />
              )}
            />
          </div>
          <div>
            <Text size="sm">Seo Text Left</Text>
            <Controller
              name="seoTextLeft"
              control={control}
              render={({ field }) => (
                <CustomRichTextEditor
                  content={field.value || ''}
                  onUpdate={(content) => setValue('seoTextLeft', content)}
                />
              )}
            />
          </div>
        </Flex>
      </Flex>
      <Center mt={40}>
        <Button ButtonType="ghost" type="submit">
          Create Category
        </Button>
      </Center>
    </form>
  );
};
