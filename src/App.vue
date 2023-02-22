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
  margin-right: 1.75rem;
}
.page-header header {
  margin-right: 0.5rem;
}
.page-header header h2:after {
  content: ":";
}
.page-header input {
  font-size: 1.5em;
  background: none transparent;
  border: 0.067rem solid var(--color-border);
  border-radius: 0.2rem;
  color: var(--color-text);
  padding: 0.25rem 0.5rem 0.2rem;
  line-height: 1;
}

.section-header {
  font-family: "Pirata One";
  margin: 0.5rem 0;
}
.section-header h2 {
  font-size: 2.6rem;
  margin: 0;
}

.main-grid {
  margin: 2rem 0;
  display: grid;
  gap: 2rem;
}
@media (min-width: 50.667rem) and (max-width: 63.933rem) {
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
    grid-row: 1 / span 2;
  }
}

.health-armor-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  justify-items: center;
  margin-bottom: 2rem;
}
@media (min-width: 44rem) {
  .health-armor-grid {
    gap: 2em;
  }
}
@media (min-width: 64rem) {
  .health-armor-grid {
    grid-template-columns: 3fr 2fr;
    justify-items: left;
  }
}

@media print {
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
}
</style>
