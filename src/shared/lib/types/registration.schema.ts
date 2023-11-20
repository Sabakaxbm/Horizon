import { z } from 'zod'

export const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Enter a valid email address',
  }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

export const validationResetSchema = z.object({
  email: z.string().min(1, { message: 'Email is required' }).email({
    message: 'Enter a valid email address.',
  }),
})

export const validationPassword = z
  .object({
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(15, { message: 'Password must contain no more than 15 characters' }),
    passwordConfirm: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' })
      .max(15, { message: 'Password must contain no more than 15 characters' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })

export const validationProfileUpdate = z.object({
  fullName: z
    .string()
    .max(100, { message: 'Full name cannot be longer than 100 characters' })
    .regex(/^(?![\d+.@_-]+$)[\w+.@-]*$/, {
      message: 'Full name cannot contain special characters',
    })
    .optional(),
  userName: z
    .string()
    .max(100, { message: 'Full name cannot be longer than 100 characters' })
    .regex(/^(?![\d+.@_-]+$)[\w+.@-]*$/, {
      message: 'Username cannot contain special characters',
    })
    .optional(),
})

export type FormSchemaType = z.infer<typeof validationSchema>
export type FormSchemaResetType = z.infer<typeof validationResetSchema>
export type FormSchemaProfileUpdateType = z.infer<typeof validationProfileUpdate>
export type FormSchemaValidationPasswordType = z.infer<typeof validationPassword>
