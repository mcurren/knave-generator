<script>
import { mapStores } from "pinia";
import { rollDice } from "@/stores/rollDice.js";
import { useCharacterStore } from "@/stores/sheet.js";

export default {
  methods: {
    generate() {
      const value = rollDice(1, 8, this.hitDice, true);
      this.characterStore.changeSheet("maxHp", value);
    },
  },
  computed: {
    ...mapStores(useCharacterStore),
    hitDice() {
      return this.characterStore.sheet.level;
    },
    maxHp() {
      return this.characterStore.sheet.maxHp[0];
    },
  },
  mounted() {
    if (!this.maxHp) {
      this.generate();
    }
  },
  updated() {
    this.generate();
  },
};
</script>

<template>
  <section class="health">
    <header class="section-header">
      <h2>Health</h2>
    </header>
    <div class="health-grid">
      <article v-if="hitDice" class="hit-dice">
        <header>
          <h2>Hit Dice</h2>
        </header>
        <div class="health__value">{{ hitDice }}</div>
      </article>
      <article class="current-hp">
        <header>
          <h2>Current HP</h2>
        </header>
        <div class="health__value">&nbsp;</div>
      </article>
      <article v-if="maxHp" class="max-hp">
        <header>
          <h2>Max HP</h2>
        </header>
        <div class="health__value">{{ maxHp }}</div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.health {
  min-width: 140px;
  max-width: 180px;
}
@media (min-width: 600px) {
  .health {
    max-width: 260px;
  }
}
section > header {
  text-align: center;
}
.health-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.75fr 0.75fr;
  gap: 1em;
}
.current-hp {
  grid-row: 3 / span 2;
}
@media (min-width: 600px) and (max-width: 759px) {
  .health-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr 1fr;
    gap: 1em;
  }
  .current-hp {
    grid-row: auto / span 2;
  }
}
@media (min-width: 960px) {
  .health-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr 1fr;
    gap: 1em;
  }
  .current-hp {
    grid-row: auto / span 2;
  }
}

article {
  border: 2px solid var(--color-border);
  border-width: 3px 2px;
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
}
article > header h2 {
  font-size: 0.85em;
  line-height: 1;
  font-weight: 700;
  padding: 1em 1.15em 0.75em;
  border-bottom: 1px solid var(--color-border);
  text-transform: uppercase;
  white-space: nowrap;
}
article:last-child {
  margin-bottom: 0;
}
.health__value {
  font-size: 2.5em;
  font-weight: 600;
  line-height: 1.2;
}
</style>
