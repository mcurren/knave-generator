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
  <header class="page-header hide-print">
    <h1>Knave 1.0 Character Generator</h1>
    <div class="button-group">
      <button class="btn" onclick="window.print()">Print</button>
      <button class="btn" onclick="location.reload()">New Character</button>
    </div>
  </header>

  <main>
    <div class="sheet-header">
      <section class="xp">
        <header class="section-header">
          <h2>XP</h2>
        </header>
        <div>
          <input type="number" min="0" max="100" step="50" size="4" disabled />
        </div>
      </section>
      <CharacterLevel />
      <CharacterName />
    </div>
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

  <footer class="page-footer hide-print">
    <p>
      <a
        href="https://www.drivethrurpg.com/product/250888/Knave"
        target="_blank"
        >Knave 1.0</a
      >
      by Ben Milton <span class="sep">|</span> Site by
      <a href="https://curren.me" target="_blank">michaelopolis</a>
    </p>
  </footer>
</template>

<style>
header.page-header {
  margin: 0 0 calc(var(--section-spacing) * 1.5);
  color: var(--vt-c-pink);
  display: flex;
  flex-direction: column;
}
header.page-header h1 {
  font-size: 3.2rem;
  line-height: 1.2;
  /* color: inherit; */
}
header.page-header .button-group button {
  margin-right: 1rem;
}
@media (min-width: 59rem) {
  header.page-header {
    flex-direction: row;
    justify-content: space-between;
  }
  header.page-header .button-group {
    flex: 0 1 auto;
    margin: auto 0 auto 3rem;
  }
  header.page-header .button-group button {
    margin: 0 0 0 1rem;
  }
}

.page-footer {
  font-size: 0.9rem;
}
.page-footer .sep {
  padding: 0 0.5rem;
}

.sheet-header {
  display: grid;
  gap: 0.75rem;
  margin: var(--section-spacing) 0;
  grid-template: "xp level" "name name";
  justify-items: stretch;
}
.sheet-header section {
  display: flex;
  align-items: center;
}
.sheet-header .xp {
  grid-area: xp;
}
.sheet-header .level {
  grid-area: level;
}
.sheet-header .name {
  grid-area: name;
}
.sheet-header > section > div {
  flex: auto;
}
.sheet-header input {
  width: 100%;
  display: block;
}
@media (min-width: 48rem) {
  .sheet-header {
    grid-template: "xp level name name";
    gap: 1.5rem;
  }
}
@media print, (min-width: 64rem) {
  .sheet-header {
    grid-template: "xp level name name name name";
    gap: 2rem;
  }
}

.sheet-header header {
  margin: 0 0.5rem 0 0;
  line-height: 1;
}
.sheet-header header h2:after {
  content: ":";
}
.sheet-header input {
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
  .sheet-header,
  .sheet-header section {
    flex-wrap: nowrap;
  }
  .sheet-header section.name,
  .sheet-header section.name div,
  .sheet-header section.name input {
    width: 100%;
    margin: 0;
  }
}

.section-header,
.page-header h1 {
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
  .sheet-header,
  .sheet-header section {
    flex-wrap: nowrap;
  }
  .sheet-header section {
    align-items: baseline;
  }
  .sheet-header input {
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
