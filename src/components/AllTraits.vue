<script setup>
import SingleTrait from "./SingleTrait.vue";
import { useCharacterStore } from "@/stores/sheet.js";
import { useTraitsStore } from "@/stores/tables/traits.js";

const character = useCharacterStore();
const traits = useTraitsStore();

// TODO: add function to switch ability scores
</script>

<template>
  <section class="traits">
    <header class="section-header">
      <h2>Traits</h2>
    </header>
    <div>
      <SingleTrait
        v-for="(item, index) in character.sheet.traits"
        :key="index"
        :value="item.value"
        :table="traits[item.id]"
        @traitChange="({ id, value }) => character.changeTrait(id, value)"
      />
    </div>
  </section>
</template>

<style scoped>
section > div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
