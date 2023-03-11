export function useDeviceType() {
	const isOnMobile = ref(true);

	const checkScreenWidth = () => {
		isOnMobile.value = window.innerWidth <= 600;
	};

	onMounted(() => {
		checkScreenWidth();
		window.addEventListener("resize", checkScreenWidth);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", checkScreenWidth);
	});

	return { isOnMobile };
}
