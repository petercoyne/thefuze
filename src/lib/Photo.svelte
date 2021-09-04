<script>
    import { Lightbox } from 'svelte-lightbox';
    import lazyLoad from '$lib/lazyload';
    export let description, src, align;
    let twstring;

    switch (align) {
        case "left":
            twstring = "float-left sm:mr-8"; break;
        case "right":
            twstring = "float-right sm:ml-8"; break;
        case "center":
            twstring = "mx-auto"; break;
        case "full":
            twstring = "sm:w-full"; break;
        default:
            twstring = "";
    }
</script>

<Lightbox thumbnail description="{description}">
    <img slot="thumbnail" use:lazyLoad="{src}" class="w-full sm:w-3/5 mb-4 rounded-md border border-gray-700 {twstring}" alt="The Fuze">
    <img slot="image" class="w-screen max-h-screen" src="{src}" alt="{description}">
</Lightbox>