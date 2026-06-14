const BASE_URL = 'https://www.kosmetikapetralipa.cz';

interface MetaOptions {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

function setMeta(name: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.name = name;
    document.head.appendChild(el);
  }
  el.content = content;
}

function setProperty(property: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.content = content;
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

export function useMeta(options: MetaOptions) {
  document.title = options.title;
  setMeta('description', options.description);
  setProperty('og:title', options.ogTitle ?? options.title);
  setProperty('og:description', options.ogDescription ?? options.description);

  const canonicalPath = options.canonical ?? window.location.pathname;
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;
  setCanonical(canonicalUrl);
  setProperty('og:url', canonicalUrl);
}
