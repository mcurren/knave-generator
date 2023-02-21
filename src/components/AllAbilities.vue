<script setup>
import SingleAbility from "./SingleAbility.vue";
import { useCharacterStore } from "@/stores/sheet.js";

const character = useCharacterStore();

// TODO: add function to switch ability scores
</script>

<template>
  <section class="abilities">
    <header class="section-header">
      <h2>Abilities</h2>
    </header>
    <div class="abilities-grid">
      <SingleAbility
        v-for="(item, index) in character.sheet.abilities"
        :key="index"
        :label="item.label"
        :id="item.id"
        :value="item.modifier"
        @abilityChange="({ id, value }) => character.changeAbility(id, value)"
      />
    </div>
  </section>
</template>

<style scoped>
.abilities {
  margin: 2em 0;
}
.abilities-grid {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
}
@media (min-width: 660px) {
  .abilities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 980px) {
  .abilities-grid {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}
</style>
