import { z } from 'zod';

export const categoryFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  title: z.string().min(1, { message: 'Title is required' }),
  slug: z.string().min(1, { message: 'Slug is required' }),
  metaTitle: z.string().min(1, { message: 'Meta title is required' }),
  metaDesc: z.string().min(1, { message: 'Meta description is required' }),
  seoTextRight: z.string().optional(),
  seoTextLeft: z.string().optional(),
});
