<script setup>
import { useCharacterStore } from "@/stores/sheet.js";

const character = useCharacterStore();
</script>

<template>
  <section class="name">
    <header class="section-header">
      <h2>Character Name</h2>
    </header>
    <div>
      <input
        type="text"
        :value="character.sheet.name"
        @input="(event) => character.changeSheet('name', event.target.value)"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  flex-wrap: wrap;
}
h2 {
  white-space: nowrap;
}
</style>
