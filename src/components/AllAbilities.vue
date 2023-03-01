<script>
import { mapStores } from "pinia";
import { useCharacterStore } from "@/stores/sheet.js";
import SwapAbilities from "@/components/SwapAbilities.vue";
import SingleAbility from "@/components/SingleAbility.vue";

export default {
  computed: {
    ...mapStores(useCharacterStore),
    abilities() {
      return this.characterStore.sheet.abilities;
    },
    canSwap() {
      return this.characterStore.sheet.canSwapAbility;
    },
  },
  components: {
    SingleAbility,
    SwapAbilities,
  },
};
</script>

<template>
  <section class="abilities">
    <header class="section-header">
      <h2>Abilities</h2>
      <SwapAbilities />
    </header>
    <div class="abilities-grid">
      <SingleAbility
        v-for="(item, index) in abilities"
        :key="index"
        :label="item.label"
        :id="item.id"
        :value="item.bonus"
        :canSwap="canSwap"
        @abilityChange="
          ({ id, value }) => this.characterStore.changeAbility(id, value)
        "
      />
    </div>
  </section>
</template>

<style scoped>
.abilities {
  margin: 2em 0;
}
@media (min-width: 65.333rem) {
  .abilities header {
    display: flex;
    justify-content: space-between;
  }
}
.abilities-grid {
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
}
@media (min-width: 44rem) {
  .abilities-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (min-width: 65.333rem) {
  .abilities-grid {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}
@media print {
  .abilities-grid {
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
  }
}
</style>
