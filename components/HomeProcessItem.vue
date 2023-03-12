<script setup lang="ts">
interface Process {
	number: string;
	title: string;
	content: string;
}

interface Props {
	process: Process;
	isActive?: boolean;
}

interface Emits {
	(event: "toggle-process", value: string): void;
}

withDefaults(defineProps<Props>(), {
	isActive: false,
});

defineEmits<Emits>();

const start = (element: any) => {
	element.style.height = element.scrollHeight + "px";
};
const end = (element: any) => {
	element.style.height = "";
};
</script>

<template>
	<div class="process" :class="{ 'process--active': isActive }">
		<div class="process__header flex space-between">
			<h4 class="heading-4 process__title text-thin-2">{{ process.number }}. {{ process.title }}</h4>
			<BaseButton button-size="rounded-smallest" @click="$emit('toggle-process', process.number)">
				<IconsAccordion :variant="isActive ? 'opened' : 'closed'" />
			</BaseButton>
		</div>
		<transition name="accordion" @enter="start" @after-enter="end" @before-leave="start" @after-leave="end">
			<div v-if="isActive" class="process__body">
				<p class="text-white paragraph-1 text-thin-3">{{ process.content }}</p>
			</div>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.process {
	padding: 1.8rem 4.3rem 0rem 1.8rem;
	transition: all 0.3s ease;

	@media screen and (min-width: 600px) {
		padding: 2.8rem 5.4rem 0rem 2.8rem;
	}

	&--active {
		background: #2f2927;
		padding-bottom: 1.8rem;

		@media screen and (min-width: 600px) {
			padding-bottom: 2.8rem;
		}
	}

	&__title {
		font-weight: 500;
		max-width: 15.4rem;

		@media screen and (min-width: 600px) {
			font-weight: 400;
			max-width: 23.8rem;
		}
	}

	&__body {
		font-weight: 500;
		margin-top: 1rem;

		@media screen and (min-width: 600px) {
			font-weight: 400;
			margin-top: 1.6rem;
		}
	}
}
</style>
