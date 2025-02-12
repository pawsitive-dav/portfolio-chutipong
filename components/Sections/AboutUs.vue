<script setup>
import {
  frontendTechStack,
  backendTechStack,
  devopsTechStack,
  toolsTechStack,
} from '~/composables/tech-stack';

const { t, locale } = useI18n();

const copied = ref(false);

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

const formatTime = () => {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Bangkok',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
};

const formatDate = () => {
  const date = new Date().toLocaleDateString('en-US', {
    timeZone: 'Asia/Bangkok',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  });

  const [weekday, month, day, year] = date.split(' ');

  return `${weekday.replace(/,/g, '')} ${day.replace(
    /,/g,
    ''
  )} ${month} ${year}`;
};

const currentTime = ref(formatTime());
const currentDate = ref(formatDate());

let timer;
onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = formatTime();
    currentDate.value = formatDate();
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<template>
  <div class="container my-24 cursor-default relative">
    <img
      src="/assets/logo-overlay.png"
      alt="Logo Overlay"
      loading="lazy"
      class="absolute left-0 top-0 bottom-0 right-0 mx-auto hidden lg:block w-full opacity-50"
    />

    <div class="grid grid-cols-12 px-4 relative z-10">
      <div class="col-span-12 text-center lg:col-span-4 lg:text-left">
        <div class="text-7xl lg:text-7xl font-thin">
          {{ t('hi') }}
        </div>
        <div class="text-6xl lg:text-7xl font-thin">
          {{ locale === 'th' ? 'ผมชื่อ' : 'I’m' }}
          <b>{{ locale === 'th' ? 'ป่าน' : 'Phan' }}</b>
        </div>
        <div
          class="p-4 rounded-md border-2 border-gray-800 bg-gray-800/50 w-fit text-center mt-6 hidden lg:block"
        >
          <div class="text-5xl font-light">
            {{ currentTime }}
          </div>
          <div class="text-white/70 font-light">{{ currentDate }}</div>
        </div>
      </div>

      <div class="col-span-12 lg:col-span-3 relative">
        <img
          src="/assets/phan.png"
          alt="Chutipong Kritakow"
          loading="lazy"
          class="absolute bottom-[-40px] left-[-250px] min-w-[450px] hidden lg:block"
        />
        <img
          src="/assets/phan-avatar.png"
          alt="Chutipong Kritakow"
          loading="lazy"
          width="250"
          class="mx-auto my-4 lg:hidden"
        />
      </div>

      <!-- About Us -->
      <div class="col-span-12 lg:col-span-4">
        <h2 class="text-6xl font-light">{{ t('about') }}</h2>
        <div class="text-white/70 leading-relaxed space-y-6 font-light">
          <p>
            {{
              locale === 'th'
                ? 'ผมเป็น Fullstack Developer ที่เชี่ยวชาญด้าน Frontend Development สนุกกับการพัฒนาเว็บแอปพลิเคชันที่ทำงานได้ดีและใช้งานง่าย ด้วยความเชี่ยวชาญใน JavaScript, Vue.js, Nuxt.js, PHP และ MySQL ผมพัฒนาเว็บแอปพลิเคชันที่ทำงานได้ลื่นไหล รองรับทุกอุปกรณ์ และมอบประสบการณ์ที่ดีให้กับผู้ใช้งาน'
                : 'I am a Fullstack Developer specializing in Frontend Development, passionate about building efficient and user-friendly web applications. With expertise in JavaScript, Vue.js, Nuxt.js, PHP, and MySQL, I develop high-performance, responsive web applications that deliver seamless user experiences.'
            }}
          </p>
          <p>
            {{
              locale === 'th'
                ? 'ด้วยประสบการณ์ด้าน UX/UI Design กว่า 3 ปี ผมให้ความสำคัญกับการออกแบบที่เน้นผู้ใช้งานเป็นหลัก เพื่อสร้างอินเทอร์เฟซที่ดูดี ใช้งานง่าย และตอบโจทย์พฤติกรรมของผู้ใช้ได้ดีที่สุด'
                : 'With 3 years of experience in UX/UI Design, I focus on user-centered design to create visually appealing and intuitive interfaces that align with user behavior.'
            }}
          </p>
          <p>
            {{
              locale === 'th'
                ? 'ผมมีความเข้าใจในแนวทางการทำงานแบบ Scrum Agile เป็นอย่างดี และสามารถช่วยปรับปรุงกระบวนการทำงานให้ทีมทำงานได้อย่างมีประสิทธิภาพมากขึ้น'
                : 'I have a strong understanding of Scrum Agile methodologies and contribute to workflow optimization to enhance team efficiency.'
            }}
          </p>
          <p>
            {{
              locale === 'th'
                ? 'ผมชอบเรียนรู้เทคโนโลยีใหม่ๆ และพร้อมนำมาประยุกต์ใช้กับการพัฒนา เพื่อให้ได้ผลลัพธ์ที่ดีที่สุด'
                : 'I am always eager to explore new technologies and integrate them into development processes for optimal performance.'
            }}
          </p>
          <p>
            {{
              locale === 'th'
                ? 'ผมติดตามเทรนด์เทคโนโลยีและการออกแบบใหม่ๆ อยู่เสมอ เพื่อให้แน่ใจว่าสิ่งที่ผมพัฒนายังคงทันสมัย น่าสนใจ และตอบโจทย์ความต้องการของลูกค้า'
                : 'I stay updated on the latest technology and design trends to ensure that my work remains innovative, modern, and aligned with customer needs.'
            }}
          </p>
          <p class="font-medium">
            {{
              locale === 'th'
                ? '📌 ผมสนใจในการพัฒนาเว็บแอปพลิเคชันที่ไม่เพียงแค่สวยงาม แต่ยังให้ประสบการณ์การใช้งานที่ยอดเยี่ยมสำหรับผู้ใช้!'
                : '📌 I am passionate about crafting web applications that are not only visually stunning but also deliver exceptional user experiences!'
            }}
          </p>

          <div class="border-t border-white/20"></div>

          <p>MBTI : <span class="tracking-widest font-bold">INFJ</span></p>

          <div
            class="col-span-10 lg:col-span-4 space-y-4 text-center lg:text-left"
          >
            <div
              class="flex items-center lg:ml-0 gap-4 w-fit border border-gray-700 rounded bg-gray-800 p-1"
            >
              <LucideMail :size="18" class="ml-2 text-white/80" />
              <div class="tracking-widest text-white/80 cursor-text">
                ichu.dev@gmail.com
              </div>
              <div
                @click="copyToClipboard('ichu.dev@gmail.com')"
                class="bg-white text-gray-900 w-[80px] text-center font-normal capitalize px-2 py-1 rounded text-sm cursor-pointer hover:bg-opacity-90 transition duration-300"
              >
                {{ copied ? t('copied') : t('copy') }}
              </div>
            </div>

            <div class="flex items-center lg:justify-start gap-4">
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
                  <img
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

      <div
        class="col-span-12 max-w-[1000px] mx-auto bg-gray-950 mt-8 z-10 rounded-md p-6 border border-gray-700 font-light"
      >
        <h2 class="text-6xl font-semibold">Tech Stack</h2>

        <div class="border-t border-white/20 mb-4"></div>

        <!-- Frontend Technologies -->
        <div>
          <div class="mb-4 space-y-4 leading-relaxed">
            <h3 class="text-2xl">✅ Frontend Technologies</h3>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'ผมเชี่ยวชาญด้าน Frontend Development ออกแบบและพัฒนา UI ที่มีความโต้ตอบสูง รองรับทุกอุปกรณ์ และดูสวยงาม ด้วยความเชี่ยวชาญใน JavaScript (ES6+), TypeScript, Vue.js, Nuxt.js, React.js, Next.js, HTML5, CSS3 และ Tailwind CSS ทำให้ผมสามารถสร้างเว็บแอปพลิเคชันที่ทันสมัยและขยายขนาดได้อย่างมีประสิทธิภาพ'
                  : 'I specialize in Frontend Development, crafting highly interactive, responsive, and visually appealing user interfaces. My expertise lies in JavaScript (ES6+), TypeScript, Vue.js, Nuxt.js, React.js, Next.js, HTML5, CSS3, and Tailwind CSS, allowing me to build scalable and modern web applications.'
              }}
            </p>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'ผมให้ความสำคัญกับการสร้างประสบการณ์ผู้ใช้ (UX) ที่ลื่นไหล และปรับแต่งประสิทธิภาพของเว็บไซต์ให้ทำงานได้อย่างรวดเร็ว พร้อมทั้งรองรับการใช้งานบนทุกเบราว์เซอร์และเป็นมิตรกับการเข้าถึง ผมติดตามเทรนด์เทคโนโลยีด้าน Frontend และแนวทางการออกแบบล่าสุดอยู่เสมอ เพื่อพัฒนาโซลูชันดิจิทัลที่สร้างสรรค์และใช้งานง่าย'
                  : 'I focus on delivering seamless user experiences (UX) and optimizing web performance while ensuring cross-browser compatibility and accessibility. I stay up-to-date with the latest frontend technologies and design trends to create innovative and intuitive digital solutions.'
              }}
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(item, index) in frontendTechStack"
              :key="`frontend-${index}`"
              class="col-span-3 md:col-span-1 p-4 rounded-md bg-gray-900 border border-gray-800 space-y-4"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="item.logo"
                  :alt="item.name"
                  loading="lazy"
                  class="aspect-square w-[40px] h-[40px]"
                />
                <div class="flex-1 space-y-2">
                  <h3>{{ item.name }}</h3>
                  <BaseSkillRate :rating="item.rate" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend Technologies -->
        <div class="mt-12">
          <div class="mb-4 space-y-4 leading-relaxed">
            <h3 class="text-2xl">✅ Backend Technologies</h3>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'แม้ว่าความเชี่ยวชาญหลักของผมจะอยู่ที่ Frontend Development แต่ผมก็มีประสบการณ์ที่มั่นคงด้าน Backend Technologies ในการพัฒนาและจัดการเว็บแอปพลิเคชันให้มีประสิทธิภาพ ขยายขนาดได้ และมีความปลอดภัย ผมมีความชำนาญใน Node.js, Express.js, PHP, Python, RESTful API และระบบยืนยันตัวตน (JWT/OAuth) ซึ่งช่วยให้สามารถพัฒนา logic ฝั่งเซิร์ฟเวอร์ จัดการ API และบริหารฐานข้อมูลได้อย่างมีประสิทธิภาพ'
                  : 'While my primary expertise lies in Frontend Development, I also have solid experience in Backend Technologies to build and manage efficient, scalable, and secure web applications. I am proficient in Node.js, Express.js, PHP, Python, RESTful API, and Authentication (JWT/OAuth), which allows me to develop robust server-side logic, handle API integrations, and manage databases efficiently.'
              }}
            </p>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'ผมให้ความสำคัญกับการเพิ่มประสิทธิภาพของ Backend การรักษาความปลอดภัยในการยืนยันตัวตน ความเสถียรของ API และการจัดการฐานข้อมูล ผมยึดมั่นในการออกแบบ RESTful API ตามมาตรฐานสากล รักษาความปลอดภัยของระบบยืนยันตัวตน และโครงสร้างฐานข้อมูลเพื่อให้แน่ใจว่าการสื่อสารระหว่าง Frontend และ Backend ทำงานได้อย่างราบรื่น'
                  : 'I focus on optimizing backend performance, ensuring secure authentication, API reliability, and database efficiency. I follow best practices in RESTful API design, authentication security, and database structuring to ensure smooth communication between the frontend and backend.'
              }}
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(item, index) in backendTechStack"
              :key="`backend-${index}`"
              class="col-span-3 md:col-span-1 p-4 rounded-md bg-gray-900 border border-gray-800 space-y-4"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="item.logo"
                  :alt="item.name"
                  loading="lazy"
                  class="aspect-square w-[40px] h-[40px]"
                />
                <div class="flex-1 space-y-2">
                  <h3>{{ item.name }}</h3>
                  <BaseSkillRate :rating="item.rate" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Database & Storage -->
        <div class="mt-12">
          <div class="mb-4 space-y-4 leading-relaxed">
            <h3 class="text-2xl">✅ Database & Storage</h3>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'ผมมีความเชี่ยวชาญในการออกแบบและปรับแต่งฐานข้อมูล MySQL เพื่อรองรับเว็บแอปพลิเคชันที่สามารถขยายขนาดได้และมีประสิทธิภาพสูง ผมชำนาญในการเขียนคำสั่ง SQL ที่ซับซ้อน การทำดัชนี (Indexing) การทำ Database Normalization และการปรับจูนประสิทธิภาพฐานข้อมูล เพื่อให้มั่นใจได้ว่าข้อมูลมีความถูกต้องและสามารถดึงข้อมูลได้อย่างรวดเร็ว'
                  : 'I have strong expertise in MySQL, specializing in designing and optimizing relational databases for scalable and efficient web applications. I am proficient in writing complex SQL queries, indexing, database normalization, and performance tuning, ensuring data integrity and fast retrieval.'
              }}
            </p>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'นอกจาก MySQL แล้ว ผมยังมีประสบการณ์ในการใช้งาน MongoDB และ Firebase Firestore ทำให้สามารถจัดการฐานข้อมูลแบบ NoSQL สำหรับแอปพลิเคชันที่ต้องการทำงานแบบเรียลไทม์และมีโครงสร้างข้อมูลที่ยืดหยุ่น ผมให้ความสำคัญกับความปลอดภัยของฐานข้อมูล การปรับแต่งประสิทธิภาพของ Query และการจัดเก็บข้อมูลให้มีประสิทธิภาพสูงสุด เพื่อให้แน่ใจว่าการสื่อสารระหว่าง Frontend และ Backend เป็นไปอย่างราบรื่น'
                  : 'In addition to MySQL, I have experience working with MongoDB and Firebase Firestore, enabling me to manage NoSQL databases for real-time applications and flexible data structures. I focus on database security, query optimization, and efficient data storage to ensure seamless communication between the frontend and backend.'
              }}
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(item, index) in databaseTechStack"
              :key="`database-${index}`"
              class="col-span-3 md:col-span-1 p-4 rounded-md bg-gray-900 border border-gray-800 space-y-4"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="item.logo"
                  :alt="item.name"
                  loading="lazy"
                  class="aspect-square w-[40px] h-[40px]"
                />
                <div class="flex-1 space-y-2">
                  <h3>{{ item.name }}</h3>
                  <BaseSkillRate :rating="item.rate" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- DevOps -->
        <div class="mt-12">
          <div class="mb-4 space-y-4 leading-relaxed">
            <h3 class="text-2xl">✅ DevOps</h3>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'ผมมีความรู้ระดับกลางด้าน DevOps & Deployment โดยเน้นการใช้งาน Docker, Git & GitHub, NGINX, Apache และ Jenkins ผมมีประสบการณ์ในการคอนเทนเนอร์ไรซ์แอปพลิเคชันด้วย Docker ตั้งค่า CI/CD pipelines ด้วย Jenkins และกำหนดค่าเซิร์ฟเวอร์เว็บด้วย NGINX และ Apache'
                  : 'I have intermediate proficiency in DevOps & Deployment, focusing on Docker, Git & GitHub, NGINX, Apache, and Jenkins. My experience includes containerizing applications with Docker, setting up CI/CD pipelines using Jenkins, and configuring NGINX and Apache for web server deployment.'
              }}
            </p>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'ผมสามารถทำงานร่วมกับระบบควบคุมเวอร์ชัน (Git) ได้อย่างคล่องตัว เพื่อให้การทำงานเป็นทีมและการจัดการโค้ดเป็นไปอย่างมีประสิทธิภาพ แม้ว่าผมอาจจะไม่ใช่ผู้เชี่ยวชาญด้าน DevOps แต่ก็สามารถจัดการเซิร์ฟเวอร์ อัตโนมัติการ Deploy และแก้ไขปัญหาพื้นฐานของ DevOps ได้ เพื่อให้มั่นใจว่าเว็บแอปพลิเคชันทำงานได้อย่างราบรื่นและเสถียร'
                  : 'I am comfortable working with version control (Git), ensuring efficient collaboration and code management. While I may not be an expert, I can effectively manage server environments, automate deployments, and troubleshoot basic DevOps challenges to ensure smooth and reliable web application performance.'
              }}
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(item, index) in devopsTechStack"
              :key="`devops-${index}`"
              class="col-span-3 md:col-span-1 p-4 rounded-md bg-gray-900 border border-gray-800 space-y-4"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="item.logo"
                  :alt="item.name"
                  loading="lazy"
                  class="aspect-square w-[40px] h-[40px]"
                />
                <div class="flex-1 space-y-2">
                  <h3>{{ item.name }}</h3>
                  <BaseSkillRate :rating="item.rate" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools & Soft Skills -->
        <div class="mt-12">
          <div class="mb-4 space-y-4 leading-relaxed">
            <h3 class="text-2xl">✅ Tools & Soft Skills</h3>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'นอกจากความเชี่ยวชาญทางเทคนิคแล้ว ผมยังมีทักษะในการใช้เครื่องมือต่างๆ ที่ช่วยเพิ่มประสิทธิภาพในการทำงานและการทำงานร่วมกัน ผมสามารถใช้ Postman และ Swagger ในการทดสอบและจัดทำเอกสาร API ใช้ Figma สำหรับออกแบบ UI/UX และใช้ Jira & Notion เพื่อจัดการโปรเจกต์และปรับปรุงกระบวนการทำงาน'
                  : 'In addition to my technical expertise, I am proficient in various development tools and soft skills that enhance my productivity and collaboration. I am skilled in using Postman and Swagger for API testing and documentation, Figma for UI/UX design, and Jira & Notion for project management and workflow optimization.'
              }}
            </p>
            <p class="text-white/70">
              {{
                locale === 'th'
                  ? 'ผมทำงานตามหลักการ Agile & Scrum เพื่อให้การทำงานร่วมกับทีมพัฒนาเป็นไปอย่างราบรื่น นอกจากนี้ ผมยังมีความชำนาญในการใช้ VS Code และ IntelliJ IDEA เพื่อให้การเขียนโค้ดเป็นระบบและมีประสิทธิภาพ รวมถึงใช้เครื่องมือ AI อย่าง ChatGPT และ Google Gemini เพื่อช่วยแก้ปัญหาและเพิ่มประสิทธิภาพในการเรียนรู้'
                  : 'I follow Agile & Scrum methodologies, ensuring smooth collaboration in development teams. I am also highly proficient in VS Code and IntelliJ IDEA, which allow me to maintain a clean and efficient coding workflow. Additionally, I leverage AI-powered tools like ChatGPT and Google Gemini to streamline problem-solving and enhance my learning process.'
              }}
            </p>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div
              v-for="(item, index) in toolsTechStack"
              :key="`devops-${index}`"
              class="col-span-3 md:col-span-1 p-4 rounded-md bg-gray-900 border border-gray-800 space-y-4"
            >
              <div class="flex items-center gap-4">
                <img
                  :src="item.logo"
                  :alt="item.name"
                  loading="lazy"
                  class="aspect-square w-[40px] h-[40px]"
                />
                <div class="flex-1 space-y-2">
                  <h3>{{ item.name }}</h3>
                  <BaseSkillRate :rating="item.rate" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
