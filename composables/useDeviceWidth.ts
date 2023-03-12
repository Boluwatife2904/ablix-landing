export function useDeviceType() {
	const isOnMobile = ref(true);
    const deviceWidth = ref(0);

	const checkScreenWidth = () => {
		isOnMobile.value = window.innerWidth <= 600;
        deviceWidth.value = window.innerWidth;
	};

	onMounted(() => {
		checkScreenWidth();
		window.addEventListener("resize", checkScreenWidth);
	});

	onUnmounted(() => {
		window.removeEventListener("resize", checkScreenWidth);
	});

	return { isOnMobile, deviceWidth };
}
