<script setup lang="ts">
const processes = [
	{ number: "1", title: "Discussion of the project", content: "Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is." },
	{ number: "2", title: "Conclusion of a contract", content: "Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is." },
	{ number: "3", title: "Text structure and logic", content: "Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is." },
	{ number: "4", title: "Design concept of the main page", content: "Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is." },
	{ number: "5", title: "Design of internal pages", content: "Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is." },
	{ number: "6", title: "Layout on Figma", content: "Saving World with Good Designs. Because your satisfaction is everything. Check out our latest design of website and see how it is." },
];
const activeProcess = ref("1");
const toggleActiveProcess = (processNumber: string) => {
	if (processNumber === activeProcess.value) {
		activeProcess.value = "";
		return;
	}
	activeProcess.value = processNumber;
};
</script>

<template>
	<section class="our-process">
		<div class="container">
			<div class="our-process__wrapper grid">
				<div class="our-process__left">
					<p class="paragraph-1 text-uppercase text-thin-3">our process</p>
					<h2 class="heading-2 text-white text-uppercase weight-700 satoshi-font">our process of working</h2>
				</div>
				<div class="our-process__right grid">
					<HomeProcessItem v-for="process in processes" :key="process.number" :process="process" :is-active="activeProcess === process.number" @toggle-process="toggleActiveProcess" />
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.our-process {
	background-color: var(--black-color);
	color: #fff;
	margin-bottom: 7rem;

	@media screen and (min-width: 600px) {
		margin-bottom: 15rem;
	}

	&__wrapper {
		gap: 2.8rem;
		padding: 3.8rem 0rem;

		@media screen and (min-width: 600px) {
			gap: 2.8rem 4rem;
			grid-template-columns: 3fr 2fr;
			padding: 13rem 0rem;
		}

		@media screen and (min-width: 992px) {
			gap: 2.8rem 10rem;
			grid-template-columns: 3fr 1fr;
		}
	}

	&__left {
		@media screen and (min-width: 600px) {
			order: 1;
		}

		p {
			@media screen and (min-width: 600px) {
				margin-bottom: 0.3rem;
			}
		}

		h2 {
			max-width: 30.5rem;

			@media screen and (min-width: 600px) {
				max-width: 27.6rem;
			}
		}
	}

	&__right {
		gap: 2.4rem 0;

		@media screen and (min-width: 600px) {
			gap: 5.4rem 7rem;
			grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
		}
	}
}
</style>
