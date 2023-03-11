<script lang="ts" setup></script>

<template>
	<footer class="footer">
		<div class="footer__top">
			<div class="footer__left">
				<div class="footer__wrapper">
					<h3 class="footer__heading">MENU</h3>
					<ul class="footer__links flex flex-wrap flex-column">
						<li>
							<nuxt-link to="#" class="footer__link-item">Home</nuxt-link>
						</li>
						<li>
							<nuxt-link to="#" class="footer__link-item">About Us</nuxt-link>
						</li>
						<li>
							<nuxt-link to="#" class="footer__link-item">Portfolio</nuxt-link>
						</li>
						<li>
							<nuxt-link to="#" class="footer__link-item">Reviews</nuxt-link>
						</li>
						<li>
							<nuxt-link to="#" class="footer__link-item">Contact Us</nuxt-link>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer__right">
				<div class="footer__wrapper footer__wrapper--right">
					<h3 class="footer__heading">FOLLOW US HERE</h3>
					<ul class="footer__socials flex flex-column">
						<li>
							<a href="#" class="footer__social-link flex items-center space-between" target="_blank" rel="noopener noreferrer">Instagram <IconsArrow size="12" fill="#110804" /> </a>
						</li>
						<li>
							<a href="#" class="footer__social-link flex items-center space-between" target="_blank" rel="noopener noreferrer">Twitter <IconsArrow size="12" fill="#110804" /> </a>
						</li>
						<li>
							<a href="#" class="footer__social-link flex items-center space-between" target="_blank" rel="noopener noreferrer">Email <IconsArrow size="12" fill="#110804" /> </a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer__bottom flex space-between">
			<p>Security & Privacy</p>
			<p>© 2022 Ablix All Right Reserved</p>
		</div>
	</footer>
</template>

<style lang="scss" scoped>
%footer-link {
	font-size: 1.2rem;
	line-height: 2.6rem;
	color: #4b423e;
	line-height: 2.2rem;

	@media screen and (min-width: 600px) {
		font-size: 1.6rem;
		line-height: 2.6rem;
	}
}

.footer {
	&__top {
		display: grid;
		gap: 2.1rem;
		padding-bottom: 3.8rem;
		margin-bottom: 1.4rem;
		border-bottom: 0.1rem solid #dfd8ce;

		@media screen and (min-width: 600px) {
			grid-template-columns: repeat(2, 1fr);
			gap: 6rem;
		}
	}

	&__wrapper {
		max-width: 14rem;

		@media screen and (min-width: 600px) {
			max-width: 46.4rem;
		}

		&--right {
			@media screen and (min-width: 600px) {
				margin-left: auto;
			}
		}
	}

	&__heading {
		font-weight: 500;
		font-size: 1.4rem;
		line-height: 2.4rem;
		color: var(--black-color);
		border-bottom: 0.1rem solid #dfd8ce;
		margin-bottom: 1.8rem;

		@media screen and (min-width: 600px) {
			font-size: 2rem;
			line-height: 3rem;
		}
	}

	&__socials {
		gap: 1.1rem;

		@media screen and (min-width: 600px) {
			align-items: center;
		}

		li {
			width: 100%;
			max-width: 14rem;

			@media screen and (min-width: 600px) {
				max-width: 19.1rem;
			}
		}
	}

	&__social-link {
		@extend %footer-link;
		gap: 1rem;
		border-bottom: 0.1rem solid #dfd8ce;
	}

	&__links {
		gap: 0.7rem 2rem;
		align-items: start;

		@media screen and (min-width: 600px) {
			flex-direction: row;
			align-items: center;
		}
	}

	&__link-item {
		@extend %footer-link;
	}

	&__bottom {
		flex-direction: column;
		padding-bottom: 1.9rem;

		@media screen and (min-width: 600px) {
			flex-direction: row-reverse;
			padding-bottom: 3.1rem;
		}

		p {
			font-size: 1rem;
			line-height: 2rem;
			color: #c5b7a7;

			@media screen and (min-width: 600px) {
				font-size: 1.4rem;
				line-height: 2.4rem;
			}
		}
	}
}
</style>
