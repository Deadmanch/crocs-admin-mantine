import { z } from 'zod';

export const updateSizeFormSchema = z.object({
  title: z.string().optional(),
  inStock: z.boolean().optional(),
});
