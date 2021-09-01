<script context="module">
    const players = new Set()
  
    export function stopAll() {
      players.forEach(p => p.pause())
    }
  </script>
  
  <script>
    import { onMount } from 'svelte'
  
    export let src
    export let title
    
    let player
  
    onMount(() => {
      players.add(player)
    })
  </script>
  
  <div class="p-4 flex justify-between w-full">
      <p>{title}</p>
      <audio
          bind:this={player}
          {src}
          controls>
          <track kind="captions" />
      </audio>
  </div>