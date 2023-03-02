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

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: var(--color-background);
  border-radius: 0.5rem;
  color: var(--color-text);
}
.confirm-modal-content > * + * {
  margin: 0.5rem 0;
}
.confirm-modal-content h1 {
  font-size: 1.375rem;
  font-weight: 600;
}
.modal-footer {
  display: flex;
  margin-left: 1rem;
  justify-content: flex-end;
}
.modal-button {
  margin-left: 0.75rem;
}
</style>
