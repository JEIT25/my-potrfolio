<script setup>
import { ref } from 'vue'

const props = defineProps({
  cert: {
    type: Object,
    required: true
  }
})

const showModal = ref(false)
</script>

<template>
  <div class="rounded-2xl bg-white border-2 border-slate-300 p-5 space-y-4 hover:border-[#0f172a] transition-all flex flex-col justify-between overflow-hidden group shadow-sm hover:shadow-lg">
    
    <!-- Header -->
    <div class="flex items-start justify-between gap-3">
      <div>
        <span class="text-[11px] font-mono text-slate-700 font-bold block">{{ cert.issuer }}</span>
        <h3 class="text-base font-extrabold text-[#0f172a] mt-0.5 leading-snug">
          {{ cert.title }}
        </h3>
      </div>

      <span class="px-2.5 py-1 rounded text-[11px] font-mono bg-slate-100 text-slate-800 border border-slate-300 flex-shrink-0 font-bold">
        {{ cert.date }}
      </span>
    </div>

    <!-- Certificate Picture Container -->
    <div 
      @click="showModal = true"
      class="relative rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-50 cursor-pointer group-hover:border-[#0f172a] transition-all shadow-xs aspect-[1.4/1]"
    >
      <!-- Certificate Picture -->
      <img
        :src="cert.imagePath"
        :alt="cert.title"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <!-- Description (High Contrast Dark Slate) -->
    <p class="text-xs text-slate-900 font-medium leading-relaxed">
      {{ cert.description }}
    </p>

    <!-- Actions & Official Verification URL -->
    <div class="pt-3 border-t-2 border-slate-200 space-y-2">
      <div class="flex items-center justify-between text-xs">
        <span class="text-[11px] font-mono text-slate-700 font-bold">
          Verified Certificate
        </span>

        <button
          @click="showModal = true"
          class="text-[11px] font-mono font-extrabold text-[#0f172a] hover:text-[#ff2d20] underline"
        >
          Inspect Full Picture
        </button>
      </div>

      <!-- Official Verification URL -->
      <div v-if="cert.verifyUrl && cert.verifyUrl.startsWith('http')" class="pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono">
        <span class="text-slate-600 font-semibold">Verify URL:</span>
        <a 
          :href="cert.verifyUrl" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-[#0f172a] hover:text-[#ff2d20] hover:underline flex items-center gap-1 font-bold truncate max-w-[200px]"
          :title="cert.verifyUrl"
        >
          <span class="truncate">{{ cert.verifyUrl }}</span>
          <svg class="w-3 h-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>

    <!-- Certificate Picture Inspection Modal -->
    <Teleport to="body">
      <div 
        v-if="showModal" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
        @click.self="showModal = false"
      >
        <div class="w-full max-w-4xl bg-white border-2 border-slate-300 rounded-2xl shadow-2xl overflow-hidden p-6 space-y-4 relative">
          <!-- Close Button -->
          <button 
            @click="showModal = false"
            class="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-900 text-xs font-mono font-bold"
          >
            ✕ Close
          </button>

          <div>
            <span class="text-xs font-mono text-[#ff2d20] font-bold uppercase">Official Certificate Image</span>
            <h3 class="text-xl font-extrabold text-[#0f172a]">{{ cert.title }}</h3>
            <p class="text-xs text-slate-700 font-mono font-semibold">{{ cert.issuer }} • Issued {{ cert.date }}</p>
          </div>

          <!-- Full Certificate Image View -->
          <div class="relative border-2 border-slate-200 rounded-xl overflow-hidden bg-slate-50 shadow-inner flex items-center justify-center">
            <img :src="cert.imagePath" :alt="cert.title" class="w-full h-auto object-contain max-h-[75vh]" />
          </div>

          <p class="text-xs text-slate-900 font-medium leading-relaxed">
            {{ cert.description }}
          </p>
        </div>
      </div>
    </Teleport>

  </div>
</template>
