<script setup>
import { useModal } from "vue-final-modal";
import ModalConfirm from "@/components/ModalConfirm.vue";

const { open, close } = useModal({
  component: ModalConfirm,
  attrs: {
    onConfirm() {
      location.reload();
    },
    onCancel() {
      close();
    },
  },
  slots: {
    default: "<p>Your current character sheet will not be saved.</p>",
  },
});
</script>

<template>
  <div class="button-group">
    <button class="btn" onclick="window.print()" title="Print the page">
      Print
    </button>
    <button class="btn" @click="() => open()" title="Reload the page">
      New Character
    </button>
  </div>
</template>

<style></style>
