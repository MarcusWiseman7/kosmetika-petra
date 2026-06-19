<script setup lang="ts">
import { ref } from 'vue';

useMeta({
  title: 'Služby | Kosmetika Petra',
  description:
    'Kosmetická ošetření, lash lifting, laminace obočí, svatební a slavnostní líčení, beauty workshopy – Kosmetika Petra Lípa u Havlíčkova Brodu.',
  canonical: '/sluzby',
});

// ── Image data ────────────────────────────────────────────

const kosmetikaImages = [
  { src: '/images/kosmetika1.webp', alt: 'Kosmetické ošetření pleti' },
  { src: '/images/kosmetika2.webp', alt: 'Hloubkové čištění pleti' },
  { src: '/images/kosmetika3.webp', alt: 'Relaxační masáž obličeje' },
  { src: '/images/kosmetika4.webp', alt: 'Péče o pleť s kosmetikou Alissa Beauté' },
  { src: '/images/kosmetika5.webp', alt: 'Lash lifting řas' },
  { src: '/images/kosmetika6.webp', alt: 'Laminace obočí' },
];

const vizazImages = [
  { src: '/images/vizaz1.webp', alt: 'Svatební líčení' },
  { src: '/images/vizaz2.webp', alt: 'Plesové líčení' },
  { src: '/images/vizaz3.webp', alt: 'Foto make-up' },
  { src: '/images/vizaz4.webp', alt: 'Denní líčení' },
  { src: '/images/vizaz5.webp', alt: 'Večerní líčení' },
  { src: '/images/vizaz6.webp', alt: 'Vizáž na focení' },
  { src: '/images/vizaz7.webp', alt: 'Slavnostní líčení' },
  { src: '/images/vizaz8.webp', alt: 'Společenský účes' },
  { src: '/images/vizaz9.webp', alt: 'Zkouška líčení' },
  { src: '/images/vizaz10.webp', alt: 'Vizáž a účes' },
];

const workshopImages = [
  { src: '/images/workshop1.webp', alt: 'Beauty workshop – péče o pleť' },
  { src: '/images/workshop2.webp', alt: 'Skupinový workshop líčení' },
  { src: '/images/workshop3.webp', alt: 'Individuální konzultace' },
  { src: '/images/workshop4.webp', alt: 'Workshop denního make-upu' },
];

// ── Price gallery modal ───────────────────────────────────

const priceImages = ['/images/cenik1.webp', '/images/cenik2.webp'];
const priceModalOpen = ref(false);
const priceIndex = ref(0);

function openPriceGallery() {
  priceIndex.value = 0;
  priceModalOpen.value = true;
}

function closePriceGallery() {
  priceModalOpen.value = false;
}

function changePriceImage(dir: number) {
  priceIndex.value = (priceIndex.value + dir + priceImages.length) % priceImages.length;
}

// ── FAQ state ─────────────────────────────────────────────

type FaqKey = 'kosmetika' | 'vizaz' | 'workshop';

const faqOpen = ref<Record<FaqKey, boolean>>({
  kosmetika: false,
  vizaz: false,
  workshop: false,
});

const activeItems = ref<Record<string, boolean>>({});

function toggleFaq(section: FaqKey) {
  faqOpen.value[section] = !faqOpen.value[section];
}

function toggleItem(id: string) {
  activeItems.value[id] = !activeItems.value[id];
}
</script>

