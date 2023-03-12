<script setup lang="ts">
interface ButtonProps {
	buttonSize?: string;
	variant?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
	buttonSize: "rounded-large",
	variant: "solid-orange",
});

const buttonClasses = computed(() => {
	return ["size", "variant"].map((type) => {
		if (type === "size") return `base-button--${props.buttonSize}`;
		if (type === "variant") return `base-button--${props.variant}`;
	});
});
</script>

<template>
	<button class="base-button" :class="buttonClasses">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
@mixin button-size($width, $height, $desktop-width, $desktop-height) {
	width: $width;
	height: $height;

	@media screen and (min-width: 600px) {
		width: $desktop-width;
		height: $desktop-height;
	}
}

.base-button {
	display: flex;
	align-items: center;
	justify-content: center;
    flex-shrink: 0;

	&--rounded-large {
		border-radius: 50%;
		@include button-size(3.6rem, 3.6rem, 9rem, 9rem);
	}

	&--rounded-small {
		border-radius: 50%;
		@include button-size(2.8rem, 2.8rem, 4.4rem, 4.4rem);
	}

    &--rounded-smallest {
		border-radius: 50%;
		@include button-size(2.4rem, 2.4rem, 2.4rem, 2.4rem);
	}

	&--solid-orange {
		background-color: var(--primary-color);
		color: #fff;
	}

	&--outline-grey {
		border: 1px solid #d8d0c7;
		background-color: transparent;
		color: #110804;

		&:hover {
			background-color: var(--primary-color);
			color: #fff;
		}
	}
}
</style>
