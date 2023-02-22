<script>
import { mapStores } from "pinia";
import vSelect from "vue-select";
import { useCharacterStore } from "@/stores/sheet.js";

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    vSelect,
  },
  computed: {
    ...mapStores(useCharacterStore),
    options() {
      return this.characterStore.sheet.abilities.filter(
        (item) => item.id !== this.id
      );
    },
  },
  methods: {
    handleSwap(event) {
      this.characterStore.swapAbilities(this.id, event.id);
    },
  },
};
</script>

<template>
  <vSelect
    :options="options"
    placeholder="swap with"
    class="ability-swap"
    @option:selected="handleSwap"
  />
</template>

<style>
.ability-swap {
  --vs-search-input-color: none transparent;
  --vs-font-size: 0.9rem;
  --vs-dropdown-option-padding: 0.133rem 0.333rem;
  --vs-dropdown-option--active-bg: var(--vt-c-blue);
  --vs-dropdown-max-height: none;
  margin: -0.5rem 1rem 0;
}
.ability-swap .vs__search::placeholder,
.ability-swap .vs__dropdown-toggle,
.ability-swap .vs__dropdown-menu {
  background: var(--color-heading);
  border: none;
  color: var(--color-background);
}
.ability-swap .vs__clear,
.ability-swap .vs__open-indicator {
  fill: var(--color-background);
}
.ability-swap .vs__dropdown-toggle {
  padding: 0.133rem 0.133rem 0.267rem;
}
.ability-swap .vs__dropdown-option {
  white-space: normal;
  font-size: 0.9rem;
}
</style>