<template>
  <main>
    <div class="services-page">
      <h1>Služby</h1>
      <!-- KOSMETIKA -->
      <article id="kosmetika" v-appear class="service-section">
        <div class="service-media">
          <div class="service-video">
            <video autoplay muted loop playsinline>
              <source src="/videos/kosmetika.mp4" type="video/mp4" />
            </video>
          </div>
          <ImageSlider :images="kosmetikaImages" />
        </div>

        <div class="service-content">
          <h2>Kosmetika</h2>
          <p class="service-subtitle">Péče o pleť, relax a chvíle jen pro Vás 🌿</p>
          <p>
            Dopřejte si ošetření s kosmetikou Alissa Beauté, které spojí péči, odpočinek a zvýraznění Vaší přirozené
            krásy ✨
          </p>
          <ul>
            <li>Hloubkové čištění pleti</li>
            <li>Péče o všechny druhy pleti</li>
            <li>Relaxace s masáží dekoltu a obličeje</li>
            <li>Rejuvenační přístroj pro omlazení pleti</li>
            <li>Lash lifting a laminace obočí</li>
            <li>Barvení obočí a řas</li>
          </ul>

          <div class="service-buttons">
            <button type="button" class="service-btn" @click="openPriceGallery">CENÍK</button>
            <button type="button" class="faq-toggle" @click="toggleFaq('kosmetika')">NEJČASTĚJŠÍ OTÁZKY</button>
          </div>

          <div class="faq hidden-faq" :class="{ show: faqOpen.kosmetika }">
            <div class="faq-item" :class="{ active: activeItems['k1'] }">
              <button type="button" class="faq-question" @click="toggleItem('k1')">
                Jak dlouho trvá ošetření?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer"><p>Ošetření trvá přibližně 90–120 minut 🌿</p></div>
            </div>
            <div class="faq-item" :class="{ active: activeItems['k2'] }">
              <button type="button" class="faq-question" @click="toggleItem('k2')">
                Je ošetření vhodné i pro citlivou pleť?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer"><p>Ano 😊 Péči vždy přizpůsobuji Vaší pleti.</p></div>
            </div>
          </div>
        </div>
      </article>

      <!-- VIZÁŽ -->
      <article id="vizaz" v-appear class="service-section">
        <div class="service-media">
          <ImageSlider :images="vizazImages" slider-class="vizaz-slider" />
        </div>

        <div class="service-content">
          <h2>Vizáž & Make-up</h2>
          <p class="service-subtitle">Pro chvíle, na které chcete vzpomínat 🤍</p>
          <p>Svatební, plesové i slavnostní líčení v přirozeném elegantním stylu 🌿</p>
          <p class="photo-collab">
            Nově také možnost vizáže spojené s profesionálním focením s fotografkou
            <a href="https://evasobotova.cz/" target="_blank" rel="noopener noreferrer">Evou Sobotovou</a>
            ✨
          </p>
          <ul>
            <li>Svatební líčení</li>
            <li>Plesové líčení</li>
            <li>Foto make-up</li>
            <li>Denní a večerní líčení</li>
            <li>Účesy</li>
            <li>Zkouška líčení i účesu</li>
          </ul>

          <div class="service-buttons">
            <NuxtLink class="service-btn" to="/kontakt">POPTAT TERMÍN A CENU</NuxtLink>
            <button type="button" class="faq-toggle" @click="toggleFaq('vizaz')">NEJČASTĚJŠÍ OTÁZKY</button>
          </div>

          <div class="faq hidden-faq" :class="{ show: faqOpen.vizaz }">
            <div class="faq-item" :class="{ active: activeItems['v1'] }">
              <button type="button" class="faq-question" @click="toggleItem('v1')">
                Kdy rezervovat svatební termín?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Ideálně co nejdříve 😊 Svatební termíny bývají rezervované několik měsíců dopředu.</p>
              </div>
            </div>
            <div class="faq-item" :class="{ active: activeItems['v2'] }">
              <button type="button" class="faq-question" @click="toggleItem('v2')">
                Je možná zkouška líčení?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Ano ❤️ Zkouška líčení i účesu je možná před svatbou či focením.</p>
              </div>
            </div>
            <div class="faq-item" :class="{ active: activeItems['v3'] }">
              <button type="button" class="faq-question" @click="toggleItem('v3')">
                Je možné líčení i s účesem?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer"><p>Ano 😊 Je možné domluvit kompletní vizáž včetně účesu.</p></div>
            </div>
          </div>
        </div>
      </article>

      <!-- WORKSHOP -->
      <article id="workshop" class="service-section">
        <div class="service-media">
          <ImageSlider :images="workshopImages" slider-class="workshop-slider" />
        </div>

        <div class="service-content">
          <h2>Workshopy</h2>
          <p class="service-subtitle">Naučte se pečovat o sebe s lehkostí ✨</p>
          <p>Individuální i skupinové workshopy zaměřené na péči o pleť a přirozené líčení 🌿</p>
          <ul>
            <li>Péče o pleť</li>
            <li>Jak na denní make-up</li>
            <li>Výběr kosmetiky</li>
            <li>Skupinové workshopy</li>
            <li>Individuální konzultace</li>
          </ul>

          <div class="service-buttons">
            <NuxtLink class="service-btn" to="/kontakt">POPTAT TERMÍN</NuxtLink>
            <button type="button" class="faq-toggle" @click="toggleFaq('workshop')">NEJČASTĚJŠÍ OTÁZKY</button>
          </div>

          <div class="faq hidden-faq" :class="{ show: faqOpen.workshop }">
            <div class="faq-item" :class="{ active: activeItems['w1'] }">
              <button type="button" class="faq-question" @click="toggleItem('w1')">
                Jsou workshopy i individuální?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer"><p>Ano 🌿 Workshopy mohou být individuální i skupinové.</p></div>
            </div>
            <div class="faq-item" :class="{ active: activeItems['w2'] }">
              <button type="button" class="faq-question" @click="toggleItem('w2')">
                Je workshop vhodný pro začátečníky?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Ano 😊 Workshop je vhodný pro všechny úrovně zkušeností.</p>
              </div>
            </div>
            <div class="faq-item" :class="{ active: activeItems['w3'] }">
              <button type="button" class="faq-question" @click="toggleItem('w3')">
                Co si mám vzít s sebou?
                <span class="icon">+</span>
              </button>
              <div class="faq-answer">
                <p>Stačí dobrá nálada ❤️ Produkty i pomůcky budou připravené.</p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>

    <!-- PRICE GALLERY MODAL -->
    <Teleport to="body">
      <div
        v-if="priceModalOpen"
        class="gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Ceník"
        @click.self="closePriceGallery"
      >
        <button class="close-gallery" aria-label="Zavřít" @click="closePriceGallery">&times;</button>
        <img :src="priceImages[priceIndex]" alt="Ceník Kosmetika Petra" />
        <button class="gallery-arrow prev" aria-label="Předchozí" @click="changePriceImage(-1)">&#10094;</button>
        <button class="gallery-arrow next" aria-label="Další" @click="changePriceImage(1)">&#10095;</button>
      </div>
    </Teleport>
  </main>
