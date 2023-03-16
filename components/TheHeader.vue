<script lang="ts" setup>
const navbarLinks = [
	{ name: "index", title: "Home" },
	{ name: "about", title: "About Us" },
	{ name: "portfolio", title: "Portfolio" },
	{ name: "reviews", title: "Reviews" },
	{ name: "contact-us", title: "Contact us" },
];
</script>

<template>
	<header class="base-header">
		<nav class="navbar flex items-center space-between container">
			<NuxtLink :to="{ name: 'index' }"> <IconsAblixLogo /> </NuxtLink>

			<ul class="navbar__links flex items-center">
				<li v-for="link in navbarLinks" :key="link.name" class="navbar__link-item">
					<NuxtLink class="navbar__link" :class="{ 'navbar__link--active': $route.name === link.name }" :to="{ name: link.name }">{{ link.title }}</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
.base-header {
	padding: 3.4rem 0;
	margin-bottom: 4.4rem;
}

.navbar {
	&__links {
		gap: 5.2rem;
	}

	&__link {
		font-size: 1.6rem;
		line-height: 2.6rem;
		color: #897c76;
		transition: all 0.3s ease-in-out;

		&--active,
		&:hover {
			font-weight: 600;
			color: var(--black-color);
		}
	}
}
</style>
