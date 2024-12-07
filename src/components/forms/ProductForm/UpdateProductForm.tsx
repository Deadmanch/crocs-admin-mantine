import { useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Center,
  Flex,
  MultiSelect,
  NumberInput,
  Select,
  TagsInput,
  TextInput,
} from '@mantine/core';
import { IProductUpdateRequest } from '@/api/interfaces/product.interface';
import { updateProduct } from '@/api/product';
import { Button, CustomRichTextEditor, ImageDropzone } from '@/components';
import { useCategoryStore } from '@/store/categoryStore';
import { useColorStore } from '@/store/colorStore';
import { useSizeStore } from '@/store/sizeStore';
import { updateProductFormSchema } from './schemas/update-product-form.schema';

export const UpdateProductForm = () => {
  const { id } = useParams<{ id: string }>();
  const { categories, fetchCategories } = useCategoryStore();
  const { colors, fetchColors } = useColorStore();
  const { sizes, fetchSizes } = useSizeStore();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IProductUpdateRequest>({
    resolver: zodResolver(updateProductFormSchema),
    defaultValues: {
      tags: [],
      sizeIds: [],
      colorIds: [],
      images: [],
    },
  });
  useEffect(() => {
    fetchCategories(1, 30);
    fetchColors(1, 30);
    fetchSizes(1, 30);
  }, [fetchCategories, fetchColors, fetchSizes]);

  const onSubmit = async (data: IProductUpdateRequest) => {
    try {
      await updateProduct(Number(id), data);
      toast.success('Product updated successfully');
      navigate('/products');
    } catch (error) {
      toast.error('Error updating product');
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center mt={40}>
        <Flex direction="column" gap="lg">
          <Flex gap="lg">
            <Controller
              name="title"
              control={control}
              render={({ field }) => (
                <TextInput
                  w={300}
                  label="Title"
                  placeholder="Product Name"
                  error={errors.title?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="slug"
              control={control}
              render={({ field }) => (
                <TextInput
                  w={300}
                  label="Slug"
                  placeholder="Product Slug"
                  error={errors.slug?.message}
                  {...field}
                />
              )}
            />
          </Flex>
          <Flex gap="lg">
            <Controller
              name="originalPrice"
              control={control}
              render={({ field }) => (
                <NumberInput
                  prefix="$"
                  allowNegative={false}
                  decimalScale={2}
                  hideControls
                  w={300}
                  label="Original Price"
                  placeholder="Original Price"
                  error={errors.originalPrice?.message}
                  {...field}
                />
              )}
            />
            <Controller
              name="discountedPrice"
              control={control}
              render={({ field }) => (
                <NumberInput
                  prefix="$"
                  allowNegative={false}
                  decimalScale={2}
                  hideControls
                  w={300}
                  label="Discounted Price"
                  placeholder="Discounted Price"
                  error={errors.discountedPrice?.message}
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
                  label="Meta Description"
                  placeholder="Meta Description"
                  error={errors.metaDesc?.message}
                  {...field}
                />
              )}
            />
          </Flex>
          <Flex gap="lg">
            <Controller
              name="categoryId"
              control={control}
              render={({ field }) => (
                <Select
                  w={300}
                  label="Category"
                  placeholder="Select Category"
                  comboboxProps={{
                    position: 'bottom',
                    middlewares: { flip: false, shift: false },
                    offset: 0,
                    transitionProps: { transition: 'pop', duration: 200, timingFunction: 'ease' },
                  }}
                  data={categories.map((category) => ({
                    value: String(category.id),
                    label: category.name,
                  }))}
                  error={errors.categoryId?.message}
                  {...field}
                  value={String(field.value)} // Преобразование value в string
                  onChange={(value) => field.onChange(Number(value))} // Преобразование обратно в number
                />
              )}
            />

            <Controller
              name="sizeIds"
              control={control}
              render={({ field }) => (
                <MultiSelect
                  w={300}
                  label="Sizes"
                  comboboxProps={{
                    position: 'bottom',
                    middlewares: { flip: false, shift: false },
                    offset: 0,
                    transitionProps: { transition: 'pop', duration: 200, timingFunction: 'ease' },
                  }}
                  placeholder="Select Sizes"
                  data={sizes.map((s) => ({
                    value: String(s.id),
                    label: s.name,
                  }))}
                  error={errors.sizeIds?.message}
                  {...field}
                  value={field.value && field.value.map((v) => String(v))} // Преобразование массива numbers в массив strings
                  onChange={(values) => field.onChange(values.map((value) => Number(value)))} // Преобразование обратно в numbers
                />
              )}
            />
          </Flex>
          <Flex gap="lg">
            <Controller
              name="colorIds"
              control={control}
              render={({ field }) => (
                <MultiSelect
                  w={300}
                  label="Colors"
                  comboboxProps={{
                    position: 'bottom',
                    middlewares: { flip: false, shift: false },
                    offset: 0,
                    transitionProps: { transition: 'pop', duration: 200, timingFunction: 'ease' },
                  }}
                  placeholder="Select Colors"
                  data={colors.map((color) => ({
                    value: String(color.id),
                    label: color.name,
                  }))}
                  error={errors.colorIds?.message}
                  {...field}
                  value={field.value && field.value.map((v) => String(v))} // Преобразование массива numbers в массив strings
                  onChange={(values) => field.onChange(values.map((value) => Number(value)))} // Преобразование обратно в numbers
                />
              )}
            />
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <TagsInput
                  comboboxProps={{
                    position: 'bottom',
                    middlewares: { flip: false, shift: false },
                    offset: 0,
                    transitionProps: { transition: 'pop', duration: 200, timingFunction: 'ease' },
                  }}
                  data={['New', 'Sale', 'Limited Edition']}
                  w={300}
                  label="Tags"
                  placeholder="Tags"
                  {...field}
                />
              )}
            />
          </Flex>
          <Controller
            name="images"
            control={control}
            render={({ field }) => (
              <ImageDropzone onFilesChange={(files) => setValue('images', files)} {...field} />
            )}
          />
          <Controller
            name="seoText"
            control={control}
            render={({ field }) => (
              <CustomRichTextEditor
                content={field.value || ''}
                onUpdate={(content) => setValue('seoText', content)}
              />
            )}
          />
        </Flex>
      </Center>

      <Center mt={40}>
        <Button ButtonType="ghost" type="submit">
          Update Product
        </Button>
      </Center>
    </form>
  );
};
