import { z } from "zod";

export const PaginatedEntertainmentsQueryParamsSchema = z.object({
    page: z.coerce.number().min(1).superRefine((val, ctx) => {
        if (Number.isNaN(val)) {
            ctx.addIssue({
                code: "custom",
                message: `page=${val} is not a valid number`,
            });
        }
    }),
    limit: z.coerce.number().min(1).superRefine((val, ctx) => {
        if (Number.isNaN(val)) {
            ctx.addIssue({
                code: "custom",
                message: `limit=${val} is not a valid number`,
            });
        }
    }),
});

export type PaginatedEntertainmentsQueryParamsSchemaType = z.infer<typeof PaginatedEntertainmentsQueryParamsSchema>;

const requiredString = (field: string) =>
    z.string()
        .trim()
        .min(1, { message: `${field} is required and cannot be empty.` });

const positiveNumber = (field: string) =>
    z.coerce
        .number()
        .refine((val) => !isNaN(val), { message: `${field} must be a valid number.` })
        .positive({ message: `${field} must be a positive value.` })


export const DigitalEntertainmentContentTypeSchema = z.enum(["movie", "tv_show"]);

export const CreateEntertainmentSchema = z.object({
    title: requiredString("Title"),
    type: DigitalEntertainmentContentTypeSchema,
    director: requiredString("Director name"),
    budget: positiveNumber("Budget"),
    location: requiredString("Location"),
    duration: z
        .string()
        .regex(/^\d{2}:\d{2}:\d{2}$/, {
            message: "Duration must be in HH:MM:SS format (e.g., 01:45:30).",
        }),
    year: z.coerce
        .number()
        .int({ message: "Year must be a whole number." })
        .min(1900, { message: "Year seems too far in the past." })
        .max(new Date().getFullYear(), {
            message: "Year cannot be greater than current.",
        }),
});

export type CreateEntertainmentSchemaType = z.infer<typeof CreateEntertainmentSchema>;

export const UpdateEntertainmentSchema = CreateEntertainmentSchema.extend({});

export type UpdateEntertainmentSchemaType = z.infer<typeof UpdateEntertainmentSchema>;

export const PatchEntertainmentSchema = CreateEntertainmentSchema.partial().extend({});

export type PatchEntertainmentSchemeType = z.infer<typeof PatchEntertainmentSchema>;

export const ParamIDNumberSchema = z.coerce.number().superRefine((val, ctx) => {
    if (Number.isNaN(val)) {
        ctx.addIssue({
            code: "custom",
            message: `${val} is not a valid number param value`,
        });
    }
});
