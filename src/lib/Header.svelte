<script>
    import { page } from '$app/stores';
</script>

<div class="w-full grid grid-cols-1 grid-rows-1 max-w-screen-lg mx-auto border-b border-gray-600">
    <img src="/bg1crop-purp.webp" alt="" class="z-0 sm:hidden" style="grid-area: 1/1/1/1; min-width: 200%; margin-left: -50%"/>
    <img src="/bg1crop-purp.webp" alt="" class="z-0 sm:block hidden" style="grid-area: 1/1/1/1"/>

    <div class="z-20" style="grid-area: 1/1/1/1; margin-top: 12%">
        <img src="/logo.png" alt="" class="z-20 mx-auto w-2/3 sm:w-1/3 mt-8 sm:mt-0"/>
        <nav class="hidden mx-auto  justify-around items-center fuzestroke w-2/3 sm:w-1/3 text-md font-semibold lg:text-xl">

            <a href="/" class:nav-active={$page.path === '/'} sveltekit:prefetch class="nav-link">

                <img src="/bio.svg" alt="" class="w-5 h-5 mr-2 lg:w-7 lg:h-7">
                <div class="inline">Bio</div>

            </a>

            <a href="/listen" class:nav-active={$page.path === '/listen'} sveltekit:prefetch class="nav-link">

                <img src="/listen.svg" alt="" class="w-5 h-5 mr-2 lg:w-7 lg:h-7">
                <div>Listen</div>

            </a>

            <!-- <a href="#" class="p-2 rounded-md hover:bg-black hover:bg-opacity-25">
                <img src="sc.svg" alt="" class="w-7 h-5 lg:w-9 lg:h-7"/>
            </a> -->

            <a href="https://www.instagram.com/thefuzegalway/" class="p-2 rounded-md hover:bg-black hover:bg-opacity-25">
                <img src="/insta.svg" alt="" class="w-5 h-5 lg:w-7 lg:h-7"/>
            </a>

        </nav>
    </div>
</div>