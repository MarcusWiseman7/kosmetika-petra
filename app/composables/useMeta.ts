const BASE_URL = 'https://www.kosmetikapetralipa.cz';

interface MetaOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export function useMeta(options: MetaOptions) {
  const canonicalUrl = `${BASE_URL}${options.canonical ?? useRoute().path}`;

  useSeoMeta({
    title: options.title,
    description: options.description,
    ogTitle: options.ogTitle ?? options.title,
    ogDescription: options.ogDescription ?? options.description,
    ogUrl: canonicalUrl,
  });

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
  });
}
