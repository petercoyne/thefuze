<script>
	export let y;
</script>

<div class="grid grid-rows-1 grid-cols-1 w-screen" style="height: calc(100vh - 4rem);">
	<img
		src="/bg4b.webp"
		alt="background"
		class="w-full h-full object-cover"
		style="grid-row-start: 1; grid-column-start: 1; transform: translate(0,{0.2 *
			y}px); z-index: -10"
	/>
	<div
		class="logo-container flex w-full h-full justify-center pb-24"
		style="grid-row-start: 1; grid-column-start: 1"
	>
		<img
			src="/logo.png"
			alt=""
			class="w-2/3 sm:w-1/2 xl:w-1/3 self-center"
			style="transform: translate(0,{-0.5 * y}px); opacity: {1 - 0.004 * y}"
		/>
	</div>

	<div
		class="flex h-full scroll-indicator justify-center items-end pb-24"
		style="grid-row-start: 1; grid-column-start: 1;"
	>
		<a href="#maincontent" class="">
			<svg
				class="bg-white bg-opacity-70 rounded-full w-10 h-10 mb-8 p-2 z-30 mx-auto animate-bounce text-black"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
				/></svg
			>
		</a>
	</div>
</div>
