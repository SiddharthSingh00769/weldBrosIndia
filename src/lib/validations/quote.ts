import { z } from "zod";

export const quoteSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  company: z
    .string()
    .min(2, "Please enter your company name.")
    .max(150, "Company name is too long."),

  email: z
    .string()
    .email("Please enter a valid email address."),

  phone: z
    .string()
    .min(7, "Please enter a valid phone number.")
    .max(20, "Phone number is too long."),

  product: z
    .string()
    .min(1, "Please select a product or requirement."),

  quantity: z
    .string()
    .max(50, "Quantity is too long.")
    .optional(),

  capacity: z
    .string()
    .max(100, "Capacity is too long.")
    .optional(),

  application: z
    .string()
    .max(200, "Application details are too long.")
    .optional(),

  deliveryLocation: z
    .string()
    .max(150, "Delivery location is too long.")
    .optional(),

  dimensions: z
    .string()
    .max(1000, "Dimensions are too long.")
    .optional(),

  requirements: z
    .string()
    .max(2000, "Additional requirements are too long.")
    .optional(),

  message: z
    .string()
    .max(3000, "Message is too long.")
    .optional(),
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;