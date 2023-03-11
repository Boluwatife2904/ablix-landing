<script setup lang="ts">
const { isOnMobile } = useDeviceType();
</script>

<template>
	<section class="base-cta">
		<div class="base-cta__wrapper">
			<h6 class="base-cta__heading">CONTACT US</h6>
			<h1 class="base-cta__text satoshi-text">
				let’s work on <br />
				something cool together
			</h1>
			<BaseButton> <IconsArrow :height="isOnMobile ? '16' : '36'" :width="isOnMobile ? '16' : '36'" /> </BaseButton>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.base-cta {
	min-height: 19.6rem;
	border-bottom: 0.2rem dashed #e7dfd7;
	padding-bottom: 2.8rem;
    margin-bottom: 7rem;

	@media screen and (min-width: 600px) {
		min-height: 33.7rem;
		margin-bottom: 15rem;
	}

	&__wrapper {
		max-width: 58.4rem;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-direction: column;

		@media screen and (min-width: 600px) {
			align-items: center;
			text-align: center;
		}
	}

	&__heading {
		font-weight: 400;
		font-size: 1.4rem;
		line-height: 2.4rem;
		color: #a89f94;
		margin-bottom: 0.5rem;
	}

	&__text {
		font-size: 2.6rem;
		line-height: 3.6rem;
		letter-spacing: -0.02em;
		text-transform: uppercase;
		color: var(--heading-color);
		font-weight: 700;
		margin-bottom: 1.2rem;

		@media screen and (min-width: 600px) {
			font-size: 3rem;
			line-height: 3.8rem;
			margin-bottom: 4.8rem;
		}

		@media screen and (min-width: 992px) {
			font-size: 4rem;
			line-height: 5rem;
		}
	}
}
</style>
