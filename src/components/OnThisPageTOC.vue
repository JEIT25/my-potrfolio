<script setup>
import { ref } from 'vue'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'introduction'
  }
})

const copied = ref(false)

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'capstone', label: 'Capstone Project' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'expertise', label: 'Systems Expertise' },
  { id: 'certificates', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
]

const copyAsMarkdown = () => {
  const text = `# JEROLD M. AMORA
Full Stack Web Developer | Fresh Graduate (Cum Laude)
Email: jeroldash.amora@gmail.com | Phone: 09243153866

BSIT Cum Laude graduate (CSU Cabadbaran Campus 2026) equipped with Vue 3, Laravel 12, Nest.js, PHP, JavaScript, and TESDA NC II Computer System Servicing certification.
`
  navigator.clipboard.writeText(text).then(() => {
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  })
}
</script>

<template>
  <nav aria-label="On this page navigation" class="w-48 flex-shrink-0 text-xs">
    <div class="sticky top-24 space-y-5">

      <!-- Top Action: Copy as Markdown -->
      <button
        @click="copyAsMarkdown"
        class="w-full py-2 px-3 rounded-lg bg-[#111726] hover:bg-[#161e2e] border border-[#1f293d] text-slate-300 hover:text-white transition-colors text-[11px] font-medium flex items-center justify-between group"
      >
        <span>{{ copied ? 'Copied Markdown' : 'Copy as markdown' }}</span>
        <svg v-if="!copied" class="w-3.5 h-3.5 text-slate-400 group-hover:text-[#ff2d20]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
        </svg>
        <span v-else class="text-[#42b883] font-bold text-[10px]">✓</span>
      </button>

      <!-- TOC Header -->
      <div class="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
        On this page
      </div>

      <!-- Section Links -->
      <ul class="space-y-2 border-l border-[#1f293d] pl-3">
        <li v-for="item in sections" :key="item.id">
          <a
            :href="`#${item.id}`"
            class="block py-0.5 text-xs transition-colors"
            :class="[
              activeSection === item.id
                ? 'text-[#ff2d20] font-bold -ml-3 pl-3 border-l-2 border-[#ff2d20]'
                : 'text-slate-400 hover:text-slate-200'
            ]"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>
