<script setup>
import {
  frontendTechStack,
  backendTechStack,
  devopsTechStack,
  toolsTechStack,
} from '~/composables/tech-stack';

const { t } = useI18n();

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

    <div class="grid grid-cols-12 px-4">
      <div class="col-span-12 text-center lg:col-span-4 lg:text-left">
        <div class="text-7xl lg:text-7xl font-thin">Hi~</div>
        <div class="text-6xl lg:text-7xl font-thin">I’m <b>Phan</b></div>
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
        <h2 class="text-6xl font-light">About Us</h2>
        <div class="text-white/70 leading-relaxed space-y-6 font-light">
          <p>
            I am a <b>Fullstack Developer</b> specializing in
            <b>Frontend Development</b>, passionate about building efficient and
            user-friendly web applications. With expertise in
            <b>JavaScript, Vue.js, Nuxt.js, PHP, and MySQL</b>, I develop
            high-performance, responsive web applications that deliver seamless
            user experiences.
          </p>
          <p>
            With <b>3 years of experience in UX/UI Design</b>, I focus on
            <b>user-centered design</b> to create visually appealing and
            intuitive interfaces that align with user behavior.
          </p>
          <p>
            I have a strong understanding of <b>Scrum Agile</b> methodologies
            and contribute to workflow optimization to enhance team efficiency.
            I am always eager to <b>explore new technologies</b> and integrate
            them into development processes for optimal performance.
          </p>
          <p>
            I stay updated on the latest <b>technology and design trends</b> to
            ensure that my work remains innovative, modern, and aligned with
            customer needs.
          </p>
          <p class="font-medium">
            📌 I am passionate about crafting web applications that are not only
            visually stunning but also deliver exceptional user experiences!
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
                {{ copied ? 'Copied!' : 'Copy' }}
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
              I specialize in Frontend Development, crafting highly interactive,
              responsive, and visually appealing user interfaces. My expertise
              lies in JavaScript (ES6+), TypeScript, Vue.js, Nuxt.js, React.js,
              Next.js, HTML5, CSS3, and Tailwind CSS, allowing me to build
              scalable and modern web applications.
            </p>
            <p class="text-white/70">
              I focus on delivering seamless user experiences (UX) and
              optimizing web performance while ensuring cross-browser
              compatibility and accessibility. I stay up-to-date with the latest
              frontend technologies and design trends to create innovative and
              intuitive digital solutions.
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
              While my primary expertise lies in Frontend Development, I also
              have solid experience in Backend Technologies to build and manage
              efficient, scalable, and secure web applications. I am proficient
              in Node.js, Express.js, PHP, Python, RESTful API, and
              Authentication (JWT/OAuth), which allows me to develop robust
              server-side logic, handle API integrations, and manage databases
              efficiently.
            </p>
            <p class="text-white/70">
              I focus on optimizing backend performance, ensuring secure
              authentication, API reliability, and database efficiency. I follow
              best practices in RESTful API design, authentication security, and
              database structuring to ensure smooth communication between the
              frontend and backend.
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
              I have strong expertise in MySQL, specializing in designing and
              optimizing relational databases for scalable and efficient web
              applications. I am proficient in writing complex SQL queries,
              indexing, database normalization, and performance tuning, ensuring
              data integrity and fast retrieval.
            </p>
            <p class="text-white/70">
              In addition to MySQL, I have experience working with MongoDB and
              Firebase Firestore, enabling me to manage NoSQL databases for
              real-time applications and flexible data structures. I focus on
              database security, query optimization, and efficient data storage
              to ensure seamless communication between the frontend and backend.
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
              I have intermediate proficiency in DevOps & Deployment, focusing
              on Docker, Git & GitHub, NGINX, Apache, and Jenkins. My experience
              includes containerizing applications with Docker, setting up CI/CD
              pipelines using Jenkins, and configuring NGINX and Apache for web
              server deployment.
            </p>
            <p class="text-white/70">
              I am comfortable working with version control (Git), ensuring
              efficient collaboration and code management. While I may not be an
              expert, I can effectively manage server environments, automate
              deployments, and troubleshoot basic DevOps challenges to ensure
              smooth and reliable web application performance.
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
              In addition to my technical expertise, I am proficient in various
              development tools and soft skills that enhance my productivity and
              collaboration. I am skilled in using Postman and Swagger for API
              testing and documentation, Figma for UI/UX design, and Jira &
              Notion for project management and workflow optimization.
            </p>
            <p class="text-white/70">
              I follow Agile & Scrum methodologies, ensuring smooth
              collaboration in development teams. I am also highly proficient in
              VS Code and IntelliJ IDEA, which allow me to maintain a clean and
              efficient coding workflow. Additionally, I leverage AI-powered
              tools like ChatGPT and Google Gemini to streamline problem-solving
              and enhance my learning process.
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
