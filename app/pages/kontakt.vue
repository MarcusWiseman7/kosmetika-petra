<script setup lang="ts">
useMeta({
  title: 'Kontakt | Kosmetika Petra – Lípa u Havlíčkova Brodu',
  description:
    'Kontaktujte Kosmetiku Petra – tel. 726 168 334, e-mail Kosmetika_Petra@seznam.cz. Lípa 300, 58257 Lípa. Objednejte se online.',
  canonical: '/kontakt',
});

const BOOKING_URL =
  'https://partner.notino.com/api/b2c/redirect/salons/detail?salonID=1cf319be-5dca-43d9-998b-ae5ee3d7e42b&utm_source=salon_mkt&utm_medium=qr&utm_campaign=booking_promo&utm_content=1cf319be-5dca-43d9-998b-ae5ee3d7e42b';
</script>

<template>
  <main>
    <!-- HERO -->
    <header class="contact-hero">
      <h1>Kontakt</h1>
      <p>Těším se na každou z Vás 🌿</p>
    </header>

    <div class="contact-page">
      <!-- TOP ROW: info + form -->
      <div v-appear class="contact-top">
        <!-- LEFT: contact info -->
        <div class="contact-info">
          <div class="contact-box">
            <h3><i class="fa-solid fa-phone" aria-hidden="true"></i> Telefon</h3>
            <p><a href="tel:+420725168334">725 168 334</a></p>
          </div>

          <div class="contact-box">
            <h3><i class="fa-solid fa-envelope" aria-hidden="true"></i> E-mail</h3>
            <p><a href="mailto:Kosmetika_Petra@seznam.cz">Kosmetika_Petra@seznam.cz</a></p>
          </div>

          <div class="contact-box">
            <h3><i class="fa-regular fa-clock" aria-hidden="true"></i> Otevírací doba</h3>
            <p>Dle objednání 🤍</p>
          </div>

          <div class="contact-socials">
            <a class="contact-btn" :href="BOOKING_URL" target="_blank" rel="noopener noreferrer"> Rezervovat termín </a>
            <a
              class="social-icon"
              href="https://m.me/KosmetikaPetraLipa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Messenger"
            >
              <i class="fa-brands fa-facebook-messenger" aria-hidden="true"></i>
            </a>
            <a
              class="social-icon"
              href="https://www.instagram.com/kosmetika_petra_lipa_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i class="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>

        <!-- RIGHT: contact form -->
        <div class="contact-form-box">
          <h2>Napište mi</h2>
          <form action="https://formspree.io/f/mvzypkdy" method="POST" aria-label="Kontaktní formulář">
            <input type="text" name="jmeno" placeholder="Vaše jméno" autocomplete="name" required />
            <input type="email" name="email" placeholder="Váš e-mail" autocomplete="email" required />
            <textarea name="zprava" placeholder="Vaše zpráva" required></textarea>
            <button type="submit">ODESLAT</button>
          </form>
        </div>
      </div>

      <!-- BUILDING: address + map + photo -->
      <div v-appear class="building-box">
        <div class="building-left">
          <div class="building-address">
            <h3>Adresa</h3>
            <p>
              Lípa 300<br />
              58257 Lípa
            </p>
          </div>
          <div class="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2202.7460981375316!2d15.544382467181967!3d49.55463292720196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f9!3m3!1m2!1s0x470d01660cc606ff%3A0xb05958c377e0ccd2!2zTMOtcGEgMzAwLCA1ODIgNTcgTMOtcGE!5e0!3m2!1scs!2scz!4v1778929381119!5m2!1scs!2scz"
              title="Mapa – Kosmetika Petra, Lípa 300"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div class="building-right">
          <img
            class="building-photo"
            src="/images/budova.webp"
            alt="Budova Kosmetiky Petra v Lípě u Havlíčkova Brodu"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.contact-hero {
  padding: 180px 10% 60px;
  text-align: center;
  background: linear-gradient(135deg, #f8f5ef 0%, #eef4ee 100%);
}

.contact-hero h1 {
  font-family: 'Great Vibes', cursive;
  font-size: 72px;
  font-weight: 400;
  color: #6f8b74;
  margin-bottom: 10px;
}

.contact-hero p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  font-weight: 600;
  color: #5f7764;
}

