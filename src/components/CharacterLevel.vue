<script setup>
import { useCharacterStore } from "@/stores/sheet.js";

const character = useCharacterStore();
</script>

<template>
  <section class="level">
    <header class="section-header">
      <h2>Level</h2>
    </header>
    <div>
      <input
        type="number"
        min="1"
        max="10"
        :value="character.sheet.level"
        @input="
          (event) =>
            character.changeSheet('level', parseInt(event.target.value))
        "
      />
    </div>
  </section>
</template>

<style scoped></style>
