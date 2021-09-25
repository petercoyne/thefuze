<script>
    import "../app.postcss";
    import Player from '$lib/Player.svelte';
    import { track, playing } from '$lib/currentTrack.js'
</script>

<!-- <p class="text-white text-4xl p-8">Track: {$track}, playing {$playing}</p> -->

<slot></slot>
<Player/>