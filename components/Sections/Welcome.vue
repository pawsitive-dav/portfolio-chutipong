<script setup>
const { t, locale } = useI18n();

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
</script>

<template>
  <div class="py-24 relative w-full h-screen cursor-default overflow-hidden">
    <img
      src="/assets/forest-bg.jpg"
      alt="Backgroud"
      loading="lazy"
      class="absolute z-0 left-0 top-0 w-full h-full object-cover opacity-20"
    />

    <div class="absolute z-0 left-0 top-0 w-full h-full bg-gray-950/50"></div>

    <div class="flex items-center justify-center relative z-10 h-full">
      <div class="text-center space-y-6 px-4">
        <div
          class="bg-gray-800 rounded px-3 py-1 text-sm w-fit mx-auto text-white/70"
        >
          Full Stack Developer & UX/UI Designer
        </div>
        <h1 class="text-3xl md:text-6xl lg:text-7xl font-light">
          {{
            locale === 'th'
              ? 'ยินดีต้อนรับสู่พอร์ตโฟลิโอของฉัน!'
              : 'Welcome to my portfolio!'
          }}
        </h1>
        <h2 v-if="locale === 'th'" class="text-7xl font-thin">
          ผมชื่อ <br class="md:hidden" />
          ชุติพงศ์ <br class="md:hidden" />
          กฤษแก้ว
        </h2>
        <h2 v-else class="text-7xl font-thin">I’m Chutipong Kritkaow</h2>
        <p
          class="leading-relaxed font-light text-white/70 max-w-[635px] mx-auto"
        >
          {{
            locale === 'th'
              ? 'ผมทำงานเป็น Fullstack Developer ที่ถนัดด้าน Frontend Development และชื่นชอบในการสร้างเว็บแอปพลิเคชันที่มีประสิทธิภาพและใช้งานง่าย ภาษาที่ใช้งานเป็นหลักคือ JavaScript, Vue.js, Nuxt.js, PHP และ MySQL'
              : 'I am a Fullstack Developer specializing in Frontend Development, passionate about building efficient and user-friendly web applications. With expertise in JavaScript, Vue.js, Nuxt.js, PHP, and MySQL'
          }}
        </p>

        <div class="flex items-center justify-center gap-4">
          <a
            href="https://line.me/ti/p/~hichiso8"
            target="_blank"
            class="flex items-center gap-2 w-fit rounded px-4 h-[40px] tracking-widest cursor-pointer bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition duration-300"
          >
            <div>{{ t('get_in_touch') }}</div>
            <LucideMessageSquareMore :size="18" class="text-white/70" />
          </a>
          <div
            class="flex items-center h-[40px] rounded border border-dashed font-light tracking-widest border-white/70 px-4 text-white/70 cursor-pointer hover:bg-white/10 hover:text-white/90"
            @click="handleClick('#contact-us')"
          >
            {{ t('contact') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
