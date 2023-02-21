<script setup>
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
        <input type="number" min="0" max="100" step="50" size="4" />
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
  margin-right: 1.75em;
}
.page-header header {
  margin-right: 0.5em;
}
.page-header header h2:after {
  content: ":";
}
.page-header input {
  font-size: 1.5em;
  background: none transparent;
  border: 1px solid var(--color-border);
  border-radius: 3px;
  color: var(--color-text);
  padding: 0.25em 0.5em 0.2em;
  line-height: 1;
}

.section-header {
  font-family: "Pirata One";
  margin: 0.5em 0;
}
.section-header h2 {
  font-size: 2.6em;
  margin: 0;
}

.main-grid {
  margin: 2em 0;
  display: grid;
  gap: 2em;
}
@media (min-width: 760px) and (max-width: 959px) {
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }
  .inventory {
    grid-column: auto / span 2;
  }
}
@media (min-width: 960px) {
  .main-grid {
    grid-template-columns: 1fr 1fr;
  }
  .inventory {
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
  }
}

.health-armor-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  justify-items: center;
  margin-bottom: 2em;
}
@media (min-width: 660px) {
  .health-armor-grid {
    gap: 2em;
  }
}
@media (min-width: 960px) {
  .health-armor-grid {
    grid-template-columns: 3fr 2fr;
    justify-items: left;
  }
}
</style>
