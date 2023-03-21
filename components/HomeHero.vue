<script setup lang="ts"></script>

<template>
	<section class="container">
		<div class="home-hero">
			<div class="home-hero__top">
				<small class="home-hero__subheading text-uppercase paragraph-1 text-light-grey">😎 GIVING YOU THE BEST DESIGNS</small>
				<h1 class="text-uppercase heading-1 satoshi-font weight-700">saving world with good designs.</h1>
			</div>
			<div class="home-hero__bottom">
				<div class="home-hero__left"></div>
				<div class="home-hero__right"></div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.home-hero {
	&__subheading {
		margin-bottom: 0.5rem;
	}

	&__top {
		max-width: 35rem;

		@media screen and (min-width: 600px) {
			max-width: 50rem;
		}

		@media screen and (min-width: 992px) {
			max-width: 74.8rem;
		}
	}
}
</style>
