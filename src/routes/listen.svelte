<script>
import AudioPlayer, { stopAll } from './AudioPlayer.svelte'
import { onMount } from 'svelte'
import { slide } from 'svelte/transition';
//import WaveSurfer from 'wavesurfer.js'

// Create a WaveSurfer instance
var wavesurfer;

let currentTrack = -1;
let currentTrackName = "Click to listen";
let hidePlayer = true;
let isPlaying = false;

let showPlaylist = false;

let tracks = [
    { name: 'strauss', src: 'https://sveltejs.github.io/assets/music/strauss.mp3' },
    { name: 'holst', src: 'https://sveltejs.github.io/assets/music/holst.mp3'},
    { name: 'satie', src: 'https://sveltejs.github.io/assets/music/satie.mp3' }
];

let playPause = () => {
    if (currentTrack == -1) {
        setCurrentSong(0);
    }
    wavesurfer.playPause();
    isPlaying = wavesurfer.isPlaying();
}

let setCurrentSong = function(index) {
    hidePlayer = false;
    currentTrack = index;
    currentTrackName = tracks[index].name;
    wavesurfer.load(tracks[index].src);
};

let ff = function() {
    currentTrack = (currentTrack + 1) % tracks.length;
    setCurrentSong(currentTrack);
}
let rw = function() {
    currentTrack = (currentTrack - 1) % tracks.length;
    setCurrentSong(currentTrack);
}

onMount(() => {
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#428bca',
        progressColor: '#001F41',
        height: 48,
        barWidth: 2
    });

    wavesurfer.on('ready', function() {
        hidePlayer = false;
        wavesurfer.play();
        isPlaying = wavesurfer.isPlaying();
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    wavesurfer.on('finish', function() {
        currentTrack = (currentTrack + 1) % tracks.length;
        setCurrentSong(tracks[currentTrack]);
    });
})

let togglePlaylist = function() {
    showPlaylist = !showPlaylist;
}


</script>

<div class="p-6">
    <h6 class="text-gray-200 pb-3">Music</h6>
    <div
        id="waveform"
        class:hidden={hidePlayer === true}>
        <!-- Here be waveform -->
    </div>

    <div class="flex items-center" transition:slide>
        <button on:click={rw} class:text-gray-500={currentTrack <= 0}>
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path></svg>
        </button>

        <button id="playPause" on:click={playPause}>
            {#if !isPlaying}
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {:else}
            <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {/if}
        </button>

        <button on:click={ff} class:text-gray-500={currentTrack + 1 >= tracks.length || currentTrack == -1} class="pr-4">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg>
        </button>

        <div class="flex-grow cursor-pointer" on:click={playPause}>{ currentTrackName }</div>

        <span class="hidden sm:inline text-xs cursor-pointer text-gray-500" on:click={togglePlaylist}>See full track list</span>

        <div class="cursor-pointer" on:click={togglePlaylist}> 
            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 ml-4" fill="currentColor" viewBox="0 0 512 512"><path d="M48 368a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm0-160a48 48 0 1 0 48 48 48 48 0 0 0-48-48zm448 24H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16V88a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 160H176a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h320a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"/></svg>
        </div>
    </div>


</div>

{#if showPlaylist}
<ul transition:slide class="px-6 pb-2">
	{#each tracks as { name, src }, i}
		<li
        class="cursor-pointer py-2 border-t border-gray-600 text-sm"
            class:bg-gray-800={i == currentTrack}
            on:click={() => setCurrentSong(i)}>
            The Fuze - {name}
        </li>
	{/each}
</ul>
{/if}