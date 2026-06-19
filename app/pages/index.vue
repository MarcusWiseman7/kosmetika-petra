<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

useMeta({
  title: 'Kosmetika Petra | Kosmetika, vizáž, laminace obočí a lash lifting Lípa u Havlíčkova Brodu',
  description:
    'Kosmetika Petra v Lípě u Havlíčkova Brodu – kosmetické ošetření, svatební a slavnostní líčení, lash lifting, laminace obočí a workshopy krásy.',
  canonical: '/',
});

const BOOKING_URL =
  'https://partner.notino.com/api/b2c/redirect/salons/detail?salonID=1cf319be-5dca-43d9-998b-ae5ee3d7e42b&utm_source=salon_mkt&utm_medium=qr&utm_campaign=booking_promo&utm_content=1cf319be-5dca-43d9-998b-ae5ee3d7e42b';

// ── Reviews slider ────────────────────────────────────────

const ORIGINAL_REVIEWS = [
  {
    text: '„Úžasná paní,skvělá práce, úžasný lidský přístup.jsem nad míru spokojena doporučuji na 1000%😁"',
    author: 'Klientka Anna',
  },
  { text: '„S paní jsem byla maximálně spokojená. ☺️ Krásné prostředí ☺️"', author: 'Klientka Jitka' },
  {
    text: '„Naprostá spokojenost ❤️ nejenže mi Péťa udělala parádní řasy. Ještě jsme si krásně popovídaly. Určitě to nebyla poslední návštěva 😊"',
    author: 'Klientka Elis',
  },
  { text: '„Skvělá, milá šikovná paní! Krásné místo. Doporučuji."', author: 'Nevěsta Nikola' },
  { text: '„Děkuji za péči a milou společnost ráda přijdu znova ✨"', author: 'Klientka Vendula' },
  {
    text: '„Velmi mile jsem byla překvapená nejen prostředím a dostupností i parkováním. Krásný a útulný salon velmi milý přístup a profesionalita paní Petry. Vše mi vysvětlila. 🌿"',
    author: 'Klientka Helena',
  },
  {
    text: '„Paní strašně milá, příjemná a profesionální. Výsledek řas je boží, přesně podle představ. Všechno na jedničku, určitě doporučuju a rád se vrátím. ❤️"',
    author: 'Klient Dušan',
  },
];

const allReviews = [...ORIGINAL_REVIEWS, ...ORIGINAL_REVIEWS.slice(0, 3)];

const trackEl = ref<HTMLElement>();
const reviewIndex = ref(0);
const reviewAnimate = ref(true);
let reviewTimer: ReturnType<typeof setInterval> | undefined;

const trackStyle = computed(() => {
  const step = cardStep();
  return {
    transform: `translateX(-${reviewIndex.value * step}px)`,
    transition: reviewAnimate.value ? 'transform 0.5s ease' : 'none',
  };
});

function cardStep(): number {
  if (!trackEl.value) return 0;
  const card = trackEl.value.querySelector<HTMLElement>('.review-card');
  return card ? card.offsetWidth + 30 : 0;
}

function nextReview() {
  reviewAnimate.value = true;
  reviewIndex.value++;
  if (reviewIndex.value >= allReviews.length - 2) {
    setTimeout(() => {
      reviewAnimate.value = false;
      reviewIndex.value = 0;
    }, 500);
  }
}

function prevReview() {
  if (reviewIndex.value <= 0) {
    reviewAnimate.value = false;
    reviewIndex.value = ORIGINAL_REVIEWS.length - 1;
    setTimeout(() => {
      reviewAnimate.value = true;
      reviewIndex.value = ORIGINAL_REVIEWS.length - 2;
    }, 20);
    return;
  }
  reviewAnimate.value = true;
  reviewIndex.value--;
}

function startReviewTimer() {
  if (reviewTimer) clearInterval(reviewTimer);
  reviewTimer = setInterval(nextReview, 4000);
}

// ── Gallery items ─────────────────────────────────────────

