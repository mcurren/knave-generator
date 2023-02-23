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
    placeholder="Swap"
    class="ability-swap"
    @option:selected="handleSwap"
  />
</template>

<style>
.ability-swap {
  --vs-search-input-color: none transparent;
  --vs-font-size: 0.9rem;
  --vs-dropdown-option-padding: 0.133rem 0.333rem;
  --vs-dropdown-option--active-bg: var(--vt-c-dark-pink);
  --vs-dropdown-option--active-color: var(--vt-c-white);
  --vs-dropdown-max-height: none;
  --vs-dropdown-min-width: 6rem;
  --vs-text-color: #f4f4f4;
  width: var(--vs-dropdown-min-width);
}
.ability-swap .vs__search::placeholder,
.ability-swap .vs__dropdown-toggle,
.ability-swap .vs__dropdown-menu {
  background: var(--vt-c-pink);
  border: none;
  color: var(--vs-text-color);
}
.ability-swap .vs__clear,
.ability-swap .vs__open-indicator {
  fill: var(--vs-text-color);
}
.ability-swap .vs__dropdown-menu {
  width: var(--vs-dropdown-min-width);
}
.ability-swap .vs__dropdown-toggle {
  padding: 0.133rem 0.133rem 0.267rem;
}
.ability-swap .vs__dropdown-option {
  white-space: normal;
  font-size: 0.9rem;
}
</style>
