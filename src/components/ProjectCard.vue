<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="group relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#0f172a] hover:shadow-xl hover:shadow-slate-900/5 hover:-translate-y-1 overflow-hidden">
    
    <div class="space-y-4">
      <!-- Category Subtitle -->
      <div class="text-xs font-mono text-[#ff2d20] font-extrabold tracking-wider uppercase">
        {{ project.category }}
      </div>

      <!-- System Name (Dark Navy Blue) -->
      <h3 class="text-xl font-extrabold text-[#0f172a] group-hover:text-[#ff2d20] transition-colors leading-tight">
        {{ project.systemName }}
      </h3>

      <!-- System Description (High Contrast Dark Slate) -->
      <p class="text-sm text-slate-800 font-medium leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tech Stack (High Contrast Navy Badges with Pure White Text) -->
      <div class="flex flex-wrap gap-2 pt-1 font-mono text-xs">
        <span 
          v-for="t in project.tech" 
          :key="t" 
          class="px-2.5 py-1 rounded-lg bg-[#0f172a] text-white font-bold tracking-wide shadow-2xs"
        >
          {{ t }}
        </span>
      </div>

    </div>

    <!-- Direct URL Link: Visit System -->
    <div class="pt-5 mt-4 border-t border-slate-200 flex items-center justify-between text-xs">
      <span class="text-slate-700 font-mono text-xs font-semibold">
        Hosted Web Application
      </span>

      <a
        :href="project.url || '#'"
        class="px-4 py-2 rounded-xl bg-[#0f172a] hover:bg-[#ff2d20] text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 group-hover:scale-105"
      >
        <span>Visit System</span>
        <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>

  </div>
</template>
