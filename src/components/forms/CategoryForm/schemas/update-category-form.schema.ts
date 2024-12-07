import { z } from 'zod';

export const updateCategoryFormSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  slug: z.string().optional(),
  metaTitle: z.string().optional(),
  metaDesc: z.string().optional(),
  seoTextRight: z.string().optional(),
  seoTextLeft: z.string().optional(),
});
