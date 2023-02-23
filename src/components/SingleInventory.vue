<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  emits: ["inventory-edit"],
  methods: {
    editInventory(event) {
      event.target.blur();
      console.log(event);
      const oldValue = this.item.label;
      const newValue = event.target.innerText;
      this.$emit("inventory-edit", { oldValue, newValue });
    },
  },
};
</script>

<template>
  <div
    class="inventory-list__item"
    :style="`grid-row: auto / span ${item.slots}`"
  >
    <span
      v-if="!['armor', 'armorBonus'].includes(item.type)"
      class="inventory-label editable"
      contenteditable
      spellcheck="false"
      @keydown.enter="editInventory"
    >
      {{ item.label }}
    </span>
    <span v-else class="inventory-label">{{ item.label }}</span>

    <span v-if="item.damage" class="inventory-damage">
      {{ item.damage }} damage
    </span>
    <span v-if="item.hands" class="inventory-damage">
      {{ item.hands }} handed
    </span>
    <span v-if="item.quality" class="inventory-quality">
      <span v-for="(item, index) in item.quality" :key="index"> &cir; </span>
    </span>
  </div>
</template>

<style>
.inventory-list__item {
  border: 0.067rem dashed var(--color-border);
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
}
.inventory-list__item > * {
  padding: 0 0.3625rem;
}
</style>
