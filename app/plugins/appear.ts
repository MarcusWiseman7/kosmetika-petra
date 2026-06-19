export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('appear', {
    mounted(el: HTMLElement) {
      el.classList.add('fade-in');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              el.classList.add('show');
              observer.unobserve(el);
            }
          });
        },
        { threshold: 0.15 },
      );
      observer.observe(el);
      (el as any)._appearObserver = observer;
    },
    unmounted(el: HTMLElement) {
      (el as any)._appearObserver?.disconnect();
    },
  });
});
