<script setup>
const showModal = ref(false);
const selectedImage = ref('');

const openModal = (image) => {
  selectedImage.value = image;
  showModal.value = true;
};

const websiteList = [
  {
    image: '/assets/website/the-visual.jpg',
    name: 'The Visual Clinic',
    link: 'https://thevisual-clinic.com',
  },
  {
    image: '/assets/website/gem-clinic.jpg',
    name: 'GEM Clinic',
    link: 'https://www.gemscientificbeauty.com',
  },
  {
    image: '/assets/website/silk-dental.jpg',
    name: 'Silk Dental Clinic',
    link: 'https://silkdentalclinic.com',
  },
  {
    image: '/assets/website/nipa-cloud.jpg',
    name: 'Nipa Cloud',
    link: 'https://nipa.cloud',
  },
];

const lineOaList = [
  { image: '/assets/lineoa/line-oa-1.jpg' },
  { image: '/assets/lineoa/line-oa-2.jpg' },
  { image: '/assets/lineoa/line-oa-3.jpg' },
  { image: '/assets/lineoa/line-oa-4.jpg' },
  { image: '/assets/lineoa/line-oa-5.jpg' },
];

const webappList = [
  { image: '/assets/webapp/webapp-1.jpg' },
  { image: '/assets/webapp/webapp-2.jpg' },
  { image: '/assets/webapp/webapp-3.jpg' },
  { image: '/assets/webapp/webapp-4.jpg' },
  { image: '/assets/webapp/webapp-5.jpg' },
  { image: '/assets/webapp/webapp-6.jpg' },
];

const designList = [
  { image: '/assets/design/design-1.jpg' },
  { image: '/assets/design/design-2.jpg' },
  { image: '/assets/design/design-3.jpg' },
  { image: '/assets/design/design-4.jpg' },
];
</script>

<template>
  <div class="container my-24 cursor-default leading-relaxed">
    <div class="text-center">
      <h2 class="text-7xl font-light">Portfolio</h2>
    </div>

    <div class="text-center mt-12 mb-6 px-4">
      <h3 class="text-4xl md:text-5xl">Website Development</h3>
      <p class="max-w-[600px] mx-auto text-white/70">
        This section showcases my website development projects, where I have
        built modern, responsive, and high-performance websites tailored to
        various industries. I have worked extensively with Vue.js, Nuxt.js,
        React.js, and Next.js, ensuring seamless and interactive user
        experiences.
      </p>
    </div>

    <div class="grid grid-cols-12 gap-4 text-gray-800 mt-6 px-4">
      <div
        v-for="(item, index) in websiteList"
        :key="`website-${index}`"
        class="col-span-12 md:col-span-6 lg:col-span-3"
      >
        <a :href="item.link" target="_blank">
          <div class="p-2 bg-white rounded-lg relative z-10 cursor-pointer">
            <NuxtImg
              :src="item.image"
              :alt="item.name"
              loading="lazy"
              class="rounded-md border w-full object-cover"
            />
            <div class="text-xl mt-2">
              <b>Project : </b>
              <span class="text-gray-600">{{ item.name }}</span>
            </div>
            <div
              class="p-2 bg-primary-base text-white text-center rounded-md w-full mt-2"
            >
              Visit Website
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="text-center mt-12 mb-6 px-4">
      <h3 class="text-4xl md:text-5xl">LINE OA Projects</h3>
      <p class="max-w-[600px] mx-auto text-white/70">
        This section showcases my LINE Official Account (LINE OA) projects,
        where I developed LINE Rich Menu and connected it to a backend system
        built with PHP and MySQL to automate processes and enhance user
        engagement.
      </p>
    </div>

    <div class="grid grid-cols-10 gap-4 px-4 text-gray-800">
      <div
        v-for="(item, index) in lineOaList"
        :key="`line-${index}`"
        class="col-span-10 md:col-span-2"
      >
        <div
          class="bg-white rounded-lg p-2 cursor-pointer"
          @click="openModal(item.image)"
        >
          <NuxtImg
            :src="item.image"
            alt="Image"
            loading="lazy"
            class="rounded-md border w-full object-cover"
          />
        </div>
      </div>
    </div>

    <div class="text-center mt-12 mb-6 space-y-4 px-4">
      <h3 class="text-4xl md:text-5xl">Web Application</h3>
      <p class="max-w-[600px] mx-auto text-white/70">
        This section showcases my Web Application development projects, where I
        have built scalable and high-performance applications using Nuxt.js for
        the frontend and PHP Slim Framework 4 for the backend.
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        For the frontend, I have utilized Nuxt.js to create fast, SEO-friendly,
        and interactive applications with a seamless user experience. I focus on
        building responsive UI/UX with modern design principles, ensuring smooth
        navigation across all devices.
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        On the backend, I have developed robust and lightweight APIs using PHP
        Slim Framework 4, enabling efficient data processing, authentication,
        and business logic handling. The integration with MySQL ensures secure
        and optimized database management, while RESTful APIs allow seamless
        communication between the frontend and backend.
      </p>
    </div>

    <div class="grid grid-cols-12 gap-4 px-4 text-gray-800">
      <div
        v-for="(item, index) in webappList"
        :key="`webapp-${index}`"
        class="col-span-12 md:col-span-6 lg:col-span-4"
      >
        <div
          class="bg-white rounded-lg p-2 cursor-pointer"
          @click="openModal(item.image)"
        >
          <NuxtImg
            :src="item.image"
            alt="Image"
            loading="lazy"
            class="rounded-md border aspect-video object-cover"
          />
        </div>
      </div>
    </div>

    <div class="text-center mt-12 mb-6 space-y-4 px-4">
      <h3 class="text-4xl md:text-5xl">Design & Flow</h3>
      <p class="max-w-[600px] mx-auto text-white/70">
        This section highlights my expertise in Figma, where I utilize its
        powerful tools to streamline requirement gathering, design system
        creation, and team collaboration.
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        I use FigJam to document and update project requirements with clients,
        ensuring a clear understanding of goals and expectations. This helps in
        maintaining transparency and aligning development progress with business
        needs.
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        For design execution, I work extensively with Figma’s design board to
        create design systems, user flows, and UI components, ensuring
        consistency and scalability across projects. Additionally, I actively
        use Figma during team meetings, facilitating smooth collaboration
        between designers, developers, and stakeholders.
      </p>
    </div>

    <div class="grid grid-cols-12 gap-4 px-4 text-gray-800">
      <div
        v-for="(item, index) in designList"
        :key="`design-${index}`"
        class="col-span-12 md:col-span-6"
      >
        <div
          class="bg-white rounded-lg p-2 cursor-pointer"
          @click="openModal(item.image)"
        >
          <NuxtImg
            :src="item.image"
            alt="Image"
            loading="lazy"
            class="rounded-md border aspect-video object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Modal -->
    <BaseModal v-model="showModal">
      <NuxtImg
        :src="selectedImage"
        alt="Selected Image"
        loading="lazy"
        class="mx-auto shadow-lg w-full rounded-lg"
      />
    </BaseModal>
  </div>
</template>
