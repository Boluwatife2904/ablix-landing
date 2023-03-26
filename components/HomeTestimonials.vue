<script setup lang="ts">
const { isOnMobile } = useDeviceType();

const testimonials = [
	{ image: "/selamah.png", name: "Salamah", rating: 5, comment: "Fantastic design agency I have work ever. They provides really good services." },
	{ image: "/shane.png", name: "Shane Mire", rating: 5, comment: "Fantastic design agency I have work ever. They provides really good services." },
];

const leftButtonFill = ref("#110804");
const rightButtonFill = ref("#110804");
</script>

<template>
	<section class="container">
		<div class="testimonials grid">
			<div class="testimonials__left">
				<p class="body-small text-light-grey text-uppercase">testimonials</p>
				<h2 class="testimonials__header heading-2 satoshi-font text-uppercase weight-700">what clients say about us</h2>
				<div class="testimonials__list">
					<HomeTestimonialItem v-for="testimonial in testimonials" :key="testimonial.name" :testimonial="testimonial" />
				</div>
				<div class="testimonials__buttons flex">
					<BaseButton button-size="rounded-small" variant="outline-grey" @mouseover="leftButtonFill = 'white'" @mouseout="leftButtonFill = '#110804'" title="Previous">
						<IconsArrow :size="isOnMobile ? '12' : '16'" variant="left" :fill="leftButtonFill" />
					</BaseButton>
					<BaseButton button-size="rounded-small" variant="outline-grey" @mouseover="rightButtonFill = 'white'" @mouseout="rightButtonFill = '#110804'" title="Next">
						<IconsArrow :size="isOnMobile ? '12' : '16'" variant="right" :fill="rightButtonFill" />
					</BaseButton>
				</div>
			</div>
			<div class="testimonials__right">
				<NuxtImg class="testimonials__image block" src="/map.png" alt="Map Image" loading="lazy" format="webp" quality="100" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.testimonials {
	padding-bottom: 7rem;
	align-items: center;
	border-bottom: 0.2rem dashed #e7dfd7;
	gap: 2.8rem;
	margin-bottom: 7rem;

	@media screen and (min-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
		margin-bottom: 15rem;
		gap: 2.8rem 3rem;
	}

	@media screen and (min-width: 992px) {
		gap: 2.8rem 15.5rem;
	}

	&__header {
		width: 100%;
		margin-bottom: 4.6rem;
		max-width: 30.5rem;

		@media screen and (min-width: 600px) {
			max-width: 36.5rem;
			margin-bottom: 7rem;
		}

		@media screen and (min-width: 992px) {
			max-width: 38.5rem;
		}
	}

	&__buttons {
		gap: 1rem;
		justify-content: center;

		@media screen and (min-width: 600px) {
			margin-top: 6.6rem;
			justify-content: start;
			gap: 1.8rem;
		}
	}

	&__image {
		margin: 0 auto;
	}
}
</style>
