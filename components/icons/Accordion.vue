<script setup lang="ts">
interface Props {
	variant?: string;
}

withDefaults(defineProps<Props>(), {
	variant: "closed",
});
</script>

<template>
	<svg v-if="variant === 'opened'" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M1 6C2.32611 6 3.59785 5.47322 4.53554 4.53554C5.47323 3.59785 6 2.32608 6 1C6 1.65661 6.12935 2.30679 6.38057 2.91342C6.63189 3.52005 7.00021 4.07124 7.46446 4.53554C7.92881 4.99983 8.47999 5.36812 9.08661 5.61939C9.69322 5.87068 10.3434 6 11 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
	</svg>

	<svg v-else-if="variant === 'closed'" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
		<rect width="2" height="8" rx="1" transform="matrix(0.965927 0.258813 -0.258825 0.965924 2.68164 3.32666)" fill="white" />
		<circle cx="1" cy="1" r="1" transform="matrix(0.965927 0.258813 -0.258825 0.965924 3.45801 0.428711)" fill="white" />
	</svg>
</template>

<style scoped></style>
