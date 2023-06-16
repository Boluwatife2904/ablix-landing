<script setup lang="ts">
const { isOnMobile } = useDeviceType();

const buttonFill = ref("#110804");

const scroll = () => window.scrollBy(0, 500);
</script>

<template>
	<section class="container">
		<div class="home-hero">
			<div class="home-hero__top">
				<small class="home-hero__subheading text-uppercase paragraph-1 text-light-grey">😎 GIVING YOU THE BEST DESIGNS</small>
				<h1 class="text-uppercase heading-1 satoshi-font weight-700">saving world with good designs.</h1>
			</div>
			<div class="home-hero__bottom grid">
				<div class="home-hero__left position-relative">
					<ul class="home-hero__list flex flex-wrap">
						<li class="home-hero__list-item paragraph-2 flex items-center">
							<div class="home-hero__list-item__icon flex items-center content-center"><IconsCheck /></div>
							24/7 Online support
						</li>
						<li class="home-hero__list-item paragraph-2 flex items-center">
							<div class="home-hero__list-item__icon flex items-center content-center"><IconsCheck /></div>
							Quick communication
						</li>
					</ul>
					<p class="home-hero__paragraph text-paragraph">Saving World with Good Designs. Because your satisfaction is everything. We are providing the best designs.</p>
					<BaseButton class="home-hero__cta text-uppercase" button-size="flat-medium" :has-border="true">start a project</BaseButton>
					<BaseButton variant="outline-grey" button-size="rounded-small" class="scroll-down__button" @mouseover="buttonFill = 'white'" aria-label="Scroll Down" @mouseout="buttonFill = '#110804'" @click.native="scroll">
						<IconsArrow :size="isOnMobile ? '12' : '16'" variant="down" :fill="buttonFill" />
					</BaseButton>
					<span class="position-absolute green-arrow">
						<IconsGreenArrow />
					</span>
				</div>
				<div class="home-hero__right position-relative">
					<div class="home-hero__image">
						<NuxtImg src="/hero-image.png" alt="Hero Section Image" format="webp" quality="100" height="100" width="100" />
					</div>
					<button class="play-button position-absolute flex items-center content-center" aria-label="Play">
						<IconsPlay />
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.home-hero {
	border-bottom: 2px dashed #e7dfd7;
	padding-bottom: 2.8rem;

	@media screen and (min-width: 600px) {
		padding-bottom: 7rem;
	}

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

	&__left {
		max-width: 38.7rem;
		margin-top: 2.8rem;

		@media screen and (min-width: 600px) {
			margin-top: 5.5rem;
		}
	}

	&__list {
		margin-bottom: 1.4rem;
		gap: 2.4rem;

		@media screen and (min-width: 600px) {
			gap: 4.4rem;
			margin-bottom: 3rem;
		}

		&-item {
			color: #897c76;

			&__icon {
				background: #f9ebdb;
				height: 1.6rem;
				width: 1.6rem;
				margin-right: 1rem;
				border-radius: 50%;

				@media screen and (min-width: 600px) {
					height: 2.4rem;
					width: 2.4rem;
				}
			}
		}
	}

	&__paragraph {
		@include font-sizing(1.4rem, 2.4rem, 1.6rem, 2.6rem, 1.6rem, 2.6rem);
		margin-bottom: 2.8rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 3.8rem;
		}
	}

	&__cta {
		@media screen and (min-width: 992px) {
			margin-bottom: 11.6rem;
		}
	}

	&__bottom {
		gap: 4.5rem 18.5rem;

		@media screen and (min-width: 992px) {
			justify-content: space-between;
			grid-template-columns: 38.7rem auto;
		}
	}

	&__image {
		@media screen and (min-width: 992px) {
			height: 44rem;
		}

		img {
			display: block;
			min-height: 100%;
			width: 100%;
			object-fit: fill;
		}
	}
}

.scroll-down__button {
	display: none !important;

	@media screen and (min-width: 992px) {
		display: flex !important;
	}
}

.green-arrow {
	bottom: 7rem;
	right: -10.5rem;
	display: none;

	@media screen and (min-width: 992px) {
		display: block;
	}
}

.play-button {
	top: 50%;
	left: 50%;
	background: rgba(44, 37, 54, 0.6);
	transform: translate(-50%, -50%);
	height: 3.4rem;
	width: 3.4rem;
	border-radius: 50%;

	@media screen and (min-width: 992px) {
		height: 7.2rem;
		width: 7.2rem;
	}

	svg {
		height: 1rem;
		width: 1rem;

		@media screen and (min-width: 992px) {
			height: 2.4rem;
			width: 2.4rem;
		}
	}
}
</style>
