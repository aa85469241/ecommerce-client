import * as z from 'zod';

export const AccountSchema = z.object({
    name: z.string().min(1, {
        message: 'A least 1 character required!'
    }).max(12)
})