const galleryItems = [
  {
    src: '/images/kosmeticke-osetreni.webp',
    alt: 'Kosmetické ošetření pleti Kosmetika Petra Lípa u Havlíčkova Brodu',
    label: 'Kosmetické ošetření',
  },
  {
    src: '/images/lash-lifting.webp',
    alt: 'Laminace obočí a lash lifting Kosmetika Petra',
    label: 'Laminace obočí & Lash lifting',
  },
  { src: '/images/oko1.webp', alt: 'Lash lifting řas Kosmetika Petra', label: 'Lash lifting', imgClass: 'top-photo' },
  {
    src: '/images/laminace-oboci.webp',
    alt: 'Laminace obočí Kosmetika Petra',
    label: 'Laminace obočí',
  },
  {
    src: '/images/vizaz1.webp',
    alt: 'Foto make-up a účes Kosmetika Petra Havlíčkův Brod',
    label: 'Vizáž na focení',
    imgClass: 'top-photo',
  },
  { src: '/images/vizaz2.webp', alt: 'Svatební vizáž a líčení Kosmetika Petra', label: 'Svatební vizáž' },
  {
    src: '/images/hair.webp',
    alt: 'Společenský účes Kosmetika Petra',
    label: 'Účes',
    imgClass: 'hair-photo',
  },
  {
    src: '/images/workshop.webp',
    alt: 'Workshop péče o pleť Kosmetika Petra',
    label: 'Workshop péče o pleť',
  },
];

onMounted(async () => {
  await nextTick();
  startReviewTimer();
});

onUnmounted(() => {
  if (reviewTimer) clearInterval(reviewTimer);
});
</script>

<template>
  <main>
    <!-- HERO -->
    <header class="hero" aria-label="Uvítací sekce">
      <div class="hero-text">
        <h1>Krása, péče a chvíle jen pro Vás 🌿</h1>
        <NuxtLink class="hero-btn" to="/kontakt">NAPSAT ZPRÁVU</NuxtLink>
      </div>
      <div class="hero-image">
        <img
          src="@/assets/images/petra1.webp"
          alt="Petra – Kosmetika Petra Lípa u Havlíčkova Brodu"
          loading="eager"
        />
      </div>
    </header>

    <!-- O MNĚ -->
    <section id="o-mne" aria-labelledby="about-heading">
      <div class="section-title">
        <h2 id="about-heading">Jsem Petra</h2>
        <p>maminka, vizážistka a kosmetička,<br />která miluje přirozenou krásu 🌿</p>
      </div>

      <div v-appear class="about">
        <img src="@/assets/images/petra.webp" alt="Petra – Kosmetika Petra" loading="lazy" />
        <div class="about-text">
          <p>
            ✨ Jsem Petra — maminka dvou malých ďáblíků 👧🏼👦🏻, manželka úžasného chlapa 👱🏻‍♂️ a žena, která si před pár lety
            splnila jeden malý sen 🌸
          </p>
          <p>
            Za tu dobu se toho hodně změnilo. Poznala jsem spoustu úžasných žen, vyslechla nespočet příběhů a uvědomila
            si, že moje práce není jen o kosmetice a líčení 💆‍♀️💄
          </p>
          <p>
            Je o tom, aby se každá z vás cítila krásná, sebevědomá a alespoň na chvíli si odpočinula od běžného života.
          </p>
          <p>
            Dnes už nejsem jen kosmetička, ale i vizážistka, která může být součástí vašich nejkrásnějších a
            nejdůležitějších momentů 👰✨
          </p>
          <p>A i když se každý den snažím být tou nejlepší mámou a manželkou, pořád jsem tu i pro vás 🤍</p>
          <p>Děkuju každé z vás, že můžu být součástí vašich životů 🥂</p>
        </div>
      </div>
    </section>

    <!-- SLUŽBY -->
    <section id="sluzby" aria-labelledby="services-heading">
      <div class="section-title">
        <h2 id="services-heading">Služby</h2>
        <p>Vyberte si oblast, která vás zajímá 🌿</p>
      </div>

      <div v-appear class="services">
        <article class="service-card">
          <h3>Kosmetika</h3>
          <p>Kosmetická ošetření, lash lifting, laminace obočí a péče, díky které se budete cítit krásně.</p>
          <NuxtLink class="service-btn-home" to="/sluzby#kosmetika">Zobrazit služby</NuxtLink>
        </article>

        <article class="service-card">
          <h3>Vizáž & Make-up</h3>
          <p>Svatební, plesové i slavnostní líčení pro vaše nejdůležitější okamžiky.</p>
          <NuxtLink class="service-btn-home" to="/sluzby#vizaz">Zobrazit služby</NuxtLink>
        </article>

        <article class="service-card">
          <h3>Workshopy</h3>
          <p>Skupinové i individuální beauty workshopy plné tipů, líčení a péče o pleť v příjemné atmosféře 🌿</p>
          <NuxtLink class="service-btn-home" to="/sluzby#workshop">Zjistit více</NuxtLink>
        </article>
      </div>
    </section>

    <!-- GALERIE -->
    <section id="galerie" aria-labelledby="gallery-heading">
      <div class="section-title">
        <h2 id="gallery-heading">Galerie</h2>
        <p>Ukázka mé práce ✨</p>

        <div v-appear class="gallery">
          <div v-for="item in galleryItems" :key="item.src" class="gallery-item">
            <img :src="item.src" :alt="item.alt" :class="item.imgClass" loading="lazy" />
            <div class="gallery-overlay">{{ item.label }}</div>
          </div>
        </div>

        <div class="gallery-button">
          <a href="https://www.instagram.com/kosmetika_petra_lipa_/" target="_blank" rel="noopener noreferrer">
            Více ukázek
          </a>
        </div>
      </div>
    </section>

    <!-- REFERENCE -->
    <section id="reference" aria-labelledby="reviews-heading">
      <div class="section-title">
        <h2 id="reviews-heading">Reference</h2>
        <p>Vaše spokojenost je pro mě nejvíc 🤍</p>
      </div>

      <div v-appear class="reviews-slider">
        <button class="review-arrow prev" aria-label="Předchozí recenze" @click="prevReview">&#10094;</button>

        <div ref="trackEl" class="reviews-track" :style="trackStyle">
          <article v-for="(review, i) in allReviews" :key="i" class="review-card">
            <div class="review-stars" aria-label="5 hvězd">★★★★★</div>
            <p>{{ review.text }}</p>
            <h4>— {{ review.author }}</h4>
          </article>
        </div>

        <button class="review-arrow next" aria-label="Další recenze" @click="nextReview">&#10095;</button>
      </div>
    </section>

    <!-- REZERVACE -->
    <section aria-labelledby="booking-heading">
      <div v-appear class="booking-cta">
        <h2 id="booking-heading">Rezervace</h2>
        <p>Objednejte se jednoduše online přes rezervační systém 🤍</p>
        <a :href="BOOKING_URL" target="_blank" rel="noopener noreferrer">REZERVOVAT TERMÍN</a>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* ─── HERO ────────────────────────────────────────────── */

