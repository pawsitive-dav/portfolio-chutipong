<script setup>
const { t, locale } = useI18n();

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
        {{
          locale === 'th'
            ? 'ส่วนนี้เป็นตัวอย่างโปรเจกต์เว็บไซต์ที่ผมพัฒนา โดยมุ่งเน้นการสร้างเว็บไซต์ที่ทันสมัย รองรับทุกอุปกรณ์ และมีประสิทธิภาพสูง เพื่อตอบโจทย์อุตสาหกรรมที่หลากหลาย ผมมีประสบการณ์ในการใช้ Vue.js, Nuxt.js, React.js และ Next.js เพื่อมอบประสบการณ์การใช้งานที่ลื่นไหลและมีความโต้ตอบสูง'
            : 'This section showcases my website development projects, where I have built modern, responsive, and high-performance websites tailored to various industries. I have worked extensively with Vue.js, Nuxt.js, React.js, and Next.js, ensuring seamless and interactive user experiences.'
        }}
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
            <img
              :src="item.image"
              :alt="item.name"
              loading="lazy"
              class="rounded-md border w-full object-cover"
            />
            <div class="text-xl mt-2">
              <b>{{ t('project') }} : </b>
              <span class="text-gray-600">{{ item.name }}</span>
            </div>
            <div
              class="p-2 bg-primary-base text-white text-center rounded-md w-full mt-2"
            >
              {{ t('visit_website') }}
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="text-center mt-12 mb-6 px-4">
      <h3 class="text-4xl md:text-5xl">LINE OA Projects</h3>
      <p class="max-w-[600px] mx-auto text-white/70">
        {{
          locale === 'th'
            ? 'ส่วนนี้เป็นตัวอย่างโปรเจกต์ LINE Official Account (LINE OA) ที่ผมพัฒนา โดยออกแบบ LINE Rich Menu และเชื่อมต่อกับระบบ Backend ที่สร้างด้วย PHP และ MySQL เพื่อทำให้กระบวนการทำงานเป็นอัตโนมัติและเพิ่มการมีส่วนร่วมของผู้ใช้'
            : 'This section showcases my LINE Official Account (LINE OA) projects, where I developed LINE Rich Menu and connected it to a backend system built with PHP and MySQL to automate processes and enhance user engagement.'
        }}
      </p>
    </div>

    <div class="grid grid-cols-10 gap-4 px-4 text-gray-800">
      <div
        v-for="(item, index) in lineOaList"
        :key="`line-${index}`"
        class="col-span-10 md:col-span-2"
      >
        <div
          class="bg-white rounded-lg p-2 cursor-pointer hidden md:block"
          @click="openModal(item.image)"
        >
          <img
            :src="item.image"
            alt="Image"
            loading="lazy"
            class="rounded-md border w-full object-cover"
          />
        </div>
        <div class="bg-white rounded-lg p-2 cursor-pointer md:hidden">
          <img
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
        {{
          locale === 'th'
            ? 'ส่วนนี้เป็นตัวอย่างโปรเจกต์พัฒนา Web Application ที่ผมสร้างขึ้น โดยมุ่งเน้นการพัฒนาแอปพลิเคชันที่สามารถขยายขนาดได้และมีประสิทธิภาพสูง ด้วยการใช้ Nuxt.js สำหรับฝั่ง Frontend และ PHP Slim Framework 4 สำหรับฝั่ง Backend'
            : 'This section showcases my Web Application development projects, where I have built scalable and high-performance applications using Nuxt.js for the frontend and PHP Slim Framework 4 for the backend.'
        }}
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        {{
          locale === 'th'
            ? 'สำหรับฝั่ง Frontend ผมใช้ Nuxt.js ในการพัฒนาแอปพลิเคชันที่รวดเร็ว รองรับ SEO และมอบประสบการณ์การใช้งานที่ลื่นไหล ผมให้ความสำคัญกับการออกแบบ UI/UX ที่ตอบสนองได้ดีและทันสมัย เพื่อให้ผู้ใช้สามารถนำทางได้อย่างสะดวกบนทุกอุปกรณ์'
            : 'For the frontend, I have utilized Nuxt.js to create fast, SEO-friendly, and interactive applications with a seamless user experience. I focus on building responsive UI/UX with modern design principles, ensuring smooth navigation across all devices.'
        }}
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        {{
          locale === 'th'
            ? 'สำหรับฝั่ง Backend ผมพัฒนา API ที่มีความเสถียรและน้ำหนักเบาด้วย PHP Slim Framework 4 เพื่อรองรับการประมวลผลข้อมูล การยืนยันตัวตน และการจัดการตรรกะทางธุรกิจ การเชื่อมต่อกับ MySQL ทำให้สามารถบริหารจัดการฐานข้อมูลได้อย่างปลอดภัยและมีประสิทธิภาพ อีกทั้งยังใช้ RESTful API เพื่อให้การสื่อสารระหว่าง Frontend และ Backend เป็นไปอย่างราบรื่น'
            : 'On the backend, I have developed robust and lightweight APIs using PHP Slim Framework 4, enabling efficient data processing, authentication, and business logic handling. The integration with MySQL ensures secure and optimized database management, while RESTful APIs allow seamless communication between the frontend and backend.'
        }}
      </p>
    </div>

    <div class="grid grid-cols-12 gap-4 px-4 text-gray-800">
      <div
        v-for="(item, index) in webappList"
        :key="`webapp-${index}`"
        class="col-span-12 md:col-span-6 lg:col-span-4"
      >
        <div
          class="bg-white rounded-lg p-2 cursor-pointer hidden md:block"
          @click="openModal(item.image)"
        >
          <img
            :src="item.image"
            alt="Image"
            loading="lazy"
            class="rounded-md border aspect-video object-cover"
          />
        </div>
        <div class="bg-white rounded-lg p-2 cursor-pointer md:hidden">
          <img
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
        {{
          locale === 'th'
            ? 'ส่วนนี้แสดงให้เห็นถึงความเชี่ยวชาญของผมในการใช้ Figma โดยผมนำเครื่องมือที่ทรงพลังของ Figma มาช่วยให้กระบวนการเก็บรวบรวมความต้องการ สร้างระบบออกแบบ (Design System) และทำงานร่วมกับทีมเป็นไปอย่างราบรื่น'
            : 'This section highlights my expertise in Figma, where I utilize its powerful tools to streamline requirement gathering, design system creation, and team collaboration.'
        }}
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        {{
          locale === 'th'
            ? 'ผมใช้ FigJam ในการบันทึกและอัปเดตความต้องการของโปรเจกต์ร่วมกับลูกค้า เพื่อให้แน่ใจว่าทุกฝ่ายเข้าใจเป้าหมายและความคาดหวังอย่างชัดเจน วิธีนี้ช่วยเพิ่มความโปร่งใสและทำให้การพัฒนาเป็นไปตามทิศทางของธุรกิจ'
            : 'I use FigJam to document and update project requirements with clients, ensuring a clear understanding of goals and expectations. This helps in maintaining transparency and aligning development progress with business needs.'
        }}
      </p>
      <p class="max-w-[600px] mx-auto text-white/70">
        {{
          locale === 'th'
            ? 'ในด้านการออกแบบ ผมใช้ Figma’s design board ในการสร้าง Design Systems, User Flows และ UI Components เพื่อให้มั่นใจว่าการออกแบบมีความสม่ำเสมอและสามารถขยายขนาดได้ในทุกโปรเจกต์ นอกจากนี้ ผมยังใช้ Figma เป็นเครื่องมือหลักในการประชุมทีม เพื่อให้การทำงานร่วมกันระหว่างนักออกแบบ นักพัฒนา และผู้เกี่ยวข้องเป็นไปอย่างราบรื่น'
            : 'For design execution, I work extensively with Figma’s design board to create design systems, user flows, and UI components, ensuring consistency and scalability across projects. Additionally, I actively use Figma during team meetings, facilitating smooth collaboration between designers, developers, and stakeholders.'
        }}
      </p>
    </div>

    <div class="grid grid-cols-12 gap-4 px-4 text-gray-800">
      <div
        v-for="(item, index) in designList"
        :key="`design-${index}`"
        class="col-span-12 md:col-span-6"
      >
        <div
          class="bg-white rounded-lg p-2 cursor-pointer hidden md:block"
          @click="openModal(item.image)"
        >
          <img
            :src="item.image"
            alt="Image"
            loading="lazy"
            class="rounded-md border aspect-video object-cover"
          />
        </div>
        <div class="bg-white rounded-lg p-2 cursor-pointer md:hidden">
          <img
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
      <img
        :src="selectedImage"
        alt="Selected Image"
        loading="lazy"
        class="mx-auto shadow-lg w-full rounded-lg"
      />
    </BaseModal>
  </div>
</template>
