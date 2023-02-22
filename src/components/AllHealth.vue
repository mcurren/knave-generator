<script>
import { mapStores } from "pinia";
import { rollDice } from "@/stores/rollDice.js";
import { useCharacterStore } from "@/stores/sheet.js";

export default {
  computed: {
    ...mapStores(useCharacterStore),
    hitDice() {
      return this.characterStore.sheet.level;
    },
    maxHp() {
      return this.characterStore.sheet.maxHp[0];
    },
    diceRoll() {
      return rollDice(1, 8, this.hitDice, true);
    },
  },
  methods: {
    generate() {
      this.characterStore.changeSheet("maxHp", this.diceRoll);
    },
    levelUp() {
      const prevMaxHp = this.maxHp;
      if (this.maxHp && this.diceRoll[0] < prevMaxHp) {
        this.characterStore.changeSheet("maxHp", [prevMaxHp - 1]);
      } else {
        this.characterStore.changeSheet("maxHp", this.diceRoll);
      }
    },
  },
  mounted() {
    if (!this.maxHp) {
      this.generate();
    }
  },
  watch: {
    hitDice(newVal, oldVal) {
      if (newVal > oldVal) {
        this.levelUp();
      } else {
        this.generate();
      }
    },
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
  min-width: 9.333rem;
  max-width: 12rem;
}
@media (min-width: 40rem) {
  .health {
    max-width: 17.333rem;
  }
}
section > header {
  text-align: center;
}
.health-grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 0.75fr 0.75fr;
  gap: 1rem;
}
.current-hp {
  grid-row: 3 / span 2;
}
@media (min-width: 40rem) and (max-width: 50.6) {
  .health-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
  .current-hp {
    grid-row: auto / span 2;
  }
}
@media (min-width: 64rem) {
  .health-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
  .current-hp {
    grid-row: auto / span 2;
  }
}
@media print {
  .health {
    max-width: 17.333rem;
  }
  .health-grid {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 1fr 1fr;
    gap: 1rem;
  }
  .current-hp {
    grid-row: auto / span 2;
  }
}

article {
  border: 0.133rem solid var(--color-border);
  border-width: 0.2rem 0.133rem;
  border-radius: 1rem;
  text-align: center;
  overflow: hidden;
}
article > header h2 {
  font-size: 0.85rem;
  line-height: 1;
  font-weight: 700;
  padding: 1rem 1.15rem 0.75rem;
  border-bottom: 0.067rem solid var(--color-border);
  text-transform: uppercase;
  white-space: nowrap;
}
article:last-child {
  margin-bottom: 0;
}
.health__value {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1.2;
}
</style>