.hero {
  min-height: 24vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 40px 10% 0;
  background: linear-gradient(135deg, #f8f5ef 0%, #eef4ee 100%);
}

.hero-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;
}

.hero-text h1 {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(32px, 4vw, 50px);
  font-weight: 400;
  line-height: 1.3;
  color: #5f7764;
  margin-bottom: 25px;
  white-space: nowrap;
}

.hero-btn {
  display: inline-block;
  padding: 16px 34px;
  background: #8a9470;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  letter-spacing: 2px;
  font-size: 13px;
  transition: 0.3s;
  position: relative;
  left: 15px;
}

.hero-btn:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

.hero-image {
  display: flex;
  justify-content: center;
  position: relative;
  left: 40px;
}

.hero-image img {
  width: 100%;
  max-width: 340px;
  aspect-ratio: 3018 / 4527;
  border-radius: 30px;
  object-fit: cover;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  position: relative;
  top: 80px;
}

/* ─── MAIN LAYOUT ─────────────────────────────────────── */

main {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

/* ─── SECTION COMMON ──────────────────────────────────── */

section {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding: 0 10%;
}

.section-title {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
}

.section-title h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 58px;
  font-weight: 400;
  color: #6f8b74;
  margin-bottom: 10px;
}

.section-title p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: #5f7764;
  line-height: 1.5;
}

/* ─── ABOUT ───────────────────────────────────────────── */

#o-mne {
  scroll-margin-top: 140px;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
  margin-top: 0;
}

.about img {
  width: 50%;
  aspect-ratio: 3671 / 5507;
  display: block;
  margin: auto;
  border-radius: 30px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
}

.about-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 19px;
  color: #4f5b52;
  margin-left: -80px;
  text-align: left;
  max-width: 650px;
}

.about-text p {
  margin-bottom: 20px;
}

/* ─── SERVICES ────────────────────────────────────────── */

