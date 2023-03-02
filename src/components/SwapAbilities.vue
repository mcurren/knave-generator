<script>
import { mapStores } from "pinia";
import vSelect from "vue-select";
import { useCharacterStore } from "@/stores/sheet.js";
import SwapIcon from "@/components/icons/SwapIcon.vue";
import InfoIcon from "@/components/icons/InfoIcon.vue";
import ModalConfirm from "@/components/ModalConfirm.vue";

export default {
  data() {
    return {
      choiceA: null,
      choiceB: null,
      showModal: false,
    };
  },
  components: {
    vSelect,
    SwapIcon,
    InfoIcon,
    ModalConfirm,
  },
  computed: {
    ...mapStores(useCharacterStore),
    options() {
      return this.characterStore.sheet.abilities.filter(
        (item) => ![this.choiceA, this.choiceB].includes(item)
      );
    },
    canSwap() {
      return this.characterStore.sheet.canSwapAbility;
    },
    modalTitle() {
      return this.choiceA !== null && this.choiceB !== null
        ? `Swap ${this.choiceA.label} and ${this.choiceB.label}?`
        : "Are you sure?";
    },
  },
  methods: {
    confirmSwap() {
      if (this.choiceA !== null && this.choiceB !== null) {
        this.showModal = true;
      }
    },
    handleSwap() {
      this.showModal = false;
      this.characterStore.swapAbilities(this.choiceA.id, this.choiceB.id);
    },
    cancelSwap() {
      this.showModal = false;
      this.choiceA = null;
      this.choiceB = null;
    },
  },
};
</script>

<template>
  <aside v-if="canSwap" class="user-action hide-print swap-abilities">
    <h3 class="swap-abilities__heading">
      <InfoIcon color="var(--vt-c-pink)" alt="info" />
      <span class="info-title"
        >Swap any two ability scores <br />(once, optional)</span
      >
    </h3>
    <div class="swap-abilities__selects">
      <span class="swap-abilities__selects__item">
        <vSelect
          :options="options"
          v-model="choiceA"
          placeholder="Choose..."
          @option:selected="confirmSwap"
        />
      </span>
      <SwapIcon alt="swap with" color="var(--vt-c-pink)" />
      <span class="swap-abilities__selects__item">
        <vSelect
          :options="options"
          v-model="choiceB"
          placeholder="Choose..."
          @option:selected="confirmSwap"
        />
      </span>
    </div>
  </aside>
  <ModalConfirm
    v-model="showModal"
    @confirm="handleSwap"
    @cancel="cancelSwap"
    @close="cancelSwap"
    :title="modalTitle"
  >
    <p>You can only swap ability scores once, and this cannot be undone.</p>
  </ModalConfirm>
</template>

<style>
.swap-abilities {
  --vs-search-input-color: none transparent;
  --vs-font-size: 1rem;
  --vs-dropdown-option-padding: 0.125rem 0.6rem;
  --vs-dropdown-option--active-bg: var(--vt-c-dark-pink);
  --vs-dropdown-option--active-color: var(--vt-c-white);
  --vs-dropdown-max-height: none;
  --vs-dropdown-min-width: 10.5rem;
  --vs-text-color: #f4f4f4;
  --vs-selected-color: white;
  --vs-actions-padding: 2px 0.65rem 0;
  font-family: var(--system-font-stack);
  margin: auto 0 1rem;
}
.swap-abilities .v-select {
  width: var(--vs-dropdown-min-width);
}
.swap-abilities .vs__search::placeholder,
.swap-abilities .vs__dropdown-toggle,
.swap-abilities .vs__dropdown-menu {
  background: var(--vt-c-pink);
  border: none;
  color: var(--vs-text-color);
}
.swap-abilities .vs__clear,
.swap-abilities .vs__open-indicator {
  fill: var(--vs-text-color);
}
.swap-abilities .vs__dropdown-menu {
  width: var(--vs-dropdown-min-width);
}
.swap-abilities .vs__dropdown-toggle {
  padding: 0.1rem 0 0.23rem;
}
.swap-abilities .vs__dropdown-option {
  white-space: normal;
  font-size: 1rem;
}

.swap-abilities,
.swap-abilities__selects {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.swap-abilities__heading {
  display: flex;
  align-items: flex-start;
}
.swap-abilities__selects {
  width: 100%;
}
@media (max-width: 43.999rem) {
  .swap-abilities {
    align-items: flex-start;
  }
  .swap-abilities__selects {
    margin-top: 0.5rem;
  }
  .swap-abilities__selects__item,
  .swap-abilities .v-select {
    width: 100%;
  }
}
@media (min-width: 44rem) {
  .swap-abilities,
  .swap-abilities__selects {
    flex-direction: row;
    align-items: center;
  }
  .swap-abilities {
    margin: auto 0;
    justify-content: space-between;
  }
  .swap-abilities__selects {
    margin-left: 1rem;
  }
  .info-title br {
    display: none;
  }
}
@media (min-width: 65.333rem) {
  .info-title {
    white-space: nowrap;
  }
}
.swap-abilities__heading {
  font-weight: inherit;
}
.swap-abilities .icon--info {
  margin-right: 0.5rem;
}
.swap-abilities .icon--swap {
  margin: 0.5rem 0.5rem;
}
</style>
