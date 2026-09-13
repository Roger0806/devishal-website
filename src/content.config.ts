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

const navigationLink = z.object({
	title: z.string(),
	url: z.string().url(),
});

const navigation = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/navigation' }),
	schema: z.object({
		items: z.array(navigationLink.extend({ children: z.array(navigationLink) })),
		quickLinks: z.array(navigationLink),
		socialLinks: z.array(navigationLink),
	}),
});

export const collections = { exhibitions, news, gallery, paintings, navigation };