.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 35px;
}

.service-card {
  background: white;
  padding: 50px 40px;
  border-radius: 28px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.06);
  transition: 0.35s;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.service-card:hover {
  transform: translateY(-8px);
}

.service-card h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 42px;
  font-weight: 600;
  color: #6f8b74;
  margin-bottom: 18px;
}

.service-card p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  line-height: 1.6;
  color: #6f756f;
  margin-bottom: 30px;
}

.service-btn-home {
  display: inline-block;
  padding: 14px 28px;
  border-radius: 50px;
  background: #8a9470;
  color: white;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 2px;
  transition: 0.3s;
}

.service-btn-home:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

/* ─── GALLERY ─────────────────────────────────────────── */

#galerie .section-title {
  gap: 32px;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 25px;
}

.gallery-item img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  transition: 0.4s;
  display: block;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.55), transparent);
  color: white;
  font-size: 18px;
  font-family: 'Cormorant Garamond', serif;
  opacity: 0;
  transition: 0.4s;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-button {
  display: flex;
  justify-content: center;
}

.gallery-button a {
  display: inline-block;
  padding: 16px 34px;
  background: #8a9470;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;
  transition: 0.3s;
}

.gallery-button a:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

.top-photo {
  object-position: center top;
}

.hair-photo {
  object-position: center 15%;
}

/* ─── REVIEWS ─────────────────────────────────────────── */

#reference {
  scroll-margin-top: 10px;
}

.reviews-slider {
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 0 70px;
}

.reviews-track {
  display: flex;
  gap: 30px;
}

.review-card {
  width: calc((100% - 30px) / 2);
  background: white;
  padding: 40px 35px;
  border-radius: 30px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
  text-align: center;
  flex-shrink: 0;
  transition: 0.3s;
}

.review-card:hover {
  transform: translateY(-6px);
}

.review-stars {
  font-size: 24px;
  color: #c7a85a;
  margin-bottom: 20px;
  letter-spacing: 4px;
}

.review-card p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 26px;
  line-height: 1.7;
  color: #4f5b52;
  font-style: italic;
  margin-bottom: 25px;
}

.review-card h4 {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #8a9470;
}

.review-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 52px;
  height: 52px;
  border: none;
  border-radius: 50%;
  background: white;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  font-size: 24px;
  cursor: pointer;
  z-index: 5;
  transition: 0.3s;
}

.review-arrow:hover {
  background: #f0ede8;
}

.review-arrow.prev {
  left: 0;
}

.review-arrow.next {
  right: 0;
}

/* ─── BOOKING CTA ─────────────────────────────────────── */

.booking-cta {
  background: #f6f1e8;
  border-radius: 35px;
  padding: 80px 40px;
  text-align: center;
}

.booking-cta h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 62px;
  font-weight: 400;
  color: #6f8b74;
  margin-bottom: 20px;
}

.booking-cta p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  line-height: 1.5;
  color: #5f7764;
  margin-bottom: 35px;
}

.booking-cta a {
  display: inline-block;
  padding: 16px 34px;
  background: #8a9470;
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;
  transition: 0.3s;
}

.booking-cta a:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

/* ─── RESPONSIVE ──────────────────────────────────────── */

@media (max-width: 1024px) {
  section {
    padding: 0 20px;
  }

  .about img {
    width: 60%;
  }
}

@media (max-width: 768px) {
  main {
    gap: 60px;
  }

  section {
    gap: 32px;
    padding: 0 8px;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 140px 8% 80px;
    text-align: center;
  }

  .hero {
    gap: 20px;
  }

  .hero-btn {
    left: 0;
  }

  .hero-image {
    left: 0;
  }

  .hero-image img {
    top: 0;
  }

  .about {
    grid-template-columns: 1fr;
  }

  .about-text {
    margin-left: 0;
    padding: 0 20px;
    max-width: 100%;
  }

  .about img {
    width: 80%;
  }

  .services {
    grid-template-columns: 1fr;
  }

  .gallery {
    grid-template-columns: 1fr 1fr;
  }

  .reviews-slider {
    padding: 0 42px;
  }

  .review-arrow {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .reviews-track {
    gap: 30px;
  }

  .review-card {
    width: 100%;
    padding: 30px 20px;
  }

  .review-card p {
    font-size: 20px;
  }
}
</style>
