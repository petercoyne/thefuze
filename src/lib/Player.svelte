<script>
    import { onMount } from 'svelte';
    import { slide } from 'svelte/transition';
    import { track, playing } from '$lib/currentTrack.js';

    var wavesurfer; // wavesurfer instance

    let currentTrackName = "🔊 Listen Now";

    let showPlaylist = false;

    $: $track, handleTrackChange();

    function handleTrackChange() {
        if ($track != -1) { // init state
            wavesurfer.load(tracks[$track].src);
            currentTrackName = tracks[$track].name;
            if ($playing == 1) {
                wavesurfer.play();
            }
        }
    }

    $: $playing, handlePlayPause();

    function handlePlayPause() {
        if ($playing == 0) {
            wavesurfer.pause();
        } else if ($playing == 1) {

            if ($track == -1) { // if play on init
                track.set(0);
                currentTrackName = tracks[0].name;
                wavesurfer.load(tracks[0].src);
            }

            wavesurfer.play();
        }
    }
    
    let tracks = [
        { name: 'Its A Sunday Morning', length: '4:03', src: '/music/01-its-a-sunday-morning.mp3' },
        { name: 'Voices', length: '2:54', src: '/music/02-voices.mp3'},
        { name: 'Zealano', length: '3:03', src: '/music/03-zealano.mp3' },
        { name: 'Its Not Too Late', length: '3:22', src: '/music/04-its-not-too-late.mp3' },
        { name: 'Back In Time', length: '4:31', src: '/music/05-back-in-time.mp3' },
        { name: 'Insanity', length: '4:19', src: '/music/06-insanity.mp3' },
        { name: 'The Journey', length: '5:20', src: '/music/07-the-journey.mp3' },
        { name: 'Stone Age Man', length: '2:51', src: '/music/08-stone-age-man.mp3' },
        { name: 'New Boy', length: '3:17', src: '/music/09-new-boy.mp3' },
        { name: 'Scenes From A Movie', length: '', src: '/music/10-scenes-from-a-movie.mp3' },
        { name: 'The Forces', length: '', src: '/music/11-the-forces.mp3' },
        { name: 'Way Of Doin', length: '', src: '/music/12-way-of-doin.mp3' },
        { name: 'I Am A Soldier', length: '', src: '/music/13-i-am-a-soldier.mp3' },
        { name: 'Space Boys Never Die', length: '', src: '/music/14-space-boys-never-die.mp3' },
        { name: 'Once In The Daytime', length: '', src: '/music/15-once-in-the-daytime.mp3' },
        { name: 'Mystical Forces (Live in Salthill)', length: '', src: '/music/16-mystical-forces-salthill.mp3' },
        { name: 'Ive Heard Angels (Live in Maam Cross', length: '', src: '/music/17-ive-heard-angels-maam-cross.mp3' },
        { name: 'Invasion (Live in Tramore)', length: '', src: '/music/18-invasion-tramore.mp3' },
        { name: 'Look What Shes Done To Me (Live in Dublin)', length: '', src: '/music/19-look-what-shes-done-to-me-dublin.mp3' },
        { name: 'Shining Star (Live in Claremorris)', length: '', src: '/music/20-shining-star-claremorris.mp3' },
    ];
    
    let ff = function() {
        playing.set(0); // pause
        track.update(n => ((n + 1) % tracks.length) ); // change track
    }
    let rw = function() {
        playing.set(0);
        if ($track > 0) { // don't rewind past 0
            track.update(n => n - 1);
        }
    }
    
    onMount(() => {

        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#F59E0B',
            progressColor: '#B45309',
            height: 32,
            barWidth: 2,
            backend: 'MediaElement'
        });
    
        wavesurfer.on('ready', function() {
            $playing = 1;
        });
    
        wavesurfer.on('error', function(e) {
            console.warn(e);
        });
    
        wavesurfer.on('finish', function() {
            ff();
        });
    })
    
    let togglePlaylist = function() {
        showPlaylist = !showPlaylist;
    }
    
    </script>
    
<div class="border-t border-gray-700 bg-black text-white fixed bottom-0 right-0 left-0 z-30 overflow-y-scroll max-h-screen"
    style="background-image: url('bg-gradient.png'); background-repeat: repeat-x;">
        
    {#if showPlaylist}
    <div class="flex pt-6 overflow-auto overscroll-contain" transition:slide>
        <div class="hidden sm:block pl-6"><img src="bftp.jpg" alt="A Blast from the Past" class="w-24"></div>
        <ul class="px-6 flex-grow">
            {#each tracks as { name, src }, i}
                <li
                    class="cursor-pointer py-2 border-b border-gray-800 text-sm"
                    class:bg-gray-800={i == $track}
                    on:click={() => track.set(i)}>
                    <span class="text-gray-500 mr-2">{i + 1}</span> {name}
                </li>
            {/each}
        </ul>
    </div>
    {/if}

    <div class="sticky bottom-0 bg-black md:py-2" style="background-image: url('bg-gradient.png'); background-repeat: repeat-x;">
        <!-- <h6 class="text-gray-200 pb-3">Music</h6> -->

    
        <div class="flex items-center" transition:slide>
            
            <button on:click={rw} class:text-gray-500={$track <= 0}>
                <svg class="w-14 h-16 pl-4 py-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"></path></svg>
            </button>
    
            {#if $playing != 1}
            <button id="playause" on:click={() => playing.set(1)}>
                <svg class="w-14 h-16 p-2 px-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
            {:else}
            <button id="pause" on:click={() => playing.set(0)}>
                <svg class="w-14 h-16 p-2 px-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button>
            {/if}
    
            <button on:click={ff} class:text-gray-500={$track + 1 >= tracks.length || $track == -1}>
                <svg class="w-14 h-16 py-3 pr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"></path></svg>
            </button>

            <div class="cursor-pointer text-s px-0 h-16 flex flex-col justify-center pr-4 md:pl-6" on:click={() => playing.set(1)}>
                <div class="text-xs uppercase text-gray-400">The Fuze</div>
                <div class="text-xs sm:text-sm">{ currentTrackName }</div>
            </div>

            <div
                id="waveform"
                class="flex-grow"
                transition:slide>
                <!-- Here be waveform -->
            </div>

            <div class="cursor-pointer text-gray-500 hover:text-blue-300 flex" on:click={togglePlaylist}>
                <div class="hidden sm:flex flex-col justify-center h-16 text-xs cursor-pointer ml-4">
                    <div>track list</div>
                </div>
                {#if showPlaylist}
                    <!-- <svg class="w-8 h-8 ml-4" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> -->
                    <svg class="w-16 h-16 p-4 md:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                {:else}
                    <img src="/playlist.svg" class="w-16 h-16 p-4 md:mr-3" alt="Show playlist" />
                    <!-- <svg class="w-16 h-16 p-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg> -->
                {/if}
            </div>
        </div>
    </div>

</div>