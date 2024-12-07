// components/CategoryForm.js
import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Center, Flex, Text, TextInput } from '@mantine/core';
import { createCategory } from '@/api/category';
import { ICategoryCreateRequest } from '@/api/interfaces/category.interface';
import { Button, CustomRichTextEditor } from '@/components';
import { categoryFormSchema } from './schemas/create-category-form.schema';

export const CreateCategoryForm = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ICategoryCreateRequest>({
    resolver: zodResolver(categoryFormSchema),
  });

  const onSubmit = async (data: ICategoryCreateRequest) => {
    try {
      await createCategory(data);
      toast.success('Category created successfully');
      navigate('/categories');
    } catch (error) {
      toast.error('Error creating category');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center mt={40}>
        <Flex direction="column" gap="lg">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextInput
                w={620}
                required
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
                  w={300}
                  required
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
                  w={300}
                  required
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
                  w={300}
                  required
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
                  w={300}
                  required
                  label="Meta Description"
                  placeholder="Meta Description"
                  error={errors.metaDesc?.message}
                  {...field}
                />
              )}
            />
          </Flex>

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
      </Center>
      <Center mt={40}>
        <Button ButtonType="ghost" type="submit">
          Create Category
        </Button>
      </Center>
    </form>
  );
};
