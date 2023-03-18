<script setup lang="ts">
interface Work {
	image: string;
	title: string;
	body: string;
}

interface Props {
	work: Work;
}

defineProps<Props>();
</script>

<template>
	<div class="recent-work">
		<div class="recent-work__image">
			<NuxtImg :src="work.image" :alt="work.title" loading="lazy" format="webp" quality="100" />
		</div>
		<div class="recent-work__content">
			<h3 class="heading-3 satoshi-font text-black text-uppercase weight-700 recent-work__title">{{ work.title }}</h3>
			<p class="paragraph-1 text-paragraph recent-work__body">{{ work.body }} <span>Check out our latest design of website and see how it is.</span></p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.recent-work {
	&:first-child {
		@media screen and (min-width: 600px) {
			grid-column: span 2;
		}
	}

	&:not(:first-child) {
		span {
			@media screen and (min-width: 992px) {
				display: none;
			}
		}
	}

	&__image {
		height: 100%;
		max-height: 17.9rem;
		margin-bottom: 0.8rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 2.2rem;
			height: initial;
			max-height: initial;
		}

		img {
			object-fit: cover;
			max-height: 100%;
			width: 100%;

			@media screen and (min-width: 600px) {
				max-height: initial;
			}
		}
	}

	&__title {
		margin-bottom: 0.2rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 1.2rem;
		}
	}

	&__body {
		@media screen and (min-width: 800px) {
			max-width: 85%;
		}

		@media screen and (min-width: 992px) {
			max-width: 58%;
		}
	}
}
</style>
