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
  computed: {
    rollDice() {
      return rollDice(1, 20)[0];
    },
  },
  methods: {
    generate() {
      let result = false;
      if (this.table.roll.weighted) {
        result = this.table.items.find((item) =>
          item.results.includes(this.rollDice)
        ).value;
      } else {
        result = this.table.items[this.rollDice - 1];
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
  margin-bottom: 0.25rem;
}
header {
  width: 10rem;
}
h2 {
  font-size: 1rem;
  margin-right: 0.5rem;
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
  font-size: 1.25rem;
}
</style>
