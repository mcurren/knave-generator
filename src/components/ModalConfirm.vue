<script setup>
import { VueFinalModal } from "vue-final-modal";
const props = defineProps({
  title: String,
});
const emit = defineEmits(["confirm", "cancel"]);
</script>

<template>
  <VueFinalModal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="modal-header">
      <h1>{{ props.title }}</h1>
    </div>
    <div class="modal-body"><slot /></div>
    <div class="modal-footer">
      <button
        @click="emit('cancel')"
        class="btn modal-button modal-button--cancel"
      >
        Cancel
      </button>
      <button
        @click="emit('confirm')"
        class="btn modal-button modal-button--ok"
      >
        Ok
      </button>
    </div>
  </VueFinalModal>
</template>

<style></style>
