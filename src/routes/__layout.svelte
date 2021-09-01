<script>
    import "../app.postcss";
    import Player from '$lib/Player.svelte';
    import Header from '$lib/Header.svelte';
</script>

<Player />
<Header />

<div class="max-w-screen-lg mx-auto border-b border-gray-600 bg-gray-900 text-white h-full"
    style="background-image: url('bg-gradient.png'); background-repeat: repeat-x;">
    <slot></slot>
</div>