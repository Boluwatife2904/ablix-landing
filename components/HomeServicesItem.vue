<script setup lang="ts">
interface Service {
	title: string;
	content: string;
}

interface Props {
	service: Service;
}

defineProps<Props>();
</script>

<template>
	<div class="service-item flex space-between">
		<div class="service-item__left">
			<h3 class="service-item__title heading-3 satoshi-font weight-700 text-uppercase">{{ service.title }}</h3>
			<p class="service-item__body paragraph-1 text-paragraph">{{ service.content }}</p>
		</div>
		<div class="service-item__right">
			<a href="#" title="Learn More" class="text-black weight-600 paragraph-1">Learn More</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.service-item {
	gap: 1.1rem;

	&:not(:last-child) {
		padding-bottom: 1.8rem;
		margin-bottom: 1.8rem;
		border-bottom: 0.1rem solid #d8d0c7;

		@media screen and (min-width: 600px) {
			padding-bottom: 4.8rem;
			margin-bottom: 4.8rem;
		}
	}

	&__title {
		margin-bottom: 0.4rem;

		@media screen and (min-width: 600px) {
			margin-bottom: 1.8rem;
		}
	}

	&__body {
        max-width: 19.7rem;

        @media screen and (min-width: 500px) {
			max-width: 35.6rem;
		}
        
		@media screen and (min-width: 992px) {
			max-width: 100%;
		}
	}

	&__right {
		align-self: flex-end;
		flex-shrink: 0;

		@media screen and (min-width: 600px) {
			min-width: 8.9rem;
		}
	}
}
</style>
