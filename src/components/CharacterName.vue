<script setup>
import { useCharacterStore } from "@/stores/sheet.js";

const character = useCharacterStore();
</script>

<template>
  <section class="name">
    <header class="section-header">
      <h2><span class="hide-mobile">Character</span> Name</h2>
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
h2 {
  white-space: nowrap;
}
</style>
