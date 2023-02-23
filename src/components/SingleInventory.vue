<script>
import CircleIcon from "@/components/icons/CircleIcon.vue";
import ForehandIcon from "@/components/icons/ForehandIcon.vue";
import BackhandIcon from "@/components/icons/BackhandIcon.vue";
import SwordIcon from "@/components/icons/SwordIcon.vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  emits: ["inventory-edit"],
  computed: {
    totalQuality() {
      return this.item.quality;
    },
  },
  methods: {
    editInventory(event) {
      event.target.blur();
      console.log(event);
      const oldValue = this.item.label;
      const newValue = event.target.innerText;
      this.$emit("inventory-edit", { oldValue, newValue });
    },
  },
  components: {
    CircleIcon,
    ForehandIcon,
    BackhandIcon,
    SwordIcon,
  },
};
</script>

<template>
  <div
    class="inventory-list__item"
    :style="`grid-row: auto / span ${item.slots}`"
  >
    <p
      v-if="!['armor', 'armorBonus'].includes(item.type)"
      class="inventory-label editable"
      contenteditable
      spellcheck="false"
      @keydown.enter="editInventory"
    >
      {{ item.label }}
    </p>
    <p v-else class="inventory-label">{{ item.label }}</p>

    <span v-if="item.damage" class="inventory-damage">
      <SwordIcon :alt="`Does d${item.damage} damage`" /> {{ item.damage }}
    </span>
    <span v-if="item.hands" class="inventory-hands">
      <ForehandIcon v-if="item.hands" :alt="`${item.hands}-handed`" />
      <BackhandIcon v-if="item.hands > 1" :alt="`${item.hands}-handed`" />
    </span>
    <span v-if="item.quality" class="inventory-quality">
      <span v-for="(item, index) in item.quality" :key="index"
        ><CircleIcon :alt="`Has ${totalQuality} quality`"
      /></span>
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
.inventory-list__item > span {
  color: var(--vt-c-black-mute);
}
.inventory-list__item svg {
  width: 1.25rem;
  margin: 0 0.125rem;
}
.inventory-damage,
.inventory-hands,
.inventory-quality,
.inventory-quality > span {
  display: flex;
  align-items: center;
}
</style>
