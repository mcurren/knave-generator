<script setup>
const props = defineProps({
  alt: String,
  color: String,
});
</script>

<template>
  <span :style="`color: ${props.color}`" class="icon icon--swap">
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
        d="M288 888 96 696l192-192 51 51-105 105h294v72H234l105 105-51 51Zm384-240-51-51 105-105H432v-72h294L621 315l51-51 192 192-192 192Z"
        fill="currentColor"
      />
    </svg>
  </span>
</template>
