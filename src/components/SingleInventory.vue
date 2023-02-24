<script>
import CircleIcon from "@/components/icons/CircleIcon.vue";
import ForehandIcon from "@/components/icons/ForehandIcon.vue";
import SwordIcon from "@/components/icons/SwordIcon.vue";
import EditIcon from "@/components/icons/EditIcon.vue";
import VerticalIcon from "@/components/icons/VerticalIcon.vue";

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      uneditableTypes: ["armor", "armorBonus"],
    };
  },
  emits: ["inventory-edit"],
  computed: {
    totalQuality() {
      return this.item.quality;
    },
    handedNumber() {
      return this.item.hands === 1 ? "one" : "two";
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
    SwordIcon,
    EditIcon,
    VerticalIcon,
  },
};
</script>

<template>
  <article
    class="inventory-list__item edit-icon-hide"
    :style="`grid-row: auto / span ${item.slots}`"
  >
    <div v-if="!uneditableTypes.includes(item.type)" class="edit-icon-hide">
      <span
        class="inventory-label editable"
        contenteditable
        spellcheck="false"
        @keydown.enter="editInventory"
      >
        {{ item.label }}
      </span>
      <EditIcon />
    </div>
    <div v-else class="inventory-label">{{ item.label }}</div>

    <span v-if="item.damage" class="inventory-damage">
      <SwordIcon :alt="`Does ${item.damage} damage`" /> {{ item.damage }}
    </span>
    <span v-if="item.hands" class="inventory-hands">
      <ForehandIcon v-if="item.hands" :alt="`Is ${handedNumber}-handed`" />
      {{ item.hands }}
    </span>
    <span v-if="item.quality" class="inventory-quality">
      <span v-for="(item, index) in item.quality" :key="index">
        <CircleIcon :alt="`Has ${totalQuality} quality`" />
      </span>
      {{ item.quality }}
    </span>
    <span v-if="item.slots" class="inventory-slots">
      <VerticalIcon :alt="`Takes up ${item.slots} slots`" />
      {{ item.slots }}
    </span>
  </article>
</template>

<style>
.inventory-list__item {
  border: 0.067rem dashed var(--color-border);
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-wrap: wrap;
}
.inventory-list__item > * {
  display: flex;
}
.inventory-list__item > span:not(.inventory-slots) {
  color: var(--color-text);
  margin-left: auto;
}
.inventory-list__item svg {
  width: 1.25rem;
  margin: 0 0.125rem;
}
.inventory-quality > span {
  display: flex;
  align-items: center;
}
.inventory-slots {
  margin-left: 0.75rem;
}
</style>
