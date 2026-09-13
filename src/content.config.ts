import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const exhibitions = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/exhibitions' }),
	schema: z.object({
		room: z.string(),
		title: z.string(),
		description: z.string(),
		dates: z.string(),
		link: z.string().url(),
	}),
});

const news = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
	schema: z.object({
		date: z.string(),
		title: z.string(),
		description: z.string(),
	}),
});

const gallery = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/gallery' }),
	schema: z.object({
		image: z.string(),
		alt: z.string(),
		caption: z.string(),
	}),
});

const paintings = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/paintings' }),
	schema: z.object({
		image: z.string(),
		alt: z.string(),
		caption: z.string(),
		className: z.string(),
	}),
});

export const collections = { exhibitions, news, gallery, paintings };