</template>

<style scoped>
/* ── Layout ──────────────────────────────────────────── */

.services-page {
  padding: 100px 10% 120px;
}

h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 72px;
  font-weight: 400;
  color: #6f8b74;
}

.service-section {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 70px;
  align-items: flex-start;
  margin-bottom: 140px;
}

.service-section:last-child {
  margin-bottom: 0;
}

.service-section.reverse {
  direction: rtl;
}

.service-section.reverse .service-content {
  direction: ltr;
}

.service-media {
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #f6f3ed;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
}

.service-content h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 72px;
  font-weight: 400;
  color: #6f8b74;
  margin-bottom: 10px;
}

.service-subtitle {
  font-family: 'Cormorant Garamond', serif;
  font-size: 30px;
  font-weight: 600;
  color: #6f8b74;
  margin-bottom: 25px;
}

.service-content p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  line-height: 1.7;
  color: #4f5b52;
  margin-bottom: 25px;
}

.service-content ul {
  margin-bottom: 35px;
  padding-left: 20px;
}

.service-content li {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  margin-bottom: 12px;
  color: #4f5b52;
}

.service-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 34px;
  background: #8a9470;
  color: white;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;
  transition: 0.3s;
  white-space: nowrap;
  width: auto;
}

.service-btn:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

.service-buttons {
  display: flex;
  align-items: center;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 30px;
}

