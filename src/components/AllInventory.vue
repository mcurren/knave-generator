<script>
import { mapStores } from "pinia";
import { rollDice } from "@/stores/rollDice.js";
import { useCharacterStore } from "@/stores/sheet.js";
import { useStartingGearStore } from "@/stores/tables/startingGear.js";
import WeaponSelect from "./WeaponSelect.vue";
import SingleInventory from "./SingleInventory.vue";

// TODO: add empty inventory slots to sheet and make editable.
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
      ).bonus;
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
  components: { WeaponSelect, SingleInventory },
};
</script>

<template>
  <section class="inventory">
    <header class="section-header">
      <h2>
        Inventory
        <span>({{ maxSlots }} max)</span>
      </h2>
    </header>
    <WeaponSelect v-if="!inventoryWeapon" />
    <div class="inventory-list">
      <SingleInventory
        v-for="(item, index) in inventory"
        :key="index"
        :item="item"
        @inventoryEdit="
          ({ oldValue, newValue }) =>
            characterStore.editInventoryLabel(oldValue, newValue)
        "
      />
      <div
        v-for="index in emptySlots"
        :key="index"
        class="inventory-list__item inventory-list__item--slot"
      ></div>
    </div>
  </section>
</template>

<style scoped>
header h2 {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
header h2 span {
  font-family: var(--system-font-stack);
  font-size: 0.6em;
  font-weight: 600;
}
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
</style>
