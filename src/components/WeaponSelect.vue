<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

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
      console.log(weapon);
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
    @option:selected="onSelect"
  ></v-select>
</template>

<style>
:root {
  --vs-search-input-color: none transparent;
  --vs-font-size: 1.2em;
  --vs-dropdown-option-padding: 10px 15px;
  --vs-dropdown-option--active-bg: var(--vt-c-blue);
  --vs-dropdown-max-height: none;
}
.v-select {
  margin-bottom: 2em;
}
.v-select .vs__search::placeholder,
.v-select .vs__dropdown-toggle,
.v-select .vs__dropdown-menu {
  background: var(--color-heading);
  border: none;
  color: var(--color-background);
}
.v-select .vs__clear,
.v-select .vs__open-indicator {
  fill: var(--color-background);
}
.v-select .vs__dropdown-toggle {
  padding: 5px 5px 9px;
}
.v-select .vs__dropdown-option {
  white-space: normal;
  font-size: 1.1em;
}
</style>
