<script>
import { rollDice } from "@/stores/rollDice.js";

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
  },
  emits: ["ability-change"],
  data() {
    return {
      results: false,
    };
  },
  computed: {
    bonus() {
      let value = this.value;
      if (!value) {
        value = this.results ? Math.min(...this.results) : false;
      }
      return value;
    },
    defense() {
      return this.bonus ? this.bonus + 10 : false;
    },
  },
  methods: {
    generate() {
      this.results = rollDice(1, 6, 3);
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
  </article>
</template>

<style scoped>
.ability {
  border: 2px solid var(--color-border);
  border-top-width: 3px;
  border-bottom-width: 3px;
  border-radius: 6px;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
}
header h2 {
  font-size: 0.9em;
  line-height: 1;
  font-weight: 700;
  padding: 0.75em 1.15em 0.6em;
  border: 1px solid var(--color-border);
  border-width: 1px 0 1px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
label {
  font-size: 0.85em;
  opacity: 0.65;
  display: none;
}
.ability__defense {
  padding: 0.65em 0.75em 0.35em;
}
.ability__defense p {
  font-size: 1.5em;
  font-weight: 600;
  line-height: 1;
}
.ability__bonus {
  padding: 1em 1em 1em;
  /* margin: 0 0 -0.5em; */
  /* border: 2px solid var(--color-border); */
  /* border-radius: 50% / 50% 50% 0 0; */
}
.ability__bonus p {
  font-size: 2.5em;
  font-weight: 600;
  line-height: 1;
}
.ability__bonus p:before {
  content: "+";
  display: inline-block;
  margin-left: -0.25em;
}
</style>
