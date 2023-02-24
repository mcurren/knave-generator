<script setup>
const props = defineProps({
  alt: String,
  color: String,
});
</script>

<template>
  <span :style="`color: ${props.color}`" class="icon icon--vertical">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 96 960 960"
      width="20"
      aria-labelledby="title"
      role="group"
    >
      <title id="title">{{ props.alt }}</title>
      <path
        d="M96 960v-72h768v72H96Zm192-336v-96h384v96H288ZM96 264v-72h768v72H96Z"
        fill="currentColor"
      />
    </svg>
  </span>
</template>
