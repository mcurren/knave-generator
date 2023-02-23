<script>
import { rollDice } from "@/stores/rollDice.js";
import SwapAbility from "./SwapAbility.vue";

export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    value: {
      type: [Number, Boolean],
      required: true,
    },
    canSwap: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["ability-change"],
  components: {
    SwapAbility,
  },
  data() {
    return {
      results: false,
    };
  },
  computed: {
    bonus() {
      let value = this.value;
      if (!value) {
        value = this.diceRoll ? Math.min(...this.diceRoll) : false;
      }
      return value;
    },
    defense() {
      return this.bonus ? this.bonus + 10 : false;
    },
    diceRoll() {
      return rollDice(1, 6, 3);
    },
  },
  methods: {
    generate() {
      this.diceRoll;
      this.handleChange(this.id, this.bonus);
    },
    handleChange(id, value) {
      this.$emit("ability-change", { id, value });
    },
  },
  mounted() {
    if (!this.value) {
      this.generate();
    }
  },
};
</script>

<template>
  <article :class="`ability ability--${id}`">
    <div class="ability-frame">
      <div class="ability__body">
        <div v-if="defense" class="ability__defense">
          <label>Defense</label>
          <p>{{ defense }}</p>
        </div>
      </div>
      <header>
        <h2>{{ label }}</h2>
      </header>
      <div class="ability__body">
        <div v-if="bonus" class="ability__bonus">
          <label>Bonus</label>
          <p>{{ bonus }}</p>
        </div>
      </div>
    </div>
    <SwapAbility v-if="canSwap" :id="id" />
  </article>
</template>

<style scoped>
.ability-frame {
  border: 0.133rem solid var(--color-border);
  border-top-width: 3px;
  border-bottom-width: 3px;
  border-radius: 6px;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
}
header h2 {
  font-size: 0.9rem;
  line-height: 1;
  font-weight: 600;
  padding: 0.75rem 1.15rem 0.6rem;
  border: 0.067rem solid var(--color-border);
  border-width: 0.067rem 0 0.067rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
label {
  font-size: 0.85rem;
  opacity: 0.65;
  display: none;
}
.ability__defense {
  padding: 0.65rem 0.75rem 0.35rem;
}
.ability__defense p {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--color-heading);
}
.ability__bonus {
  padding: 1rem 1rem 1rem;
  /* margin: 0 0 -0.5rem; */
  /* border: 0.133rem solid var(--color-border); */
  /* border-radius: 50% / 50% 50% 0 0; */
}
.ability__bonus p {
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 1;
  color: var(--color-heading);
}
.ability__bonus p:before {
  content: "+";
  display: inline-block;
  margin-left: -0.25rem;
}
</style>
