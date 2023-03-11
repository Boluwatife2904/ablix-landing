<script lang="ts" setup></script>

<template>
	<div class="default-layout">
		<TheHeader />
		<main>
			<slot></slot>
		</main>
		<TheFooter />
	</div>
</template>

<style lang="scss" scoped>
.default-layout {
	padding: 0 1.8rem;
	max-width: 120rem;
	margin: 0 auto;

	@media screen and (min-width: 600px) {
		padding: 0 3.2rem;
	}
}
</style>
