<script>
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
        { name: 'Its A Sunday Morning', length: '4:03', src: '/music/01-its-a-sunday-morning.mp3' },
        { name: 'Voices', length: '2:54', src: '/music/02-voices.mp3'},
        { name: 'Zealano', length: '3:03', src: '/music/03-zealano.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
        { name: 'Zealano', length: '', src: '/music/.mp3' },
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
        console.log("On Mount called");
        wavesurfer = WaveSurfer.create({
            container: '#waveform',
            waveColor: '#428bca',
            progressColor: '#001F41',
            height: 32,
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
            ff();
        });
    })
    
    let togglePlaylist = function() {
        showPlaylist = !showPlaylist;
    }
    
    </script>
    
<div class=" mx-auto bg-black text-white fixed bottom-0 right-0 z-30 overflow-y-scroll max-h-screen"
    style="background-image: url('bg-gradient.png'); background-repeat: repeat-x;">

    <div class="p-6">
        <!-- <h6 class="text-gray-200 pb-3">Music</h6> -->
        <div
            id="waveform"
            class:hidden={hidePlayer === true}
            transition:slide>
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
    
            <div class="hidden sm:inline text-xs cursor-pointer text-gray-500 mx-4" on:click={togglePlaylist}>
                {#if showPlaylist}
                    <span>Hide track list</span>
                {:else}
                    <span>Show full track list</span>
                {/if}
            </div>

            <div class="cursor-pointer sticky top-0" on:click={togglePlaylist}> 
                {#if showPlaylist}
                    <!-- <svg class="w-8 h-8 ml-4" fill="none" stroke="red" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg> -->
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>                {:else}
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>                {/if}
            </div>
        </div>
    </div>
    
    {#if showPlaylist}
    <div class="flex pb-6" transition:slide >
        <div class="hidden sm:block pl-6"><img src="bftp.jpg" alt="A Blast from the Past" class="w-24"></div>
        <ul class="px-6 flex-grow">
            {#each tracks as { name, src }, i}
                <li
                    class="cursor-pointer py-2 border-b border-gray-800 text-sm"
                    class:bg-gray-800={i == currentTrack}
                    on:click={() => setCurrentSong(i)}>
                    The Fuze - {name}
                </li>
            {/each}
        </ul>
    </div>
    {/if}
</div>