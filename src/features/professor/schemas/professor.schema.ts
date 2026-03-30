import z from 'zod';

const professorSchema = z.object({
    id: z.string(),
    email: z.email(),
    lastname: z.string(),
    firstname: z.string(),
});

export type ProfessorType = z.infer<typeof professorSchema>;