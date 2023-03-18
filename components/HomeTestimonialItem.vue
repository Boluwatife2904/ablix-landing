<script setup lang="ts">
interface Testimonial {
	image: string;
	name: string;
	rating: number;
	comment: string;
}

interface Props {
	testimonial: Testimonial;
}
const { isOnMobile } = useDeviceType();

defineProps<Props>();
</script>

<template>
	<div class="testimonial flex">
		<div class="testimonial__left">
			<NuxtImg :src="testimonial.image" :alt="testimonial.image" class="testimonial__image" loading="lazy" format="webp" quality="100" />
		</div>
		<div class="testimonial__right">
			<h6 class="testimonial__name weight-500 heading-6">{{ testimonial.name }}</h6>
			<ul class="testimonial__rating flex">
				<li v-for="i in testimonial.rating" :key="i">
					<IconsStar :size="isOnMobile ? '14' : '20'" />
				</li>
			</ul>
			<p class="testimonial__comment paragraph-2 text-paragraph">{{ testimonial.comment }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.testimonial {
	gap: 1.2rem;

	@media screen and (min-width: 600px) {
		gap: 2rem;
	}

    @media screen and (min-width: 992px) {
		gap: 2.8rem;
	}

	&:not(:last-child) {
		margin-bottom: 1.8rem;
		padding-bottom: 1.8rem;
		border-bottom: 1px solid #dfd8ce;

		@media screen and (min-width: 600px) {
			margin-bottom: 3.8rem;
			padding-bottom: 3.8rem;
		}
	}

    &:last-child {
        @media screen and (max-width: 600px) {
            display: none;
        }
    }

	&__left {
		flex-shrink: 0;
	}

	&__image {
		height: 3.2rem;
		width: 3.2rem;
		object-fit: cover;
		border-radius: 50%;

		@media screen and (min-width: 600px) {
			height: 4.8rem;
			width: 4.8rem;
		}

		@media screen and (min-width: 992px) {
			height: 6.4rem;
			width: 6.4rem;
		}
	}

	&__rating {
		gap: 0.4rem;
		margin-bottom: 0.7rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 1.4rem;
		}
	}
}
</style>
