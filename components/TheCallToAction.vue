<script setup lang="ts">
const { isOnMobile } = useDeviceType();
</script>

<template>
	<section class="container">
		<div class="base-cta">
			<div class="base-cta__wrapper">
				<p class="base-cta__heading body-small text-uppercase text-light-grey">contact us</p>
				<h2 class="base-cta__text satoshi-font weight-700 text-black heading-2 text-uppercase">
					let’s work on <br />
					something cool together
				</h2>
				<BaseButton title="Contact Us"> <IconsArrow :size="isOnMobile ? '16' : '36'" /> </BaseButton>
			</div>
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
		margin-bottom: 0.5rem;
	}

	&__text {
		margin-bottom: 1.2rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 4.8rem;
		}
	}
}
</style>
