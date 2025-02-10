<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const stickyMode = ref(false);
const activeSection = ref('home');

const menuList = [
  { name: 'Home', goTo: '#home' },
  { name: 'About Us', goTo: '#about-us' },
  { name: 'Resume', goTo: '#resume' },
  { name: 'Portfolio', goTo: '#portfolio' },
  { name: 'Contact Us', goTo: '#contact-us' },
];

// ฟังก์ชันตรวจจับ Scroll และ Sticky Mode
const handleScroll = () => {
  stickyMode.value = window.scrollY > 0;
};

// ฟังก์ชันเลื่อนไปที่ Section และหยุดก่อน 80px
const handleClick = (id) => {
  const targetElement = document.querySelector(id);
  if (targetElement) {
    const offset = 80;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

// ฟังก์ชันตรวจจับว่า Section ไหน Active
const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  // ใช้ IntersectionObserver
  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // ตรวจจับเมื่อ Section อยู่ตรงกลางจอ
    threshold: 0,
  });

  menuList.forEach((item) => {
    const element = document.querySelector(item.goTo);
    if (element) observer.observe(element);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
    observer.disconnect();
  });
});
</script>

<template>
  <div
    :class="stickyMode && ' bg-gray-900 bg-opacity-80 backdrop-blur'"
    class="border-b border-gray-700 px-4 sticky top-0 transition-all duration-200"
  >
    <div class="container text-white">
      <div class="flex items-center justify-between h-[60px]">
        <!-- Left Zone -->
        <div class="flex items-center gap-4">
          <NuxtImg
            src="/assets/ck-logo-light.svg"
            alt="CK Logo"
            loading="lazy"
            width="60"
          />
        </div>

        <!-- Right Zone -->
        <div class="flex items-center gap-4">
          <div
            v-for="(item, index) in menuList"
            :key="index"
            @click="handleClick(item.goTo)"
            class="cursor-pointer transition duration-300 opacity-50 hover:opacity-100"
            :class="{
              'text-primary-500 opacity-100 hover:opacity-100 border-b border-primary-200':
                activeSection === item.goTo.replace('#', ''),
            }"
          >
            {{ item.name }}
          </div>

          <!-- ปุ่ม Get in Touch -->
          <a
            href="https://line.me/ti/p/~hichiso8"
            target="_blank"
            class="flex items-center gap-2 rounded ml-8 bg-primary-base px-3 h-[36px] tracking-widest cursor-pointer hover:bg-opacity-90"
          >
            <div>Get in Touch</div>
            <LucideMessageSquareMore :size="18" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
