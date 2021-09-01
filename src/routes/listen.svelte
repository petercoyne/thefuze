<script>
import AudioPlayer, { stopAll } from './AudioPlayer.svelte'
import { onMount } from 'svelte'
import WaveSurfer from 'wavesurfer.js'

// Create a WaveSurfer instance
var wavesurfer;

let currentTrack = 0;
let tracks = [
    { id: '0', name: 'strauss', src: 'https://sveltejs.github.io/assets/music/strauss.mp3' },
    { id: '1', name: 'holst', src: 'https://sveltejs.github.io/assets/music/holst.mp3'},
    { id: '2', name: 'satie', src: 'https://sveltejs.github.io/assets/music/satie.mp3' }
];

let setCurrentSong = function(index, src) {
    currentTrack = index;
    wavesurfer.load(src);
};

onadaMount(() => {
    wavesurfer = WaveSurfer.create({
        container: '#waveform',
        waveColor: '#428bca',
        progressColor: '#31708f',
        height: 120,
        barWidth: 3
    });

    console.log("created");

    wavesurfer.on('ready', function() {
        wavesurfer.play();
    });

    wavesurfer.on('error', function(e) {
        console.warn(e);
    });

    wavesurfer.on('finish', function() {
        setCurrentSong((currentTrack + 1) % tracks.length);
    });
})

</script>

<div id="waveform">
    <!-- Here be waveform -->
    some text test
</div>

<button id="playPause" on:click={() => wavesurfer.playPause()}>
    <span id="play">
        <i class="glyphicon glyphicon-play"></i>
        Play
    </span>

    <span id="pause" class="">
        <i class="glyphicon glyphicon-pause"></i>
        Pause
    </span>
</button>

<div id="playlist">
    <a href="https://sveltejs.github.io/assets/music/strauss.mp3">strauss</a>
    <a href="https://sveltejs.github.io/assets/music/holst.mp3">holst</a>
    <a href="https://sveltejs.github.io/assets/music/satie.mp3">satie</a>
</div>

<ul>
	{#each tracks as { id, name, src }, i}
		<li on:click={() => setCurrentSong(id, src)}>{i + 1}: {name}</li>
	{/each}
</ul>