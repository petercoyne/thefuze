<script>
    export let author, date, info;
</script>

<div class="m-8 mb-4 flex">
    <div class="text-6xl hidden sm:block text-gray-400">&ldquo;</div>
    <div class="px-4 sm:px-8 flex-grow text-sm leading-relaxed text-center">
        <slot></slot>
    </div>
    <div class="text-6xl relative hidden sm:block self-end text-gray-400 -mb-6">&rdquo;</div>
</div>

<p class="text-center mx-8 text-white">- {author}, {date}</p>
{#if info}
    <p class="text-center text-xs mx-8 mb-8">({info})</p>
{/if}