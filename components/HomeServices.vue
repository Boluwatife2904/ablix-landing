<script setup lang="ts">
const services = [
	{ title: "ui/ux design", content: "Saving World with Good Designs. Because your satisfaction is everything." },
	{ title: "development", content: "Saving World with Good Designs. Because your satisfaction is everything." },
	{ title: "digital marketing", content: "Saving World with Good Designs. Because your satisfaction is everything." },
	{ title: "product branding", content: "Saving World with Good Designs. Because your satisfaction is everything." },
];
</script>

<template>
	<section class="container">
		<div class="our-services grid">
			<div class="our-services__left">
				<p class="paragraph-2 text-uppercase text-light-grey">our services</p>
				<h2 class="heading-2 text-black text-uppercase weight-700 satoshi-font our-services__header">come on, we will help you buIld your dream project.</h2>
				<div class="our-services__image">
					<img src="/our-services.png" alt="Our services image" />
				</div>
			</div>
			<div class="our-services__right">
				<HomeServicesItem v-for="service in services" :key="service.title" :service="service" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.our-services {
	padding: 7rem 0 2.8rem;
	gap: 1.8rem 11rem;
	border-bottom: 2px dashed #e7dfd7;

	@media screen and (min-width: 992px) {
		padding: 15rem 0 7rem;
		grid-template-columns: repeat(2, 1fr);
	}

	&__header {
		max-width: 30.5rem;
		margin-bottom: 2.8rem;

        @media screen and (min-width: 600px) {
			max-width: 35.8rem;
        }

		@media screen and (min-width: 992px) {
			max-width: 46.8rem;
			margin-bottom: 7rem;
		}
	}

	&__left {
		@media screen and (min-width: 992px) {
			order: 1;
		}
	}
}
</style>
