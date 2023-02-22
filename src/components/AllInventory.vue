<script>
import { mapStores } from "pinia";
import { rollDice } from "@/stores/rollDice.js";
import { useCharacterStore } from "@/stores/sheet.js";
import { useStartingGearStore } from "@/stores/tables/startingGear.js";
import WeaponSelect from "./WeaponSelect.vue";

export default {
  computed: {
    ...mapStores(useCharacterStore, useStartingGearStore),
    inventory() {
      return this.characterStore.sheet.inventory;
    },
    currentSlots() {
      return this.inventory.length
        ? this.inventory.map((item) => item.slots).reduce((a, b) => a + b)
        : 0;
    },
    maxSlots() {
      let max = false;
      const constitution = this.characterStore.sheet.abilities.find(
        (item) => item.id === "constitution"
      ).modifier;
      if (constitution) {
        max = constitution + 10;
      }
      return max;
    },
    emptySlots() {
      return this.maxSlots - this.currentSlots;
    },
    inventoryWeapon() {
      return this.characterStore.sheet.inventory.filter(
        (item) => item.type === "weapon"
      ).length
        ? true
        : false;
    },
  },
  methods: {
    rollArmor() {
      const tables = [
        this.gearStore.armor.items,
        this.gearStore.helmetsShields.items,
      ];
      tables.forEach((table) => {
        const roll = rollDice(1, 20)[0];
        const item = table.find((item) => item.results.includes(roll)).value;
        if (item) {
          this.characterStore.addToInventory(item[0]);
        }
      });
    },
    rollDungeoneeringGear() {
      const results = rollDice(0, 19, 2);
      results.forEach((roll) => {
        this.characterStore.addToInventory(
          this.gearStore.dungeonGear.items[roll]
        );
      });
    },
    rollGeneralGear() {
      const tables = [
        this.gearStore.generalGear1.items,
        this.gearStore.generalGear2.items,
      ];
      tables.forEach((table) => {
        const roll = rollDice(0, 19)[0];
        const item = table[roll];
        this.characterStore.addToInventory(item);
      });
    },
  },
  mounted() {
    if (!this.characterStore.sheet.inventory.length) {
      this.rollArmor();
      this.rollDungeoneeringGear();
      this.rollGeneralGear();
    }
  },
  components: { WeaponSelect },
};
</script>

<template>
  <section class="inventory">
    <header class="section-header">
      <h2>
        Inventory <span>({{ currentSlots }} / {{ maxSlots }})</span>
      </h2>
    </header>
    <WeaponSelect v-if="!inventoryWeapon" />
    <div class="inventory-list">
      <div
        v-for="(item, index) in inventory"
        :key="index"
        class="inventory-list__item"
        :style="`grid-row: auto / span ${item.slots}`"
      >
        <span class="inventory-label">{{ item.label }}</span>
        <span v-if="item.damage" class="inventory-damage">
          {{ item.damage }} damage
        </span>
        <span v-if="item.hands" class="inventory-damage">
          {{ item.hands }} handed
        </span>
        <span v-if="item.quality" class="inventory-quality">
          <span v-for="(item, index) in item.quality" :key="index">
            &cir;
          </span>
        </span>
      </div>
      <div
        v-for="index in emptySlots"
        :key="index"
        class="inventory-list__item inventory-list__item--slot"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.inventory {
  min-width: 21.333rem;
  max-width: 34.667rem;
}
.inventory-list {
  display: grid;
  grid-auto-rows: 1fr;
  gap: 0.5rem;
  font-size: 1.25rem;
}
.inventory-list__item {
  border: 0.067rem dashed var(--color-border);
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
}
.inventory-list__item > * {
  padding: 0 0.25rem;
}
</style>
