<script>
import { mapStores } from "pinia";
import { useCharacterStore } from "@/stores/sheet.js";

export default {
  computed: {
    ...mapStores(useCharacterStore),
    defense() {
      return this.bonus + 10;
    },
    bonus() {
      let value = this.characterStore.sheet.armor.bonus;
      if (value === this.inventoryBonuses) {
        value = value + this.inventoryBonuses;
      } else {
        value = Math.max(
          this.characterStore.sheet.armor.bonus,
          this.inventoryBonuses
        );
      }
      return value;
    },
    inventoryBonuses() {
      const arr = [];
      this.characterStore.sheet.inventory.find((item) => {
        if (typeof item.bonus !== "undefined") {
          arr.push(item.bonus);
        }
      });
      this.characterStore.sheet.inventory.find((item) => {
        if (typeof item.defense !== "undefined") {
          arr.push(item.defense - 10);
        }
      });
      return arr.length ? arr.reduce((a, b) => a + b) : 0;
    },
  },
};
</script>

<template>
  <section class="armor">
    <header class="section-header">
      <h2>Armor</h2>
    </header>
    <article>
      <div v-if="defense" class="armor__defense">
        <label>Defense</label>
        <p>{{ defense }}</p>
      </div>
      <div v-if="bonus" class="armor__bonus">
        <label>Bonus</label>
        <p>{{ bonus }}</p>
      </div>
    </article>
  </section>
</template>

<style scoped>
section {
  text-align: center;
  min-width: 8.667rem;
  max-width: 9.333rem;
}
article {
  border: 0.133rem solid var(--color-border);
  border-width: 0.2rem 0.267rem 0.133rem;
  border-radius: 50% 50% 50% 50% / 5% 5% 95% 95%;
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
}
article > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
label {
  font-size: 0.85rem;
  display: none;
}
.armor__defense {
  height: 6rem;
}
.armor__defense p {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--color-heading);
}
.armor__bonus {
  border-top: 0.5rem double var(--color-border);
  height: 4rem;
}
.armor__bonus p {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--color-text);
}
.armor__bonus p:before {
  content: "+";
  display: inline-block;
  margin-left: -0.25rem;
}
</style>
