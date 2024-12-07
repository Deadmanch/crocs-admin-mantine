import { z } from 'zod';

export const updateColorFormSchema = z.object({
  title: z.string().optional(),
  inStock: z.boolean().optional(),
  images: z.array(z.instanceof(File)).optional(),
});
