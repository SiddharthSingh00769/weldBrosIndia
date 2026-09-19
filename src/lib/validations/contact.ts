import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(150, "Email address is too long."),

  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid contact number.")
    .max(20, "Contact number is too long.")
    .regex(
      /^[+]?[\d\s().-]+$/,
      "Please enter a valid contact number.",
    ),

  subject: z
    .string()
    .trim()
    .min(3, "Please enter a subject.")
    .max(150, "Subject is too long."),

  message: z
    .string()
    .trim()
    .min(10, "Please enter at least 10 characters.")
    .max(3000, "Message is too long."),
});

export type ContactFormData = z.infer<typeof contactSchema>;