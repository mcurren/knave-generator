<script>
import { rollDice } from "@/stores/rollDice.js";

export default {
  props: {
    value: {
      type: [String, Boolean],
      required: true,
    },
    table: {
      type: Object,
      required: true,
    },
  },
  emits: ["trait-change"],
  data() {
    return {
      result: false,
    };
  },
  methods: {
    generate() {
      const roll = rollDice(1, 20)[0];
      let result = false;
      if (this.table.roll.weighted) {
        result = this.table.items.find((item) =>
          item.results.includes(roll)
        ).value;
      } else {
        result = this.table.items[roll - 1];
      }
      this.result = result;
      this.handleChange(this.table.sheet.id, this.result);
    },
    handleChange(id, value) {
      this.$emit("trait-change", { id, value });
    },
  },
  mounted() {
    if (!this.value) {
      this.generate();
    }
  },
  updated() {
    if (typeof this.value === "undefined") {
      this.generate();
    }
  },
};
</script>

<template>
  <article :class="`trait trait--${table.sheet.id}`">
    <header>
      <h2>{{ table.label }}</h2>
    </header>
    <div v-if="value" class="trait__value">
      <p>{{ value }}</p>
    </div>
  </article>
</template>

<style scoped>
article {
  display: flex;
  align-items: baseline;
  margin-bottom: 0.25em;
}
header {
  width: 150px;
}
h2 {
  font-size: 1em;
  margin-right: 0.5em;
  font-weight: 600;
  text-transform: uppercase;
}
h2:after {
  content: ":";
}
/* .trait__value {
  flex: 1;
} */
p {
  font-size: 1.25em;
}
</style>
