<script setup lang="ts">
interface ButtonProps {
	buttonSize?: string;
	variant?: string;
	hasBorder?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), {
	buttonSize: "rounded-large",
	variant: "solid-orange",
	hasBorder: false,
});

const buttonClasses = computed(() => {
	return ["size", "variant"].map((type) => {
		if (type === "size") return `base-button--${props.buttonSize}`;
		if (type === "variant") return `base-button--${props.variant}`;
	});
});
</script>

<template>
	<button class="base-button" :class="[...buttonClasses, { 'base-button--bordered': hasBorder }]">
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
	position: relative;

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

	&--flat-medium {
		font-weight: 500;
		font-size: 1.2rem;
		line-height: 2rem;
		padding: 1rem 2.5rem;

		@media screen and (min-width: 600px) {
			font-weight: 600;
			padding: 1.5rem 5.5rem;
			font-size: 1.6rem;
			line-height: 2.6rem;
		}
	}

	&--solid-orange {
		background-color: var(--primary-color);
		color: #fff;
	}

	&--outline-grey {
		border: 0.1rem solid #d8d0c7;
		background-color: transparent;
		color: #110804;

		&:hover {
			background-color: var(--primary-color);
			color: #fff;
		}
	}

	&--bordered {
		&::after {
			position: absolute;
			content: "";
			height: 100%;
			width: 100%;
			border: 0.1rem solid #110804;
			top: 0.6rem;
			left: 0.6em;
			z-index: -1;

			@media screen and (min-width: 600px) {
				top: 1rem;
				left: 1rem;
			}
		}
	}
}
</style>
