import { z } from 'zod';

export const updateProductFormSchema = z.object({
  title: z.string().optional(),
  slug: z.string().optional(),
  images: z.array(z.instanceof(File)).optional(),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
  seoText: z.string().optional(),
  originalPrice: z.number().optional(),
  discountedPrice: z.number().optional().optional(),
  tags: z.array(z.string()).optional().optional(),
  categoryId: z.number().optional(),
  sizeIds: z.array(z.number()).optional(),
  colorIds: z.array(z.number()).optional(),
});
