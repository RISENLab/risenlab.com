import {
    defineCollection,
    reference,
    z,
} from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
    loader: glob({ pattern: '*.{md,mdx}', base: 'src/publications' }),
    schema: z.object({
        date: z.date(), // Publication date, YYYY-MM-DD
        title: z.string(),
        authors: z.string(), // List of all authors
        people: z.array(reference('people')).optional(), // References to people from our lab

        publicationURL: z.string().optional(), // URL to published paper
        preprintURL: z.string().optional(), // URL to preprint
        codeURL: z.string().optional(), // URL to code repository
        venue: z.string().optional(), // Publication venue
    }),
});
const people = defineCollection({
    loader: glob({ pattern: '*.{md,mdx}', base: 'src/people' }),
    schema: ({ image }) => z.object({
        name: z.string(),
        role: z.string(),
        type: z.enum(['member', 'former', 'external']).optional().default('member'),
        // Lower numbers appear first, default is alphabetical order.
        priority: z.number().optional(),
        photo: image().optional(), // Relative path from the .md file, has to be in src/images
        hasPage: z.boolean().optional().default(false),

        email: z.string().optional(),
        personalURL: z.string().optional(), // URL to personal website
        linkedInURL: z.string().optional(), // URL to LinkedIn profile
        scholarURL: z.string().optional(), // URL to Google Scholar profile
        githubURL: z.string().optional(), // URL to GitHub profile
    }),
});

export const collections = {
    publications, people,
};
