<script setup>
const stickyMode = ref(false);
const activeSection = ref('home');

const menuList = [
  { name: 'Home', goTo: '#home' },
  { name: 'About Us', goTo: '#about-us' },
  { name: 'Resume', goTo: '#resume' },
  { name: 'Portfolio', goTo: '#portfolio' },
  { name: 'Contact Us', goTo: '#contact-us' },
];

const handleScroll = () => {
  stickyMode.value = window.scrollY > 0;

  const scrollPosition = window.innerHeight + window.scrollY;
  const bottomPosition = document.documentElement.scrollHeight;

  if (scrollPosition >= bottomPosition - 50) {
    activeSection.value = 'contact-us';
    return;
  }

  const sections = document.querySelectorAll('section[id]');
  let currentSection = 'home';

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      currentSection = section.id;
    }
  });

  activeSection.value = currentSection;
};

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

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id;
    }
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
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
    :class="stickyMode && ' bg-gray-900 bg-opacity-80 backdrop-blur-sm'"
    class="border-b border-gray-700 px-4 sticky top-0 transition-all duration-200"
  >
    <div class="container">
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
            class="cursor-pointer transition duration-300 opacity-80 hover:opacity-100"
            :class="{
              'text-primary-500 opacity-100 hover:opacity-100 border-b border-dashed border-white/40 pb-1':
                activeSection === item.goTo.replace('#', ''),
            }"
          >
            {{ item.name }}
          </div>

          <!-- ปุ่ม Get in Touch -->
          <a
            href="https://line.me/ti/p/~hichiso8"
            target="_blank"
            class="flex items-center gap-2 rounded ml-8 px-4 h-[40px] tracking-widest cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition duration-300"
          >
            <div>Get in Touch</div>
            <LucideMessageSquareMore :size="18" class="text-white/70" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
