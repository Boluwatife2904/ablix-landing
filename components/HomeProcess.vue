<script setup lang="ts"></script>

<template>
	<section class="our-process">
		<div class="container">
			<div class="our-process__wrapper"></div>
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
		padding: 13rem 13.5rem;
	}
}
</style>