.contact-page {
  padding: 80px 10% 0;
}

.contact-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 50px;
  align-items: stretch;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.contact-box {
  background: white;
  padding: 35px;
  border-radius: 28px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
}

.contact-box h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 28px;
  color: #6f8b74;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-box p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  color: #4f5b52;
  line-height: 1.6;
}

.contact-box a {
  color: #4f5b52;
  text-decoration: none;
}

.contact-box a:hover {
  text-decoration: underline;
}

.contact-socials {
  display: flex;
  align-items: center;
  gap: 18px;
}

.contact-btn {
  display: inline-block;
  padding: 16px 34px;
  background: #8a9470;
  color: white;
  border: none;
  outline: none;
  border-radius: 50px;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 2px;
  transition: 0.3s;
}

.contact-btn:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

.social-icon {
  width: 52px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #8a9470;
  color: white;
  text-decoration: none;
  font-size: 20px;
  transition: 0.3s;
}

.social-icon:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

.contact-form-box {
  background: white;
  padding: 45px;
  border-radius: 30px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
}

.contact-form-box h2 {
  font-family: 'Great Vibes', cursive;
  font-size: 58px;
  font-weight: 400;
  color: #6f8b74;
  margin-bottom: 30px;
  text-align: center;
}

.contact-form-box form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form-box input,
.contact-form-box textarea {
  width: 100%;
  padding: 18px 22px;
  border: none;
  background: #f6f3ed;
  border-radius: 18px;
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  outline: none;
}

.contact-form-box input:focus,
.contact-form-box textarea:focus {
  background: #ede9e1;
}

.contact-form-box textarea {
  min-height: 180px;
  resize: none;
}

.contact-form-box button {
  display: inline-block;
  padding: 16px 34px;
  background: #8a9470;
  color: white;
  border: none;
  outline: none;
  border-radius: 50px;
  font-size: 13px;
  letter-spacing: 2px;
  cursor: pointer;
  transition: 0.3s;
}

.contact-form-box button:hover {
  background: #6f8b74;
  transform: translateY(-3px);
}

.building-box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'address address'
    'map     photo';
  gap: 40px;
  background: white;
  padding: 40px;
  border-radius: 30px;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
}

.building-left {
  display: contents;
}

.building-address {
  grid-area: address;
  padding: 20px;
}

.building-left h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 36px;
  color: #6f8b74;
  margin-bottom: 10px;
}

.building-left p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 24px;
  color: #4f5b52;
  line-height: 1.6;
}

.contact-map {
  grid-area: map;
}

.contact-map iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 24px;
}

.building-right {
  grid-area: photo;
  display: flex;
  justify-content: center;
  align-items: stretch;
}

.building-photo {
  width: 100%;
  height: auto;
  aspect-ratio: 1535 / 1024;
  object-fit: cover;
  border-radius: 24px;
}

@media (max-width: 768px) {
  .contact-page {
    padding: 40px 20px 0;
  }

  .contact-top {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .contact-form-box {
    padding: 30px 20px;
  }

  .contact-form-box h2 {
    font-size: 46px;
  }

  .contact-form-box input,
  .contact-form-box textarea {
    font-size: 16px;
    padding: 16px;
  }

  .contact-form-box button {
    width: 100%;
  }

  .contact-socials {
    justify-content: center;
    margin-top: 20px;
    flex-wrap: wrap;
  }

  .contact-box {
    padding: 24px;
  }

  .contact-map iframe {
    height: 260px;
    border-radius: 0;
  }

  .building-box {
    grid-template-columns: 1fr;
    grid-template-areas:
      'address'
      'map'
      'photo';
    padding: 0;
    gap: 20px;
  }

  .building-photo {
    border-radius: 0;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
  }
}
</style>
