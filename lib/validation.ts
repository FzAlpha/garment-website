import { z } from "zod";

/** Quote request payload — mirrors the backend spec (architecture_and_api.md §2.1). */
export const QuoteRequestSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  companyName: z.string().min(2, "Company / Institution name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Valid phone number is required"),
  country: z.string().default("India"),
  productCategory: z.enum([
    "security-uniforms",
    "premium-formal",
    "premium-tshirts",
    "custom-manufacturing",
  ]),
  productSku: z.string().optional(),
  estimatedQuantity: z
    .number()
    .int()
    .min(10, "Minimum order quantity is 10 units"),
  targetDate: z.string().optional(),
  fabricSpecifications: z.string().optional(),
  customizationNotes: z.string().optional(),
  attachmentUrls: z.array(z.string().url()).optional().default([]),
});

export type QuoteRequest = z.infer<typeof QuoteRequestSchema>;

/** Contact enquiry payload — mirrors the backend spec (architecture_and_api.md §2.2). */
export const ContactEnquirySchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Valid phone is required"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactEnquiry = z.infer<typeof ContactEnquirySchema>;

/** Flatten a ZodError into the `{ field, message }[]` shape used in error envelopes. */
export function formatZodErrors(error: z.ZodError): { field: string; message: string }[] {
  return error.issues.map((issue) => ({
    field: issue.path.join(".") || "(root)",
    message: issue.message,
  }));
}
