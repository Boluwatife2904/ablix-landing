<script setup lang="ts"></script>

<template>
	<section class="container">
		<div class="home-hero">
			<div class="home-hero__top">
				<small class="home-hero__subheading text-uppercase paragraph-1 text-light-grey">😎 GIVING YOU THE BEST DESIGNS</small>
				<h1 class="text-uppercase heading-1 satoshi-font weight-700">saving world with good designs.</h1>
			</div>
			<div class="home-hero__bottom">
				<div class="home-hero__left">
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
					<BaseButton class="home-hero__cta text-uppercase" button-size="flat-medium">start a project</BaseButton>
				</div>
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
}
</style>
