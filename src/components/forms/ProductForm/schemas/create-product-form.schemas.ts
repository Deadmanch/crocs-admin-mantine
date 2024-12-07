import { z } from 'zod';

export const createProductFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  slug: z.string().min(1, { message: 'Slug is required' }),
  images: z.array(z.instanceof(File)).nonempty({ message: 'At least one image is required' }),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
  seoText: z.string().optional(),
  originalPrice: z.number().min(0, { message: 'Original Price is required' }),
  discountedPrice: z.number().optional(),
  tags: z.array(z.string()).optional(),
  categoryId: z.number().min(1, { message: 'Category is required' }),
  sizeIds: z.array(z.number()).nonempty({ message: 'At least one size is required' }),
  colorIds: z.array(z.number()).nonempty({ message: 'At least one color is required' }),
});
