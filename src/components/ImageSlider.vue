<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  images: Array<{ src: string; alt: string }>;
  sliderClass?: string;
  autoplayInterval?: number;
}>();

const current = ref(0);
let timer: ReturnType<typeof setInterval> | undefined;

function next() {
  current.value = (current.value + 1) % props.images.length;
}

function prev() {
  current.value = (current.value - 1 + props.images.length) % props.images.length;
}

function resetTimer() {
  if (timer) clearInterval(timer);
  timer = setInterval(next, props.autoplayInterval ?? 3000);
}

onMounted(() => {
  resetTimer();
});

onUnmounted(() => {
  if (timer) clearInterval(timer);
});

function handleNext() {
  next();
  resetTimer();
}

function handlePrev() {
  prev();
  resetTimer();
}
</script>

<template>
  <div class="service-image-slider" :class="sliderClass">
    <img
      v-for="(image, i) in images"
      :key="image.src"
      :src="image.src"
      :alt="image.alt"
      :class="{ active: i === current }"
      loading="lazy"
    />
    <button class="slider-arrow prev" aria-label="Předchozí" @click="handlePrev">&#10094;</button>
    <button class="slider-arrow next" aria-label="Další" @click="handleNext">&#10095;</button>
  </div>
</template>

<style scoped>
.service-image-slider {
  position: relative;
  width: 100%;
  height: 340px;
  overflow: hidden;
  border-radius: 26px;
  background: #f6f3ed;
}

.service-image-slider img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.service-image-slider img.active {
  opacity: 1;
}

.vizaz-slider {
  height: 760px;
}

.workshop-slider {
  height: 580px;
}

.slider-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  color: #6f8b74;
  font-size: 22px;
  cursor: pointer;
  z-index: 5;
  transition: 0.3s;
}

.slider-arrow:hover {
  background: white;
  transform: translateY(-50%) scale(1.08);
}

.slider-arrow.prev {
  left: 18px;
}

.slider-arrow.next {
  right: 18px;
}
</style>
