<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import ProjectCard from './components/ProjectCard.vue'
import CertificateCard from './components/CertificateCard.vue'
import CommandPaletteModal from './components/CommandPaletteModal.vue'
import { profileData } from './data/portfolioData.js'

const activeSection = ref('introduction')
const isSearchOpen = ref(false)
const isMobileTocOpen = ref(false)
const showMisCertModal = ref(false)

let observer = null

const handleSectionSelect = (sectionId) => {
  activeSection.value = sectionId
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const handleKeydown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      isSearchOpen.value = !isSearchOpen.value
    }
  }
  window.addEventListener('keydown', handleKeydown)

  const sections = document.querySelectorAll('section[id], div[id]')
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 }
  )

  sections.forEach((sec) => observer.observe(sec))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0f172a] selection:text-white flex flex-col">

    <!-- Top Header Navigation -->
    <HeaderNav
      :active-section="activeSection"
      @open-search="isSearchOpen = true"
      @toggle-mobile-toc="isMobileTocOpen = !isMobileTocOpen"
    />

    <!-- Main Stretched Container -->
    <div class="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 flex justify-center">

      <!-- Main Content Column -->
      <main class="w-full space-y-16">

        <!-- SECTION 1: Editorial Split Intro Layout -->
        <section id="introduction" class="scroll-mt-24 space-y-6">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <!-- Left Side: Graduation Portrait Image Banner -->
            <div class="lg:col-span-6">
              <div class="relative group max-w-[480px] mx-auto lg:mx-0">
                <div class="relative rounded-2xl overflow-hidden border-2 border-slate-300 bg-slate-100 shadow-xl aspect-[4/5] sm:aspect-[4/4.5]">
                  <img
                    src="/jerold.jpg"
                    alt="Jerold M. Amora"
                    class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <!-- Right Side: Editorial Typography Stack & Underlined CTA Link -->
            <div class="lg:col-span-6 space-y-6 text-left">
              <div class="space-y-3">
                <h1 class="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
                  Jerold M. Amora
                </h1>

                <!-- Vertical Specialty Stack (Solid High Contrast Dark Text) -->
                <div class="space-y-2 text-lg sm:text-2xl font-serif text-[#0f172a] leading-snug">
                  <p class="font-bold text-[#ff2d20]">Vue / Laravel / NestJS Web Developer</p>
                  <p class="text-slate-900 font-bold">BSIT Cum Laude (2026)</p>
                  <p class="text-slate-900 font-bold">TESDA NC II</p>
                </div>
              </div>

              <!-- High Contrast Solid Text (Clear, professional bio) -->
              <p class="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
                A 23-year-old Information Technology fresh graduate specializing in full-stack web development with Vue, Laravel, NestJS, PHP, JavaScript, and Python, backed by computer systems servicing expertise.
              </p>

              <!-- Editorial Underlined CTA Links -->
              <div class="pt-2 flex flex-wrap items-center gap-6 text-sm font-semibold">
                <a
                  href="#contact"
                  class="text-[#0f172a] hover:text-[#ff2d20] underline underline-offset-8 font-mono tracking-wide transition-colors font-extrabold text-base"
                >
                  Work with Me →
                </a>
                <a
                  href="#projects"
                  class="text-slate-900 hover:text-[#ff2d20] underline underline-offset-8 font-mono tracking-wide transition-colors font-bold"
                >
                  View Systems →
                </a>
              </div>
            </div>

          </div>
        </section>

        <!-- SECTION 2: Education -->
        <section id="education" class="scroll-mt-24 space-y-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Education & Academic Honors
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div v-for="(edu, idx) in profileData.education" :key="idx" class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="flex items-center justify-between text-xs font-mono">
                <span class="text-[#ff2d20] font-extrabold">{{ edu.honor }}</span>
                <span class="text-slate-900 font-bold">{{ edu.period }}</span>
              </div>
              <h3 class="text-lg font-extrabold text-[#0f172a]">{{ edu.degree }}</h3>
              <p class="text-xs sm:text-sm text-slate-900 font-bold">{{ edu.institution }}</p>
              <p class="text-xs text-slate-900 font-medium pt-1 leading-relaxed">{{ edu.details }}</p>
            </div>
          </div>
        </section>

        <!-- SECTION 3: Hosted Systems & Projects (Stretched 3 Columns) -->
        <section id="projects" class="scroll-mt-24 space-y-8">
          <div class="space-y-2 border-b-2 border-slate-200 pb-4">
            <span class="text-xs font-mono text-[#ff2d20] font-extrabold">PORTFOLIO SYSTEMS</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Hosted Web Applications & Systems
            </h2>
            <p class="text-xs text-slate-900 font-bold font-mono">
              Live hosted systems, capstone machine learning projects, and web applications.
            </p>
          </div>

          <!-- Stretched 3-Column Systems Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            <ProjectCard
              v-for="project in profileData.projects"
              :key="project.id"
              :project="project"
            />
          </div>
        </section>

        <!-- SECTION 4: Technical Skills (Bulleted List Layout) -->
        <section id="skills" class="scroll-mt-24 space-y-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Technical Skills
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <!-- Frameworks and Libraries -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-[#ff2d20] tracking-wider uppercase">FRAMEWORKS AND LIBRARIES</div>
              <ul class="space-y-2 text-sm font-bold text-[#0f172a]">
                <li class="flex items-center gap-2">
                  <span class="text-[#ff2d20] font-black">•</span>
                  <span>Vue</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#ff2d20] font-black">•</span>
                  <span>Laravel</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#ff2d20] font-black">•</span>
                  <span>NestJS</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#ff2d20] font-black">•</span>
                  <span>Tailwind CSS</span>
                </li>
              </ul>
            </div>

            <!-- Languages -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-[#0f172a] tracking-wider uppercase">LANGUAGES</div>
              <ul class="space-y-2 text-sm font-bold text-[#0f172a]">
                <li class="flex items-center gap-2">
                  <span class="text-[#0f172a] font-black">•</span>
                  <span>JavaScript</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#0f172a] font-black">•</span>
                  <span>PHP</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-[#0f172a] font-black">•</span>
                  <span>Python</span>
                </li>
              </ul>
            </div>

            <!-- Others -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-teal-700 tracking-wider uppercase">OTHERS</div>
              <ul class="space-y-2 text-sm font-bold text-[#0f172a]">
                <li class="flex items-center gap-2">
                  <span class="text-teal-700 font-black">•</span>
                  <span>HTML & CSS</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-teal-700 font-black">•</span>
                  <span>RESTful APIs</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-teal-700 font-black">•</span>
                  <span>Pinia & Vue Router</span>
                </li>
              </ul>
            </div>

            <!-- Hosting Platforms -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-emerald-700 tracking-wider uppercase">HOSTING PLATFORMS</div>
              <ul class="space-y-2 text-sm font-bold text-[#0f172a]">
                <li class="flex items-center gap-2">
                  <span class="text-emerald-700 font-black">•</span>
                  <span>Vercel</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-emerald-700 font-black">•</span>
                  <span>Supabase</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-emerald-700 font-black">•</span>
                  <span>Render</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-emerald-700 font-black">•</span>
                  <span>Railway</span>
                </li>
              </ul>
            </div>

            <!-- Databases & Tools -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-blue-700 tracking-wider uppercase">DATABASES & TOOLS</div>
              <ul class="space-y-2 text-sm font-bold text-[#0f172a]">
                <li class="flex items-center gap-2">
                  <span class="text-blue-700 font-black">•</span>
                  <span>MySQL & PostgreSQL</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-700 font-black">•</span>
                  <span>Git & GitHub</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-700 font-black">•</span>
                  <span>VS Code & Postman</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-blue-700 font-black">•</span>
                  <span>Vite & NPM</span>
                </li>
              </ul>
            </div>

            <!-- AI Coding Tools -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-purple-700 tracking-wider uppercase">AI CODING TOOLS</div>
              <ul class="space-y-2 text-sm font-bold text-[#0f172a]">
                <li class="flex items-center gap-2">
                  <span class="text-purple-700 font-black">•</span>
                  <span>Claude</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-700 font-black">•</span>
                  <span>Gemini</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-purple-700 font-black">•</span>
                  <span>DeepSeek</span>
                </li>
              </ul>
            </div>

            <!-- Servicing & Network -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-amber-700 tracking-wider uppercase">SERVICING & NETWORK</div>
              <ul class="space-y-2 text-sm font-bold text-[#0f172a]">
                <li class="flex items-center gap-2">
                  <span class="text-amber-700 font-black">•</span>
                  <span>PC Assembly & OS Config</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-amber-700 font-black">•</span>
                  <span>Hardware Diagnostics</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-amber-700 font-black">•</span>
                  <span>TCP/IP Subnetting</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="text-amber-700 font-black">•</span>
                  <span>DHCP & DNS Setup</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        <!-- SECTION 5: Certifications (Stretched 3 Columns) -->
        <section id="certificates" class="scroll-mt-24 space-y-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Certifications & Credentials
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CertificateCard
              v-for="cert in profileData.certificates"
              :key="cert.id"
              :cert="cert"
            />
          </div>
        </section>

        <!-- SECTION 6: Work Experience with Certificate Preview -->
        <section id="experience" class="scroll-mt-24 space-y-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Work Experience
          </h2>

          <div class="p-6 sm:p-8 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-6 shadow-xs hover:border-[#0f172a] transition-colors">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <!-- Left Side: Role Details & 486 Hours Badge -->
              <div class="lg:col-span-7 space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b-2 border-slate-200 pb-3">
                  <div>
                    <h3 class="text-xl font-extrabold text-[#0f172a]">Intern – MIS Office</h3>
                    <p class="text-xs sm:text-sm text-slate-900 font-mono font-bold">Caraga State University – Cabadbaran Campus</p>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-mono text-[#ff2d20] font-extrabold block">08/2025 – 12/2025</span>
                    <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-100 text-emerald-900 font-extrabold border border-emerald-300 inline-block mt-1">
                      486 Hours Completed
                    </span>
                  </div>
                </div>

                <ul class="space-y-3 text-xs sm:text-sm text-slate-900 font-semibold">
                  <li class="flex items-start gap-2">
                    <span class="text-[#ff2d20] font-extrabold">•</span>
                    <span>Maintained campus network infrastructure and provided hardware & software technical support across university departments.</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-[#ff2d20] font-extrabold">•</span>
                    <span>Configured operating systems, conducted PC hardware diagnostics, and resolved local network connectivity issues.</span>
                  </li>
                </ul>
              </div>

              <!-- Right Side: Certificate of Completion Picture Card -->
              <div class="lg:col-span-5">
                <div
                  @click="showMisCertModal = true"
                  class="relative group rounded-xl overflow-hidden border-2 border-slate-300 bg-white cursor-pointer hover:border-[#0f172a] transition-all shadow-md aspect-[1.4/1]"
                >
                  <img
                    src="/certificates/cert-mis-ojt.png"
                    alt="MIS OJT Certificate of Completion"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/60 to-transparent p-3 text-white flex items-center justify-between text-xs font-mono">
                    <span class="font-extrabold">MIS Certificate of Completion</span>
                    <span class="underline text-amber-300 font-bold">Inspect →</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- MIS OJT Certificate Full Modal Inspection -->
          <Teleport to="body">
            <div
              v-if="showMisCertModal"
              class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
              @click.self="showMisCertModal = false"
            >
              <div class="w-full max-w-4xl bg-white border-2 border-slate-300 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4 relative">
                <button
                  @click="showMisCertModal = false"
                  class="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-mono font-bold"
                >
                  ✕ Close
                </button>

                <div>
                  <span class="text-xs font-mono text-[#ff2d20] font-extrabold uppercase">Official OJT Certificate of Completion</span>
                  <h3 class="text-xl font-extrabold text-[#0f172a]">Management Information System (MIS) Internship</h3>
                  <p class="text-xs text-slate-800 font-mono font-bold">Caraga State University – Cabadbaran Campus • 486 Hours Completed</p>
                </div>

                <div class="relative border-2 border-slate-300 rounded-xl overflow-hidden bg-slate-50 shadow-inner flex items-center justify-center">
                  <img src="/certificates/cert-mis-ojt.png" alt="MIS OJT Certificate of Completion" class="w-full h-auto object-contain max-h-[75vh]" />
                </div>

                <p class="text-xs text-slate-900 font-medium leading-relaxed">
                  Issued on December 22, 2025 at Caraga State University – Cabadbaran Campus in recognition of completing 486 hours of practical training at the MIS Office under SIP Coordinator Engr. Ian Lester A. Romero, MIS Head Ryan O. Cuarez, MSIT, IT Chairperson Mary June M. Palima, MSIT, and Dean Engr. Blondie T. Sanchez.
                </p>
              </div>
            </div>
          </Teleport>
        </section>

        <!-- SECTION 7: Systems Expertise -->
        <section id="expertise" class="scroll-mt-24 space-y-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Systems Expertise
          </h2>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
              <h3 class="text-base font-extrabold text-[#0f172a]">Web Development</h3>
              <p class="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">Single Page Applications with Vue and REST API backend with Laravel and NestJS.</p>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
              <h3 class="text-base font-extrabold text-[#0f172a]">Hardware & OS Servicing</h3>
              <p class="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">PC assembly, hardware upgrades, Windows OS configuration, and diagnostics.</p>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
              <h3 class="text-base font-extrabold text-[#0f172a]">Network Servicing</h3>
              <p class="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">TCP/IP addressing, DHCP/DNS configuration, and LAN connectivity testing.</p>
            </div>
          </div>
        </section>

        <!-- SECTION 8: Direct Contact Information Grid -->
        <section id="contact" class="scroll-mt-24 space-y-6">
          <div class="space-y-2 border-b-2 border-slate-200 pb-4">
            <span class="text-xs font-mono text-[#ff2d20] font-extrabold">DIRECT CONTACT</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Contact & Social Channels
            </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">

            <!-- Email Card -->
            <a
              href="mailto:jeroldash.amora@gmail.com"
              class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] hover:bg-white transition-all cursor-pointer group"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono text-[#ff2d20] font-extrabold tracking-wider uppercase">EMAIL ADDRESS</span>
                <svg class="w-5 h-5 text-slate-700 group-hover:text-[#ff2d20] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="text-base sm:text-lg font-extrabold text-[#0f172a] group-hover:text-[#ff2d20] transition-colors font-mono truncate">
                jeroldash.amora@gmail.com
              </div>
              <p class="text-xs text-slate-700 font-semibold font-mono">Click to send an email ✉</p>
            </a>

            <!-- Phone Card -->
            <a
              href="tel:09243153866"
              class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] hover:bg-white transition-all cursor-pointer group"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono text-[#0f172a] font-extrabold tracking-wider uppercase">PHONE NUMBER</span>
                <svg class="w-5 h-5 text-slate-700 group-hover:text-[#0f172a] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="text-base sm:text-lg font-extrabold text-[#0f172a] font-mono">
                09243153866
              </div>
              <p class="text-xs text-slate-700 font-semibold font-mono">Click to place a call 📞</p>
            </a>

            <!-- LinkedIn Card -->
            <a
              href="https://www.linkedin.com/in/jerold-amora-26233727b/"
              target="_blank"
              rel="noopener noreferrer"
              class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs hover:border-[#0f172a] hover:bg-white transition-all cursor-pointer group"
            >
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono text-blue-700 font-extrabold tracking-wider uppercase">LINKEDIN PROFILE</span>
                <svg class="w-5 h-5 text-blue-700 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
                </svg>
              </div>
              <div class="text-base sm:text-lg font-extrabold text-[#0f172a] group-hover:text-blue-700 transition-colors font-mono truncate">
                linkedin.com/in/jerold-amora
              </div>
              <p class="text-xs text-slate-700 font-semibold font-mono">View official LinkedIn profile ↗</p>
            </a>

            <!-- Location Card -->
            <div class="p-6 rounded-2xl bg-slate-50 border-2 border-slate-300 space-y-3 shadow-xs">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono text-amber-700 font-extrabold tracking-wider uppercase">LOCATION</span>
                <svg class="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="text-base sm:text-lg font-extrabold text-[#0f172a] font-mono">
                Cabadbaran City, Agusan del Norte, Philippines
              </div>
              <p class="text-xs text-slate-700 font-semibold font-mono">Caraga Region (UTC+8)</p>
            </div>

          </div>
        </section>

      </main>

    </div>

    <!-- Command Palette Modal -->
    <CommandPaletteModal
      :is-open="isSearchOpen"
      @close="isSearchOpen = false"
      @select-section="handleSectionSelect"
    />

    <!-- Footer -->
    <footer class="mt-auto border-t-2 border-slate-200 bg-slate-50 py-6 text-center text-xs text-slate-700 font-mono font-bold">
      © 2026 Jerold M. Amora • Full Stack Web Developer
    </footer>

  </div>
</template>
