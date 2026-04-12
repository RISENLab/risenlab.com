import {
    defineCollection,
    reference,
    z,
    type CollectionEntry,
} from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
    loader: glob({ pattern: '*.{md,mdx}', base: 'src/publications' }),
    schema: ({ image }) => z.object({
        date: z.date(), // Publication date, YYYY-MM-DD
        title: z.string(),
        authors: z.string(), // List of all authors
        people: z.array(reference('people')).optional(), // References to people from our lab
        project: reference('projects').optional(), // References to publications from our lab
        image: image().optional(), // Relative path from the .md file, has to be in src/images

        paperURL: z.string().optional(), // URL to published paper
        preprintURL: z.string().optional(), // URL to preprint
        codeURL: z.string().optional(), // URL to code repository
        venue: z.string().optional(), // Publication venue
        award: z.string().optional(), // Award
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
const projects = defineCollection({
    loader: glob({ pattern: '*.{md,mdx}', base: 'src/projects' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        image: image().optional(), // Relative path from the .md file, has to be in src/images
        imageCredit: z.string().optional(),
        people: z.array(reference('people')).optional(), // References to people from our lab
    }),
});

const baseNewsPost = z.object({
    date: z.date(), // News date, YYYY-MM-DD
    title: z.string(),
});

export function newsPostHasPage(
    entry: CollectionEntry<'news'>,
): entry is CollectionEntry<'news'> & {
    data: {
        hasPage: true,
    }
} {
    return 'hasPage' in entry.data && entry.data.hasPage === true;
}

const dateFormatter = new Intl.DateTimeFormat('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

export const formatDate = (date: Date): string => dateFormatter.format(date);

export const formatNewsCategory = (category: string): string => (
    category.charAt(0).toUpperCase() + category.slice(1)
);

const news = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: 'src/news' }),
    schema: ({ image }) => z.discriminatedUnion('category', [
        baseNewsPost.extend({
            hasPage: z.literal(false).optional().default(false),
            category: z.enum(['team']),
            person: reference('people'),
        }),
        baseNewsPost.extend({
            hasPage: z.boolean().optional().default(false),
            slug: z.string().optional(), // URL slug for the news post page
            category: z.enum(['award', 'grant', 'event', 'talk', 'media', 'teaching', 'project', 'other']),
            people: z.array(reference('people')).optional(),
            project: reference('projects').optional(), // Related project
            publication: reference('publications').optional(), // Related paper, if any
            image: image().optional(), // Optional thumbnail
            imageCredit: z.string().optional(),
            externalURL: z.string().url().optional(), // Link to event, blog post, etc.
        }),
    ]),
});

export const collections = {
    publications, people, projects, news,
};
