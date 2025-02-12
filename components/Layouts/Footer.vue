<script setup>
const config = useRuntimeConfig();

const copied = ref(false);

const menuList = [
  { name: 'Welcome', goTo: '#welcome' },
  { name: 'About Us', goTo: '#about-us' },
  { name: 'Portfolio', goTo: '#portfolio' },
];

const socialsContact = [
  {
    icon: '/assets/line-icon-light.png',
    alt: 'LINE',
    link: 'https://line.me/ti/p/~hichiso8',
    name: 'LINE',
  },
  {
    icon: '/assets/github-icon-light.png',
    alt: 'GITHUB 1',
    link: 'https://github.com/pawsitive-dav',
    name: 'pawsitive-dav',
  },
  {
    icon: '/assets/github-icon-light.png',
    alt: 'GITHUB 2',
    link: 'https://github.com/Captain-Rhea',
    name: 'Captain-Rhea',
  },
];

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
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
</script>

<template>
  <div id="contact-us" class="mt-12 font-light cursor-default">
    <div class="px-4 py-12 border-t border-gray-700">
      <div class="container">
        <div class="grid grid-cols-10 gap-4 md:gap-6">
          <div
            class="col-span-10 lg:col-span-4 space-y-4 text-center lg:text-left"
          >
            <NuxtImg
              src="/assets/ck-logo-light.svg"
              alt="CK Logo"
              loading="lazy"
              width="120"
              class="mx-auto lg:ml-0"
            />
            <div class="text-sm text-white/60 max-w-[420px] mx-auto lg:ml-0">
              Thank you for taking the time to review my portfolio. Even though
              we haven’t worked together yet, I truly hope we’ll have the
              opportunity to collaborate in the future and create something
              great together.
            </div>
          </div>

          <div class="col-span-10 lg:col-span-2 space-y-4 my-8 lg:my-0">
            <div class="font-medium text-center lg:text-left">Sections</div>
            <div
              class="flex justify-center lg:block lg:justify-start items-center gap-4 lg:space-y-4"
            >
              <div
                v-for="(item, index) in menuList"
                :key="`menu-${index}`"
                class="text-sm text-white/60 cursor-pointer hover:text-white/90"
                @click="handleClick(item.goTo)"
              >
                {{ item.name }}
              </div>
            </div>
          </div>

          <div
            class="col-span-10 lg:col-span-4 space-y-4 text-center lg:text-left"
          >
            <div class="font-medium">Contact Us</div>
            <div class="text-sm text-white/60 max-w-[380px] mx-auto lg:ml-0">
              62/40 Soi Charoen Krung 57, Khwaeng Yan Nawa, Khet Sathon, Krung
              Thep Maha Nakhon 10120
            </div>

            <div
              class="flex items-center mx-auto lg:ml-0 gap-4 w-fit border border-gray-700 rounded bg-gray-800 p-1"
            >
              <LucideMail :size="18" class="ml-2 text-white/80" />
              <div class="tracking-widest text-white/80 cursor-text">
                ichu.dev@gmail.com
              </div>
              <div
                @click="copyToClipboard('ichu.dev@gmail.com')"
                class="bg-white text-gray-900 w-[80px] text-center font-normal capitalize px-2 py-1 rounded text-sm cursor-pointer hover:bg-opacity-90 transition duration-300"
              >
                {{ copied ? 'Copied!' : 'Copy' }}
              </div>
            </div>

            <div
              class="flex items-center justify-center lg:justify-start gap-4"
            >
              <div
                class="flex items-center gap-4 border border-gray-700 px-3 py-2 rounded text-white/50 hover:text-white/80 hover:bg-white/5"
              >
                <LucidePhone :size="18" />
                <a href="tel:0930271716" class="leading-none tracking-widest">
                  093-027-1716
                </a>
              </div>

              <a
                v-for="(item, index) in socialsContact"
                :key="`social-${index}`"
                :href="item.link"
                target="_blank"
              >
                <BaseTooltip :text="item.name">
                  <NuxtImg
                    :src="item.icon"
                    :alt="item.alt"
                    loading="lazy"
                    width="30"
                  />
                </BaseTooltip>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 border-t border-gray-700 text-white/40">
      <div class="container tracking-wider text-center text-xs">
        Copyright © 2010 - {{ new Date().getFullYear() }} Chutipong Kritkaow
        <br class="md:hidden" />
        <span class="font-semibold md:ml-2">Last Update :</span>
        <span>{{ config.public.lastUpdate }}</span>
      </div>
    </div>
  </div>
</template>