#kosmetika,
#vizaz,
#workshop {
  scroll-margin-top: 140px;
}

/* ── Video ───────────────────────────────────────────── */

.service-video {
  width: 100%;
  height: 380px;
  overflow: hidden;
  border-radius: 30px;
}

.service-video video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* ── FAQ ─────────────────────────────────────────────── */

.faq {
  margin-top: 40px;
}

.faq-item {
  background: #f6f3ed;
  border-radius: 22px;
  margin-bottom: 18px;
  overflow: hidden;
}

.faq-question {
  width: 100%;
  padding: 22px 28px;
  border: none;
  outline: none;
  background: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  font-weight: 600;
  color: #5f7764;
  text-align: left;
}

.faq-question .icon {
  font-size: 28px;
  transition: transform 0.3s;
  flex-shrink: 0;
}

.faq-item.active .icon {
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
  padding: 0 28px;
}

.faq-item.active .faq-answer {
  max-height: 300px;
}

.faq-answer p {
  padding-bottom: 24px;
  font-family: 'Cormorant Garamond', serif;
  font-size: 22px;
  line-height: 1.7;
  color: #4f5b52;
  margin-bottom: 0;
}

.faq-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 34px;
  background: #d9dfd3;
  color: #4f5b52;
  border: none;
  border-radius: 50px;
  font-size: 13px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  width: auto;
}

.faq-toggle:hover {
  background: #c8d0c2;
}

.hidden-faq {
  display: none;
  margin-top: 35px;
}

.hidden-faq.show {
  display: block;
}

/* ── Photo collab ────────────────────────────────────── */

.photo-collab {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  line-height: 1.6;
  color: #6f8b74;
  margin-bottom: 30px;
}

.photo-collab a {
  color: #8a9470;
  text-decoration: none;
  font-weight: 600;
}

.photo-collab a:hover {
  text-decoration: underline;
}

/* ── Price gallery modal ─────────────────────────────── */

.gallery-modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
}

.gallery-modal img {
  max-width: 90%;
  max-height: 90%;
  border-radius: 20px;
}

.close-gallery {
  position: absolute;
  top: 30px;
  right: 40px;
  font-size: 50px;
  color: white;
  cursor: pointer;
  background: none;
  border: none;
  line-height: 1;
}

.gallery-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 56px;
  height: 56px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  font-size: 26px;
  cursor: pointer;
  transition: 0.3s;
}

.gallery-arrow:hover {
  background: white;
}

.gallery-arrow.prev {
  left: 40px;
}

.gallery-arrow.next {
  right: 40px;
}

/* ── Responsive ──────────────────────────────────────── */
@media (max-width: 1024px) {
  .services-page {
    padding: 100px 10% 20px;
  }
}

@media (max-width: 768px) {
  .services-page {
    padding: 0;
    padding-top: 100px;
  }

  h1 {
    text-align: center;
  }

  .service-section,
  .service-section.reverse {
    display: flex;
    flex-direction: column;
    gap: 40px;
    direction: ltr;
    margin-bottom: 90px;
  }

  .service-media {
    width: 100%;
    padding: 14px;
  }

  .service-content {
    width: 100%;
    padding: 0 20px;
  }

  .service-content h2 {
    font-size: 52px;
  }

  .service-subtitle {
    font-size: 24px;
  }

  .service-content p,
  .service-content li {
    font-size: 21px;
    word-break: break-word;
  }

  :deep(.vizaz-slider) {
    height: 500px;
  }

  :deep(.workshop-slider) {
    height: 420px;
  }

  .service-buttons {
    flex-direction: column;
    width: 100%;
    gap: 14px;
  }

  .service-btn,
  .faq-toggle {
    width: 100% !important;
    justify-content: center;
    font-size: 11px;
    padding: 14px 20px;
    height: auto;
  }
}
</style>
