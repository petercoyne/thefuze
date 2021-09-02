<script>
    import scrollSpy from 'simple-scrollspy'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition';

    const options = {
        sectionClass: '.scrollsection',           // Query selector to your sections
        menuActiveTarget: 'a',       // Query selector to your elements that will be added `active` class
        offset: 100                          // Menu item will active before scroll to a matched section 100px
    }
    onMount(() => {
        scrollSpy('#main-menu', options);
    });
</script> 

<img src="band-bftp.jpg" alt="The Band" class="w-full"/>
<div class="flex max-w-screen-lg mx-auto">
    <div id="sidebar" transition:fade class="hidden md:block p-4 w-48 flex-shrink-0 text-gray-300">
        <nav id="main-menu" class="p-4 pr-0 pt-12 sticky top-0">
            <h5 class="text-sm text-gray-400 px-1">BIO</h5>
            <a href="#thefuze" class="block text-xl my-2 px-1">The Fuze</a>
            <a href="#timeline" class="block text-xl mt-2 px-1">Timeline</a>
            <div class="border-l-2 border-gray-300 leading-none mx-1">
                <a href="#1977" class="block m-4">1977<br/><span class="text-gray-400 text-xs">Starting with a Sunburst</span></a>
                <a href="#1979" class="block m-4">1979</a>
            </div>
            <a href="#timeline" class="block text-xl my-2">Lineup</a>
        </nav>
    </div>

    <div id="thecontent" class="max-w-screen-md mb-24 flex-grow min-w-0">

        <section id="thefuze" class="mt-16 scrollsection">

            <div class="px-8">
                <h1 class="text-white text-5xl font-bold">The Fuze</h1>
                <p class="text-white text-4xl leading-10">A no-name band outa Galway, 1979 and counting.</p>
                <p class="text-gray-400 text-xl pt-2 leading-8">Colleges and commerce; art and pop; rock and punk. Strange bedfellows but passions were primed. <b>So go for it man.</b></p>    
            </div>

            <hr class="border-gray-700 my-8" />
    
            <div class="px-8 text-gray-300">
                <p>You could say it was heady, and it was. First a charity gig in the new Physics Hall. Idol virgins through sound. On into the future. The buzz man, the buzz. New Irish rock. The timing sweet and our own making it happen. Power, performance, energy. Something could explode, hear.</p>
                <p>You've gotta remember the late seventies and early eighties - because a fierce lot can't. The whole Galway of the Vibes thing birthing free-range students from its universal Cellar Bar, Lounge or Downstairs. Pre-conscious consciousness at its purest. Seven pints and a glass of Guinness. Two pints of Smithwicks and a pint of Harp, Sean, please (to dull the stench of corruption outside). And while you're at it, four Black Russians.</p>
                <p>And love was all around. Love of the truths shared in rocking the foundations. Coming, going, starting to leave. All the time trying to be faithful to an unhappy country.</p>
                <p>And the band became all. Careers and studies were abandoned. PA, lights and instruments leased. Engineers and roadies hired (and highered - if you'll excuse the expression). The ballrooms of Ireland throbbwed to one, last capacity crowd. Summer of eighty-one and Sunday Morning was happening ten times a day on Radio 2. The lads gigging six nights a week from Donegal to Dublin.</p>    
            </div>
        </section>

        <section id="timeline" class="p-8 mt-8 scrollsection">
            <h1 class="text-gray-500 text-2xl uppercase">Timeline</h1>
        </section>
        <section id="1977" class="text-gray-300 scrollsection">
            <p class="text-white text-6xl mb-8 px-8">1977</p>
            <hr class="mb-6 border-gray-700 " />
            <div class="px-8">
                <p>You could say it was heady, and it was. First a charity gig in the new Physics Hall. Idol virgins through sound. On into the future. The buzz man, the buzz. New Irish rock. The timing sweet and our own making it happen. Power, performance, energy. Something could explode, hear.</p>
                <p>You've gotta remember the late seventies and early eighties - because a fierce lot can't. The whole Galway of the Vibes thing birthing free-range students from its universal Cellar Bar, Lounge or Downstairs. Pre-conscious consciousness at its purest. Seven pints and a glass of Guinness. Two pints of Smithwicks and a pint of Harp, Sean, please (to dull the stench of corruption outside). And while you're at it, four Black Russians.</p>
                <p>And love was all around. Love of the truths shared in rocking the foundations. Coming, going, starting to leave. All the time trying to be faithful to an unhappy country.</p>
                <p>And the band became all. Careers and studies were abandoned. PA, lights and instruments leased. Engineers and roadies hired (and highered - if you'll excuse the expression). The ballrooms of Ireland throbbwed to one, last capacity crowd. Summer of eighty-one and Sunday Morning was happening ten times a day on Radio 2. The lads gigging six nights a week from Donegal to Dublin.</p>    
            </div>
        </section>

        <section id="1979" class="text-gray-300 scrollsection pt-8">
            <p class="text-white text-6xl mb-8 px-8">1979</p>
            <hr class="mb-6 border-gray-700 " />
            <div class="px-8">
                <p>You could say it was heady, and it was. First a charity gig in the new Physics Hall. Idol virgins through sound. On into the future. The buzz man, the buzz. New Irish rock. The timing sweet and our own making it happen. Power, performance, energy. Something could explode, hear.</p>
                <p>You've gotta remember the late seventies and early eighties - because a fierce lot can't. The whole Galway of the Vibes thing birthing free-range students from its universal Cellar Bar, Lounge or Downstairs. Pre-conscious consciousness at its purest. Seven pints and a glass of Guinness. Two pints of Smithwicks and a pint of Harp, Sean, please (to dull the stench of corruption outside). And while you're at it, four Black Russians.</p>
                <p>And love was all around. Love of the truths shared in rocking the foundations. Coming, going, starting to leave. All the time trying to be faithful to an unhappy country.</p>
                <p>And the band became all. Careers and studies were abandoned. PA, lights and instruments leased. Engineers and roadies hired (and highered - if you'll excuse the expression). The ballrooms of Ireland throbbwed to one, last capacity crowd. Summer of eighty-one and Sunday Morning was happening ten times a day on Radio 2. The lads gigging six nights a week from Donegal to Dublin.</p>    
            </div>
        </section>
        
    </div>

</div>
