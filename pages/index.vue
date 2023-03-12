<script lang="ts" setup>
const { deviceWidth } = useDeviceType()
</script>

<template>
    {{ deviceWidth }}
	<HomeRecentWorks />
	<HomeProcess />
	<HomeTestimonials />
	<TheCallToAction />
</template>

<style lang="scss" scoped></style>
