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

const contactForm = ref({ name: '', email: '', message: '' })
const contactSubmitted = ref(false)

const submitContact = () => {
  if (!contactForm.value.email || !contactForm.value.message) return
  contactSubmitted.value = true
  setTimeout(() => {
    contactSubmitted.value = false
    contactForm.value = { name: '', email: '', message: '' }
  }, 4000)
}

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
                <div class="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-xl aspect-[4/5] sm:aspect-[4/4.5]">
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
                  <p class="font-bold text-[#ff2d20]">Vue / Laravel / NestJS Developer</p>
                  <p class="text-slate-900 font-bold">BSIT Cum Laude (2026)</p>
                  <p class="text-slate-900 font-bold">TESDA NC II</p>
                </div>
              </div>

              <!-- High Contrast Solid Text (No faint gray) -->
              <p class="text-slate-900 text-sm sm:text-base font-medium leading-relaxed">
                23-year-old Information Technology fresh graduate specializing in Vue, Laravel, NestJS, JavaScript, PHP, and Python full-stack web applications, backed by computer systems servicing expertise.
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
            <div v-for="(edu, idx) in profileData.education" :key="idx" class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
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
          <div class="space-y-2 border-b border-slate-200 pb-4">
            <span class="text-xs font-mono text-[#ff2d20] font-extrabold">PORTFOLIO SYSTEMS</span>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
              Hosted Web Applications & Systems
            </h2>
            <p class="text-xs text-slate-900 font-bold font-mono">
              Live hosted systems, capstone machine learning projects, and full-stack enterprise web applications.
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

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <!-- Frameworks -->
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
              <div class="text-xs font-mono font-extrabold text-[#ff2d20] tracking-wider uppercase">FRAMEWORKS</div>
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
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
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
                <li class="flex items-center gap-2">
                  <span class="text-[#0f172a] font-black">•</span>
                  <span>HTML5 & CSS3</span>
                </li>
              </ul>
            </div>

            <!-- Databases & Tools -->
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
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

            <!-- Servicing & Network -->
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs hover:border-[#0f172a] transition-colors">
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

          <div class="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-6 shadow-xs hover:border-[#0f172a] transition-colors">
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <!-- Left Side: Role Details & 486 Hours Badge -->
              <div class="lg:col-span-7 space-y-4">
                <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                  <div>
                    <h3 class="text-xl font-extrabold text-[#0f172a]">Intern – MIS Office</h3>
                    <p class="text-xs sm:text-sm text-slate-900 font-mono font-bold">Caraga State University – Cabadbaran Campus</p>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-mono text-[#ff2d20] font-extrabold block">08/2025 – 12/2025</span>
                    <span class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-emerald-100 text-emerald-900 font-extrabold border border-emerald-300 inline-block mt-1">
                      ✓ 486 Hours Completed
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
                  <li class="flex items-start gap-2">
                    <span class="text-[#ff2d20] font-extrabold">•</span>
                    <span>Assisted in MIS database administration, system log auditing, and campus-wide technical user support.</span>
                  </li>
                </ul>
              </div>

              <!-- Right Side: Certificate of Completion Picture Card -->
              <div class="lg:col-span-5">
                <div 
                  @click="showMisCertModal = true"
                  class="relative group rounded-xl overflow-hidden border border-slate-200 bg-white cursor-pointer hover:border-[#0f172a] transition-all shadow-md aspect-[1.4/1]"
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
              <div class="w-full max-w-4xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4 relative">
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

                <div class="relative border border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-inner flex items-center justify-center">
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
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
              <h3 class="text-base font-extrabold text-[#0f172a]">Web Development</h3>
              <p class="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">Single Page Applications with Vue and REST API backend with Laravel and NestJS.</p>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
              <h3 class="text-base font-extrabold text-[#0f172a]">Hardware & OS Servicing</h3>
              <p class="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">PC assembly, hardware upgrades, Windows OS configuration, and diagnostics.</p>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 shadow-xs hover:border-[#0f172a] transition-colors">
              <h3 class="text-base font-extrabold text-[#0f172a]">Network Servicing</h3>
              <p class="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">TCP/IP addressing, DHCP/DNS configuration, and LAN connectivity testing.</p>
            </div>
          </div>
        </section>

        <!-- SECTION 8: Contact -->
        <section id="contact" class="scroll-mt-24 space-y-6">
          <h2 class="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tight">
            Contact
          </h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <div class="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 shadow-xs">
              <h3 class="text-xl font-extrabold text-[#0f172a]">Jerold M. Amora</h3>
              
              <div class="space-y-3 text-xs sm:text-sm font-mono">
                <div>
                  <span class="text-slate-700 block text-[10px] font-bold">EMAIL</span>
                  <a href="mailto:jeroldash.amora@gmail.com" class="text-[#0f172a] hover:text-[#ff2d20] font-extrabold text-sm sm:text-base">
                    jeroldash.amora@gmail.com
                  </a>
                </div>
                <div>
                  <span class="text-slate-700 block text-[10px] font-bold">PHONE</span>
                  <a href="tel:09243153866" class="text-[#0f172a] hover:text-[#ff2d20] font-extrabold text-sm sm:text-base">
                    09243153866
                  </a>
                </div>
                <div>
                  <span class="text-slate-700 block text-[10px] font-bold">LOCATION</span>
                  <span class="text-[#0f172a] font-extrabold">Cabadbaran City, Agusan del Norte, Philippines</span>
                </div>
              </div>
            </div>

            <form @submit.prevent="submitContact" class="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-xs">
              <div class="text-xs font-extrabold text-[#0f172a] uppercase tracking-wider">SEND MESSAGE</div>

              <input
                v-model="contactForm.email"
                type="email"
                required
                placeholder="Your email address"
                class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 font-medium placeholder-slate-500 focus:outline-none focus:border-[#0f172a]"
              />

              <textarea
                v-model="contactForm.message"
                required
                rows="3"
                placeholder="Your message..."
                class="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 font-medium placeholder-slate-500 focus:outline-none focus:border-[#0f172a]"
              ></textarea>

              <button
                type="submit"
                class="w-full py-3 rounded-xl bg-[#0f172a] hover:bg-[#ff2d20] text-white text-xs sm:text-sm font-bold transition-colors shadow-sm"
              >
                Send Message
              </button>

              <div v-if="contactSubmitted" class="text-[11px] text-emerald-700 font-mono text-center font-extrabold">
                ✓ Message sent successfully!
              </div>
            </form>

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
    <footer class="mt-auto border-t border-slate-200 bg-slate-50 py-6 text-center text-xs text-slate-700 font-mono font-bold">
      © 2026 Jerold M. Amora • Full Stack Web Developer
    </footer>

  </div>
</template>
