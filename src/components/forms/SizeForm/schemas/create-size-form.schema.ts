import { z } from 'zod';

export const createSizeFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  inStock: z.boolean(),
});
