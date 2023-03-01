<script setup>
import "vue-select/dist/vue-select.css";

import AllAbilities from "@/components/AllAbilities.vue";
import AllHealth from "@/components/AllHealth.vue";
import AllTraits from "@/components/AllTraits.vue";
import AllInventory from "@/components/AllInventory.vue";
import AllArmor from "@/components/AllArmor.vue";
import CharacterLevel from "@/components/CharacterLevel.vue";
import CharacterName from "@/components/CharacterName.vue";
</script>

<template>
  <header class="page-header">
    <section class="level">
      <header class="section-header">
        <h2>XP</h2>
      </header>
      <div>
        <input type="number" min="0" max="100" step="50" size="4" disabled />
      </div>
    </section>
    <CharacterLevel />
    <CharacterName />
  </header>

  <main>
    <AllAbilities />
    <div class="main-grid">
      <div class="health-armor-grid">
        <AllHealth />
        <AllArmor />
      </div>
      <AllTraits />
      <AllInventory />
    </div>
  </main>
</template>

<style>
.page-header {
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
}
.page-header section {
  display: flex;
  align-items: center;
  margin-right: var(--section-spacing);
}
.page-header header {
  margin: 0 0.5rem 0 0;
  line-height: 1;
}
.page-header header h2:after {
  content: ":";
}
.page-header input {
  font-size: 1.5rem;
  font-weight: 500;
  background: none transparent;
  border: 0.067rem solid var(--color-border);
  border-radius: 0.2rem;
  color: var(--color-text);
  padding: 0.25rem 0.5rem 0.2rem;
  line-height: 1;
}
@media (min-width: 64rem) {
  .page-header,
  .page-header section {
    flex-wrap: nowrap;
  }
  .page-header section.name,
  .page-header section.name div,
  .page-header section.name input {
    width: 100%;
    margin: 0;
  }
}

.section-header {
  font-family: "Pirata One";
  color: var(--color-heading);
  margin: 0 0 0.5rem;
}
.section-header h2 {
  font-size: 2.6rem;
  margin: 0;
}

.main-grid {
  margin: var(--section-spacing) 0;
  display: grid;
  gap: var(--section-spacing);
}
@media (min-width: 45rem) and (max-width: 63.999rem) {
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }
  .inventory {
    grid-column: auto / span 2;
  }
}
@media (min-width: 64rem) {
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }
  .inventory {
    grid-column: 2 / span 1;
    grid-row: 1 / span 3;
  }
}

.health-armor-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--section-spacing);
  justify-items: center;
}
@media (min-width: 64rem) {
  .health-armor-grid {
    grid-template-columns: 3fr 2fr;
    justify-items: left;
  }
}

@media print {
  .page-header,
  .page-header section {
    flex-wrap: nowrap;
  }
  .page-header section {
    align-items: baseline;
  }
  .page-header input {
    font-size: 2rem;
    border: none;
  }
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }
  .inventory {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
  }
  .health-armor-grid {
    grid-template-columns: 3fr 2fr;
    justify-items: left;
  }
  .ability-swap,
  .weapon-select {
    display: none;
  }
}
</style>
