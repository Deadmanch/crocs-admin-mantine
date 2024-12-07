import { z } from 'zod';

export const createColorFormSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  inStock: z.boolean(),
  images: z.array(z.instanceof(File)).nonempty({ message: 'At least one image is required' }),
});
