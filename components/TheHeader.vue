<script lang="ts" setup>
const navbarLinks = [
	{ name: "index", title: "Home" },
	{ name: "about", title: "About Us" },
	{ name: "portfolio", title: "Portfolio" },
	{ name: "reviews", title: "Reviews" },
	{ name: "contact-us", title: "Contact us" },
];

const navbarIsOpen = ref(false);

const toggleNavbar = () => (navbarIsOpen.value = !navbarIsOpen.value);
</script>

<template>
	<header class="base-header">
		<nav class="navbar flex items-center space-between container">
			<NuxtLink :to="{ name: 'index' }" class="navbar__logo" title="Ablix Studio Logo"> <IconsAblixLogo /> </NuxtLink>

			<ul class="navbar__links items-center">
				<li v-for="link in navbarLinks" :key="link.name" class="navbar__link-item">
					<NuxtLink class="navbar__link" :class="{ 'navbar__link--active': $route.name === link.name }" :to="{ name: link.name }">{{ link.title }}</NuxtLink>
				</li>
			</ul>

			<transition name="slidein" mode="out-in" appear>
				<ul v-if="navbarIsOpen" class="navbar-mobile__links flex flex-column">
					<li v-for="link in navbarLinks" :key="link.name" class="navbar-mobile__link-item">
						<NuxtLink class="navbar__link flex items-center" :class="{ 'navbar__link--active': $route.name === link.name }" :to="{ name: link.name }">{{ link.title }} <IconsArrow size="12" fill="var(--black-color)" /> </NuxtLink>
					</li>
				</ul>
			</transition>

			<button class="navbar__toggler flex flex-column" :class="{ 'navbar__toggler--active': navbarIsOpen }" @click="toggleNavbar">
				<span></span>
				<span></span>
				<span></span>
			</button>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
.base-header {
	position: relative;
    padding: 3.4rem 0;

	@media screen and (min-width: 992px) {
		margin-bottom: 4.4rem;
	}
}

.navbar {
	&__logo {
		line-height: 0;
	}

	&__links {
		display: none;
		gap: 5.2rem;

		@media screen and (min-width: 768px) {
			display: flex;
		}
	}

	&__link {
		font-size: 1.6rem;
		line-height: 2.6rem;
		color: #897c76;
		transition: all 0.3s ease-in-out;
		gap: 1.4rem;

		&--active,
		&:hover {
			font-weight: 500;
			color: var(--black-color);
		}
	}

	&__toggler {
		display: flex;
		gap: 0.5rem;

		span {
			background-color: var(--black-color);
			width: 3rem;
			height: 0.3rem;
			border-radius: 1rem;
			transition: all 0.3s;
		}

		&--active {
			span {
				&:first-child {
					transform: translate(0rem, 0.6rem) rotate(45deg);
				}

				&:nth-child(2) {
					transform: translateX(-3rem);
					opacity: 0;
					visibility: hidden;
				}

				&:last-child {
					transform: translate(0rem, -1rem) rotate(-45deg);
				}
			}
		}

		@media screen and (min-width: 768px) {
			display: none;
		}
	}
}

.navbar-mobile {
	&__links {
		position: absolute;
		top: 8rem;
		left: 0;
		width: 100%;
		line-height: auto;
		padding: 1rem 2rem 3rem;
		gap: 1.6rem;
		background-color: #faf5ef;
        z-index: 1;

		@media screen and (min-width: 600px) {
			padding: 1rem 3.2rem 4rem;
		}

		@media screen and (min-width: 768px) {
			display: none;
		}
	}
}
</style>
