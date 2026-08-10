<script setup>
import { ref } from 'vue'
import { profileData } from '../data/portfolioData.js'

const capstone = profileData.capstone

const isScanning = ref(false)
const scanResult = ref(null)

const simulateScan = () => {
  isScanning.value = true
  scanResult.value = null
  setTimeout(() => {
    const isAnomaly = Math.random() > 0.5
    scanResult.value = {
      id: `2022-BSIT-${Math.floor(100 + Math.random() * 900)}`,
      time: new Date().toLocaleTimeString(),
      score: isAnomaly ? -0.78 : -0.12,
      isAnomaly
    }
    isScanning.value = false
  }, 500)
}
</script>

<template>
  <div id="capstone" class="scroll-mt-24 space-y-4">
    <div class="space-y-1">
      <div class="text-xs font-mono text-[#ff2d20] font-bold">CAPSTONE SYSTEM PROJECT</div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
        QR Attendance & Isolation Forest Anomaly Detection
      </h2>
    </div>

    <div class="rounded-2xl bg-[#111726] border border-[#1f293d] p-6 sm:p-8 space-y-6">
      <p class="text-slate-300 text-sm leading-relaxed">
        {{ capstone.description }}
      </p>

      <!-- Tech Stack Badges -->
      <div class="flex flex-wrap gap-2">
        <span 
          v-for="tech in capstone.technologies" 
          :key="tech"
          class="px-3 py-1 rounded-md text-xs font-mono bg-[#090d16] text-slate-300 border border-[#1f293d]"
        >
          {{ tech }}
        </span>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div 
          v-for="(feature, idx) in capstone.keyFeatures" 
          :key="idx"
          class="p-4 rounded-xl bg-[#090d16] border border-[#1f293d] text-xs text-slate-300 leading-relaxed"
        >
          {{ feature }}
        </div>
      </div>

      <!-- Interactive Test Trigger -->
      <div class="pt-4 border-t border-[#1f293d] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div class="text-xs text-slate-400 font-mono">
          Interactive Anomaly Detection Model Test
        </div>

        <button
          @click="simulateScan"
          :disabled="isScanning"
          class="px-4 py-2 rounded-lg bg-[#ff2d20] hover:bg-[#e02619] text-white text-xs font-semibold shadow-md transition-all self-start sm:self-auto"
        >
          {{ isScanning ? 'Testing Model...' : 'Simulate Scan Event' }}
        </button>
      </div>

      <!-- Result Banner -->
      <div v-if="scanResult" class="p-4 rounded-xl border text-xs font-mono animate-fade-in" :class="[scanResult.isAnomaly ? 'bg-red-950/20 border-red-500/40 text-red-300' : 'bg-emerald-950/20 border-emerald-500/40 text-emerald-300']">
        <div class="flex items-center justify-between">
          <span class="font-bold">ID: {{ scanResult.id }}</span>
          <span>Score: {{ scanResult.score }}</span>
          <span class="font-bold uppercase">{{ scanResult.isAnomaly ? 'ANOMALY DETECTED' : 'NORMAL SCAN' }}</span>
        </div>
      </div>

    </div>
  </div>
</template>
