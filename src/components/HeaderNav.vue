<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  activeSection: {
    type: String,
    default: 'introduction'
  }
})

const emit = defineEmits(['open-search'])

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const navLinks = [
  { id: 'introduction', label: 'Intro' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'experience', label: 'Experience' },
  { id: 'expertise', label: 'Servicing' },
  { id: 'contact', label: 'Contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="sticky top-0 z-40 w-full transition-all duration-300 border-b"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-slate-200 shadow-md'
        : 'bg-white/80 backdrop-blur-sm border-slate-200'
    ]"
  >
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">

      <!-- Brand Logo (Dark Navy Blue) -->
      <a href="#introduction" class="flex items-center gap-2.5 flex-shrink-0 group cursor-pointer">
        <div class="w-8 h-8 rounded-lg bg-[#0f172a] text-white font-bold font-mono text-xs flex items-center justify-center shadow-sm group-hover:bg-[#ff2d20] transition-colors cursor-pointer">
          JA
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-[#0f172a] text-sm tracking-tight group-hover:text-[#ff2d20] transition-colors cursor-pointer">
            Jerold M. Amora
          </span>
          <span class="text-[10px] text-slate-500 font-mono">Full Stack Web Developer</span>
        </div>
      </a>

      <!-- Desktop Navigation Links (Navy Theme) -->
      <nav class="hidden lg:flex items-center gap-1 font-mono text-xs">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="px-3 py-1.5 rounded-lg transition-colors font-medium cursor-pointer"
          :class="[
            activeSection === link.id
              ? 'bg-[#0f172a] text-white font-bold shadow-sm'
              : 'text-slate-700 hover:text-[#0f172a] hover:bg-slate-100'
          ]"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Right Actions: Search Bar & Mobile Menu -->
      <div class="flex items-center gap-3">
        <!-- ⌘K Search Button -->
        <button
          @click="emit('open-search')"
          class="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 text-xs transition-colors cursor-pointer"
        >
          <svg class="w-3.5 h-3.5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Search</span>
          <kbd class="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-white border border-slate-200 rounded shadow-2xs cursor-pointer">
            ⌘K
          </kbd>
        </button>

        <!-- Mobile Menu Trigger Button -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="lg:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 cursor-pointer"
        >
          <svg class="w-5 h-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

    </div>

    <!-- Mobile Navigation Drawer Menu -->
    <div
      v-if="isMobileMenuOpen"
      class="lg:hidden bg-white border-b border-slate-200 p-4 space-y-2 font-mono text-xs"
    >
      <a
        v-for="link in navLinks"
        :key="link.id"
        :href="`#${link.id}`"
        @click="isMobileMenuOpen = false"
        class="block px-3 py-2 rounded-lg transition-colors cursor-pointer"
        :class="[
          activeSection === link.id
            ? 'bg-[#0f172a] text-white font-bold'
            : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
        ]"
      >
        {{ link.label }}
      </a>
    </div>

  </header>
</template>
