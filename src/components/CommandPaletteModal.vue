<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close', 'select-section'])

const searchQuery = ref('')

const searchItems = [
  { id: 'introduction', title: 'Introduction & Profile', category: 'Section', subtitle: 'Overview of Jerold M. Amora, BSIT Cum Laude' },
  { id: 'education', title: 'Education & Academic Honors', category: 'Education', subtitle: 'Cum Laude at CSU Cabadbaran & CIT Senior High Honors' },
  { id: 'projects', title: 'Hosted Web Applications & Systems', category: 'Projects', subtitle: 'Live hosted systems, Capstone ML project & Web Applications' },
  { id: 'skills', title: 'Technical Skills', category: 'Skills', subtitle: 'Vue 3, Laravel 12, Nest.js, PHP, JavaScript, MySQL, Git' },
  { id: 'certificates', title: 'Certifications', category: 'Certificates', subtitle: 'Meta Coursera JavaScript, Git, Front-End & TESDA NC II' },
  { id: 'experience', title: 'Work Experience', category: 'Experience', subtitle: 'Intern - MIS Office, CSU Cabadbaran Campus' },
  { id: 'expertise', title: 'Servicing & Diagnostics', category: 'Expertise', subtitle: 'PC Assembly, OS Installation, TCP/IP Network Diagnostics' },
  { id: 'contact', title: 'Contact & Connect', category: 'Contact', subtitle: 'Email: jeroldash.amora@gmail.com | Phone: 09243153866' }
]

const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) return searchItems
  const query = searchQuery.value.toLowerCase()
  return searchItems.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.category.toLowerCase().includes(query) ||
    item.subtitle.toLowerCase().includes(query)
  )
})

const selectItem = (id) => {
  emit('select-section', id)
  emit('close')
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <div 
      v-if="isOpen" 
      class="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in"
      @click.self="emit('close')"
    >
      <div class="w-full max-w-xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        
        <!-- Search Input Bar -->
        <div class="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50">
          <svg class="w-5 h-5 text-[#0f172a]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search sections, skills, capstone, certs..."
            class="w-full bg-transparent text-slate-900 placeholder-slate-400 focus:outline-none text-sm font-sans"
            autofocus
          />
          <kbd class="px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-white border border-slate-200 rounded">
            ESC
          </kbd>
        </div>

        <!-- Search Results List -->
        <div class="p-2 overflow-y-auto divide-y divide-slate-100 space-y-1">
          <div v-if="filteredItems.length === 0" class="p-6 text-center text-slate-500 text-xs font-mono">
            No matching results found for "{{ searchQuery }}"
          </div>

          <button
            v-for="item in filteredItems"
            :key="item.id"
            @click="selectItem(item.id)"
            class="w-full text-left p-3 rounded-xl hover:bg-slate-100 transition-colors flex items-start justify-between gap-3 group"
          >
            <div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-sm text-[#0f172a] group-hover:text-[#ff2d20] transition-colors">
                  {{ item.title }}
                </span>
                <span class="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200 text-slate-700 font-semibold">
                  {{ item.category }}
                </span>
              </div>
              <p class="text-xs text-slate-500 mt-0.5 line-clamp-1">
                {{ item.subtitle }}
              </p>
            </div>

            <svg class="w-4 h-4 text-slate-400 group-hover:text-[#0f172a] transition-colors flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Footer -->
        <div class="px-4 py-2 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Jerold M. Amora Portfolio Search</span>
          <span>Press ESC to exit</span>
        </div>

      </div>
    </div>
  </Teleport>
</template>
