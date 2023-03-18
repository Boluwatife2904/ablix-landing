// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			title: "Ablix Studio",
			charset: "UTF-8",
			viewport: "width=device-width, initial-scale=1.0",
			meta: [
				{ hid: "theme_color", name: "theme-color", content: "#fe7e41" },
				{ hid: "description", name: "description", content: "Saving World with Good Designs. Because your satisfaction is everything." },
				{ hid: "og:description", name: "og:description", content: "Saving World with Good Designs. Because your satisfaction is everything." },
				{ hid: "og:title", name: "og:title", content: "Ablix Studio" },
				{ hid: "og:site_name", name: "og:site_name", content: "Ablix Studio" },
				{ hid: "og:url", name: "og:url", content: "https://ablix-landing.vercel.app" },
				{ hid: "og:type", name: "og:type", content: "website" },
				{ hid: "og:image", name: "og:image", content: "https://res.cloudinary.com/juwon-tech/image/upload/v1679126627/ablix-ogimage_ultqxb.png" },
			],
		},
	},
	modules: ["@nuxt/image-edge"],
	css: ["@/assets/scss/main.scss", "@/assets/font.scss"],
});
