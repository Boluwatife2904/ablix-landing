<script setup lang="ts">
interface Props {
	size?: string;
}

withDefaults(defineProps<Props>(), {
	size: "20",
});
</script>

<template>
	<svg :width="size" :height="size" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M10 0L13.5267 5.1459L19.5106 6.90983L15.7063 11.8541L15.8779 18.0902L10 16L4.12215 18.0902L4.29366 11.8541L0.489435 6.90983L6.47329 5.1459L10 0Z" fill="#F9C304" />
	</svg>
</template>

<style scoped></style>
