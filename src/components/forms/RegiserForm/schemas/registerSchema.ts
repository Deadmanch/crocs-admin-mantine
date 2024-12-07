import { z } from 'zod';

export const registerSchema = z.object({
  email: z.string().email('Invalid email'),
  fullName: z.string().min(3, 'Name must be at least 3 characters'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
