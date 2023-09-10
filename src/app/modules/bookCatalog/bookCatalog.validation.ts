import { z } from "zod";
const createBookCatalogZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "title is required",
    }),
    author: z.string({
      required_error: "Author is required",
    }),
    genre: z.string({
      required_error: "Genre is required",
    }),
    publicationYear: z.string({
      required_error: "publicationYear is required",
    }),
    finish: z.boolean().optional(),
    reviews: z.array(z.string()).optional(),
  }),
});

const updateBookCatalogZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    genre: z.string().optional(),
    publicationYear: z.string().optional(),
    finish: z.boolean().optional(),
    reviews: z.array(z.string()).optional(),
  }),
});

export const BookCatalogValidation = {
  createBookCatalogZodSchema,
  updateBookCatalogZodSchema,
};
