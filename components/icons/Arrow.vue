<script setup lang="ts">
interface Props {
	variant?: string;
	size?: string;
	width?: string;
	fill?: string;
}

withDefaults(defineProps<Props>(), {
	variant: "right",
	size: "36",
	fill: "#fff",
});
</script>

<template>
	<span :class="variant">
		<svg :width="size" :height="size" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M17.8686 35C17.8686 30.4912 19.6735 26.1673 22.8862 22.9792C26.099 19.791 30.4565 18 35 18M35 18C32.7503 18 30.5226 17.5602 28.4441 16.7061C26.3656 15.8516 24.477 14.5993 22.8862 13.0208C21.2954 11.4421 20.0336 9.56804 19.1726 7.50554C18.3117 5.44304 17.8686 3.23242 17.8686 1M35 18H1" :stroke="fill" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
		</svg>
	</span>
</template>

<style scoped>
span {
	line-height: 0;
}

.left {
	transform: rotate(-180deg);
}

.down {
	transform: rotate(-270deg);
}
</style>
