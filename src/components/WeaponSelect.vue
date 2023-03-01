<script>
import vSelect from "vue-select";
import { mapStores } from "pinia";
import { useCharacterStore } from "@/stores/sheet.js";
import { useStartingGearStore } from "@/stores/tables/startingGear.js";
import InfoIcon from "@/components/icons/InfoIcon.vue";

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
    InfoIcon,
  },
};
</script>

<template>
  <aside class="user-action hide-print select-weapon">
    <h3 class="select-weapon__heading">
      <InfoIcon color="var(--vt-c-pink)" alt="info" />
      <span class="info-title">Select a weapon</span>
    </h3>
    <div class="select-weapon__select">
      <v-select
        :options="selectOptions"
        placeholder="Choose..."
        class="weapon-select"
        @option:selected="onSelect"
      ></v-select>
    </div>
  </aside>
</template>

<style>
.weapon-select {
  --vs-search-input-color: none transparent;
  --vs-font-size: 1rem;
  --vs-dropdown-option-padding: 0.125rem 0.6rem;
  --vs-dropdown-option--active-bg: var(--vt-c-dark-pink);
  --vs-dropdown-option--active-color: #ffffff;
  --vs-dropdown-max-height: none;
  --vs-text-color: #f4f4f4;
}
.weapon-select .vs__search::placeholder,
.weapon-select .vs__dropdown-toggle,
.weapon-select .vs__dropdown-menu {
  background: var(--vt-c-pink);
  border: none;
  color: var(--vs-text-color);
}
.weapon-select .vs__clear,
.weapon-select .vs__open-indicator {
  fill: var(--vs-text-color);
}
.weapon-select .vs__dropdown-toggle {
  padding: 0.1rem 0 0.23rem;
}
.weapon-select .vs__dropdown-option {
  white-space: normal;
  font-size: 1.1rem;
}

.user-action.select-weapon,
.select-weapon__heading {
  display: flex;
  align-items: center;
}
.user-action.select-weapon {
  margin-bottom: 0.5rem;
  flex-direction: column;
  align-items: flex-start;
}
.icon--info,
.select-weapon__heading {
  margin-right: 0.5rem;
}
.select-weapon__heading {
  margin-bottom: 0.25rem;
}
.select-weapon__select {
  width: 100%;
}
</style>
