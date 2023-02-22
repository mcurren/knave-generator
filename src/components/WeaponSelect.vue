<script>
import vSelect from "vue-select";
import { mapStores } from "pinia";
import { useCharacterStore } from "@/stores/sheet.js";
import { useStartingGearStore } from "@/stores/tables/startingGear.js";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(useCharacterStore, useStartingGearStore),
    selectOptions() {
      return this.gearStore.weapons.selectOptions;
    },
  },
  methods: {
    onSelect(event) {
      const weapon = this.gearStore.weapons.items[event.value];
      this.characterStore.addToInventory(weapon, true);
    },
  },
  components: {
    vSelect,
  },
};
</script>

<template>
  <v-select
    :options="selectOptions"
    placeholder="Select A Weapon"
    class="weapon-select"
    @option:selected="onSelect"
  ></v-select>
</template>

<style>
:root {
  --vs-search-input-color: none transparent;
  --vs-font-size: 1.2rem;
  --vs-dropdown-option-padding: 0.667rem 1rem;
  --vs-dropdown-option--active-bg: var(--vt-c-blue);
  --vs-dropdown-max-height: none;
}
.weapon-select {
  margin-bottom: 2rem;
}
.weapon-select .vs__search::placeholder,
.weapon-select .vs__dropdown-toggle,
.weapon-select .vs__dropdown-menu {
  background: var(--color-heading);
  border: none;
  color: var(--color-background);
}
.weapon-select .vs__clear,
.weapon-select .vs__open-indicator {
  fill: var(--color-background);
}
.weapon-select .vs__dropdown-toggle {
  padding: 0.333rem 0.333rem 0.6rem;
}
.weapon-select .vs__dropdown-option {
  white-space: normal;
  font-size: 1.1rem;
}
</style>
