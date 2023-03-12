<script setup lang="ts">
const recentWorks = [
	{ image: "/website-design.png", title: "website design", body: "Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is." },
	{ image: "/website-development.png", title: "website development", body: "Saving World with Good Designs. Because your satisfaction is everything." },
	{ image: "/branding-logo.png", title: "branding logo", body: "Saving World with Good Designs. Because your satisfaction is everything." },
];
</script>

<template>
	<section class="container">
		<div class="recent-works">
			<div class="recent-works__header">
				<div class="recent-works__header--left">
					<p class="body-small text-light-grey text-uppercase">our portfolio</p>
					<h2 class="heading-2 text-black text-uppercase satoshi-font weight-700">our recent works</h2>
				</div>
				<div class="recent-works__header--right"></div>
			</div>
			<div class="recent-works__body grid">
				<HomeRecentWorkItem v-for="work in recentWorks" :key="work.title" :work="work" />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.recent-works {
	padding: 7rem 0;

	@media screen and (min-width: 600px) {
		padding: 15rem 0;
	}

	&__header {
		margin-bottom: 2.8rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 7rem;
		}
	}

	&__body {
		gap: 2.2rem 0;

		@media screen and (min-width: 600px) {
			gap: 5.2rem 4.2rem;
			grid-template-columns: repeat(2, 1fr);
		}
	}
}
</style>
