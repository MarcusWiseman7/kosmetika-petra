<script setup lang="ts">
import { ref } from 'vue';

const menuOpen = ref(false);

function closeMenu() {
  menuOpen.value = false;
}

const BOOKING_URL =
  'https://partner.notino.com/api/b2c/redirect/salons/detail?salonID=1cf319be-5dca-43d9-998b-ae5ee3d7e42b&utm_source=salon_mkt&utm_medium=qr&utm_campaign=booking_promo&utm_content=1cf319be-5dca-43d9-998b-ae5ee3d7e42b';
</script>

<template>
  <nav aria-label="Hlavní navigace">
    <NuxtLink to="/" class="logo" @click="closeMenu">
      <img src="@/assets/images/logo.webp" alt="Kosmetika Petra logo" width="70" height="70" />
      <span>Kosmetika Petra</span>
    </NuxtLink>

    <button
      class="menu-toggle"
      :aria-expanded="menuOpen"
      aria-controls="nav-menu"
      aria-label="Otevřít menu"
      @click="menuOpen = !menuOpen"
    >
      ☰
    </button>

    <ul id="nav-menu" :class="{ active: menuOpen }" role="list">
      <li><NuxtLink to="/" @click="closeMenu">Domů</NuxtLink></li>
      <li><NuxtLink to="/#o-mne" @click="closeMenu">O mně</NuxtLink></li>
      <li><NuxtLink to="/#sluzby" @click="closeMenu">Služby</NuxtLink></li>
      <li><NuxtLink to="/#galerie" @click="closeMenu">Galerie</NuxtLink></li>
      <li><NuxtLink to="/#reference" @click="closeMenu">Reference</NuxtLink></li>
      <li><NuxtLink to="/kontakt" @click="closeMenu">Kontakt</NuxtLink></li>
      <li>
        <a
          href="https://www.instagram.com/kosmetika_petra_lipa_/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          @click="closeMenu"
        >
          <i class="fa-brands fa-instagram" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/KosmetikaPetraLipa/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          @click="closeMenu"
        >
          <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
        </a>
      </li>
      <li>
        <a class="message-btn" :href="BOOKING_URL" target="_blank" rel="noopener noreferrer" @click="closeMenu">
          objednat se
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(111, 139, 116, 0.12);
  border-radius: 28px;
  z-index: 1000;
  box-shadow: 0 10px 35px rgba(0, 0, 0, 0.05);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0;
  text-decoration: none;
}

.logo img {
  height: 70px;
  width: auto;
  display: block;
}

.logo span {
  font-family: 'Great Vibes', cursive;
  font-size: 40px;
  font-weight: 400;
  color: #6f8b74;
  letter-spacing: 1px;
  line-height: 1;
  text-transform: none;
}

nav ul {
  display: flex;
  gap: 26px;
  list-style: none;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: #6f8b74;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: 0.3s;
}

nav a:hover {
  color: #2f3a32;
}

nav i {
  font-size: 15px;
}

.message-btn {
  display: inline-block;
  padding: 10px 18px;
  background: #8a9470;
  color: white !important;
  border-radius: 40px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s;
}

.message-btn:hover {
  background: #6f8b74;
  transform: translateY(-2px);
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 22px;
  color: #6f8b74;
  cursor: pointer;
  padding: 4px 8px;
}

@media (max-width: 1024px) {
  nav {
    padding: 18px 24px;
    border-radius: 0;
    top: 0;
    width: 100%;
  }

  .logo img {
    height: 54px;
  }

  .logo span {
    font-size: 30px !important;
  }

  .menu-toggle {
    display: block;
  }

  nav ul {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    display: flex;
    max-height: 0;
    overflow: hidden;
    padding: 0;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.08);
    transition:
      max-height 400ms ease,
      padding 400ms ease;
  }

  nav ul.active {
    max-height: 500px;
    padding: 30px 0;
  }
}
</style>
