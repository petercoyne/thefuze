<script>
    import scrollSpy from 'simple-scrollspy'
    import { onMount } from 'svelte'
    import { fade } from 'svelte/transition';
    import { Lightbox } from 'svelte-lightbox';

    const options = {
        sectionClass: '.scrollsection',           // Query selector to your sections
        menuActiveTarget: 'a',       // Query selector to your elements that will be added `active` class
        offset: 100                          // Menu item will active before scroll to a matched section 100px
    }
    onMount(() => {
        scrollSpy('#main-menu', options);
    });
</script> 

<img src="/band-bftp.jpg" alt="The Band" class="w-full mb-8"/>
<div class="flex max-w-screen-lg mx-auto">
    <div id="sidebar" transition:fade class="hidden md:block p-4 w-48 flex-shrink-0 text-gray-300">
        <nav id="main-menu" class="p-4 pr-0 pt-12 sticky top-0">
            <h5 class="text-sm text-gray-400 px-1">BIO</h5>
            <a href="#thefuze" class="block text-xl my-2 px-1">The Fuze</a>
            <a href="#timeline" class="block text-xl my-2 px-1">Timeline</a>
            <div class="border-l-2 border-gray-300 leading-none mx-1">
                <a href="#1977" class="block p-2 ml-2">1977<br/><span class="text-gray-400 text-xs">Starting with a Sunburst</span></a>
                <a href="#1979" class="block p-2 ml-2">1979<br/><span class="text-gray-400 text-xs">Front Man Wanted</span></a>
                <a href="#1980" class="block p-2 ml-2">1980<br/><span class="text-gray-400 text-xs">The Fuze Set Carousel Alight</span></a>
            </div>
            <a href="#lineup" class="block text-xl my-2 px-1">Lineup</a>
        </nav>
    </div>

    <div id="thecontent" class="max-w-screen-md mb-48 flex-grow min-w-0">
        <span id="maincontent" class="scrollsection"></span>

        <section id="thefuze" class="mt-16 scrollsection">

            <div class="px-8">
                <h1 class="text-white text-5xl font-bold">The Fuze</h1>
                <p class="text-white text-4xl my-4 leading-10">A no-name band outa Galway, 1979 and counting.</p>
                <p class="text-gray-400 text-xl pt-2 leading-8">Colleges and commerce; art and pop; rock and punk. Strange bedfellows but passions were primed. <b>So go for it man.</b></p>    
            </div>

            <hr class="border-gray-700 my-8" />
    
            <div class="px-8 text-gray-300">
                <p class="mb-4">You could say it was heady, and it was. First a charity gig in the new Physics Hall. Idol virgins through sound. On into the future. The buzz man, the buzz. New Irish rock. The timing sweet and our own making it happen. Power, performance, energy. Something could explode, hear.</p>
                <div class="mb-4 leading-7 font-light">
                    <Lightbox thumbnail description="The Fuze">
                        <img slot="thumbnail" src="/images/rockstars.jpg" class="w-full sm:w-2/3 float-right mb-4 sm:ml-8 sm:-mr-8 rounded-md border border-gray-700" alt="The Fuze">
                        <img slot="image" class="w-screen max-h-screen" src="/images/rockstars.jpg" alt="The Fuze">
                    </Lightbox>
                    You've gotta remember the late seventies and early eighties - because a fierce lot can't. The whole Galway of the Vibes thing birthing free-range students from its universal Cellar Bar, Lounge or Downstairs. Pre-conscious consciousness at its purest. Seven pints and a glass of Guinness. Two pints of Smithwicks and a pint of Harp, Sean, please (to dull the stench of corruption outside). And while you're at it, four Black Russians.
                </div>
                <p class="mb-4">And love was all around. Love of the truths shared in rocking the foundations. Coming, going, starting to leave. All the time trying to be faithful to an unhappy country.</p>
                <p>And the band became all. Careers and studies were abandoned. PA, lights and instruments leased. Engineers and roadies hired (and highered - if you'll excuse the expression). The ballrooms of Ireland throbbwed to one, last capacity crowd. Summer of eighty-one and Sunday Morning was happening ten times a day on Radio 2. The lads gigging six nights a week from Donegal to Dublin.</p>    
            </div>
        </section>

        <hr class="border-none my-8" />

        <section id="timeline" class="px-8 mt-12 scrollsection">
            <h1 class="text-gray-500 text-2xl uppercase mb-8">Timeline</h1>
        </section>

        <hr class="border-gray-700" />

        <section id="1977" class="text-gray-300 scrollsection py-8 bg-gray-900">
            <p class="text-white text-6xl mb-2 px-8">1977</p>
            <p class="text-lg text-gray-400 py-2 px-8">STARTING WITH A SUNBURST...</p>
            <div class="px-8">
                <p>The rock outfit begins life
                    when Claremorris native Mike (Stan) Staunton and Dubliner
                    Dave Fitzgerald meet during one of Dave's many trips to
                    Mayo. As students in Galway they hook up with Renmore
                    friends Mike Arrigan and Paul Gaughan (the two Mikes first
                    meet through the FCA). The fledgling group harbour a
                    common ambition to win Slogadh's band competition and
                    set about realising this goal. For the finals they put together
                    a set that includes an original composition, 'As We Are',
                    and duly set a packed Leisureland alight. Building on this
                    success, Sunburst establish themselves as one the city's
                    best live young bands over the next 18 months.</p>    
            </div>
        </section>

        <hr class=" border-gray-700 " />
        
        <section id="1979" class="text-gray-300 scrollsection py-8 pb-12 ">
            <p class="text-white text-6xl mb-2 px-8">1979</p>
            <p class="text-lg text-gray-400 py-2 px-8">FRONT MAN WANTED for original band</p>
            <div class="px-8">
                <p> So reads the advertisement posted on the
                    UCG notice board. Self-taught musician and
                    songwriter (and sometimes student) Pat
                    Coyne answers the call. Along with John
                    Fitzpatrick (medical student, keyboard player
                    and hometown neighbour of Stan's) they
                    unite with the lads from Sunburst and form
                    a six-piece. It isn't until after their first gig
                    that Dick Murphy (since, sadly, departed), a
                    work colleague of Mike Arrigan's, comes up with the name <i>The Fuze</i>.</p>
            </div>

            <div class="m-8 mb-4 flex pr-8">
                <div class="text-6xl hidden sm:block">&ldquo;</div>
                <div class="flex-grow">
                    <p class="px-0 sm:px-8 text-sm leading-relaxed text-center">
                        <span class="uppercase text-gray-300 font-bold">TALENT WAS ALSO OBVIOUS</span> when the band
                        with-no-name gave an impressive performance.
                        Loud, and with attack, these are a lively bunch,
                        especially Coyne, who pranced, danced and leaped
                        about the place, and generally dominated the
                        proceedings. They sang three original songs,
                        "Invasions (Bowie influence?), 'Moonlight
                        And Roses' and 'Don't You Touch Me', but helped them
                        go down with The Jags 'I Got Your Number' and
                        Steve Millar's classic 'Swingtown.'
                    </p>
                    <p class="mt-4 px-0 sm:px-8 text-sm leading-relaxed text-center">
                        Afterwards I met up with this nameless group,
                        three of whose members are in UCG. I was told that
                        this was their first public appearance and that
                        they'd only gotten together for this concert in the
                        past few days. They introduced themselves as Mike
                        Staunton, bass, John Fitzpatrick, keyboards, Dave
                        Fitzgerald, lead guitar, Paul Gaughan rhythm guitar,
                        Mike Arrigan, drums and percussion and how could
                        we forget?, Pat 'super' Coyne, lead singer. This
                        band has potential, only time will tell of their
                        commitment. Will a UCG rock band emerge?"
                    </p>
                </div>
                <div class="text-6xl relative hidden sm:block"><div class="absolute bottom-0">&rdquo;</div></div>
            </div>
            <p class="text-center pr-4"><b>- UCG Rag Mag, 1979</b><br/> (Review of The Fuze's first gig)</p>
        </section>

        <hr class="border-gray-700" />

        <section id="1980" class="text-gray-300 scrollsection py-8 bg-gray-900">
            <p class="text-white text-6xl mb-2 px-8">1980</p>
            <p class="text-lg text-gray-400 py-2 px-8">THE FUZE SET CAROUSEL ALIGHT</p>
            <div class="m-8 mb-4 flex pr-8">
                <div class="text-6xl hidden sm:block">&ldquo;</div>
                <div class="flex-grow">
                    <p class="px-0 sm:px-8 text-sm leading-relaxed text-center">
                        New wave band
The Fuze set the Carousel alight on Friday night with
their own special original sounds and, in the progress,
deservingly scooped the £1,000 prize and recording
contract as the outright winners of the Tramore Music
Festival. The Galway band had a definite edge
especially in originality over the other finalists in a
-
competition in which the overall standard was very
high. A six piece band, they seem destined for bigger
things and, properly promoted, who knows we may
even have another Boomtown Rats in the making..."

                    </p>
                </div>
                <div class="text-6xl relative hidden sm:block"><div class="absolute bottom-0">&rdquo;</div></div>
            </div>

            <p class="text-center"><b>- Munster Express, 1980</b></p>

            <div class="grid grid-cols-1 sm:grid-cols-2 mt-8 mb-12 items-center bg-gray-800">
                <img src="/images/1980.webp" class="" alt="Dave Fanning's Top 10 Rock Tracks"/>
                <p class="text-center  p-8"><i>&ldquo;I&apos;ve my dreams set on writing and performing original songs&rdquo;</i> a 19-year-old Pat reveals in an interview. He does both with style.</p>
            </div>
            

            <div class="m-8 mb-4 flex pr-8">
                <div class="text-6xl hidden sm:block">&ldquo;</div>
                <div class="flex-grow">
                    <p class="pb-4 px-0 sm:px-8 text-sm leading-relaxed text-center">
                        ON THEIR FIRST excursion outside Galway The Fuze walked away with first prize at the Tramore Band Competition which, among other things, landed them a record deal with Mulligan Records. On their second jaunt away from home they walk away with the prize for the best Dublin debut by any band, earning them this 'rave' review and probably the kiss-of-death. Together since November 79 they have established a very individual sound with definite influences from The Rats, U2 and even Madness in 'I Am A Soldier. Pat Coyne's lyrics and vocal style revealed considerable potential,
                        <p class="px-0 sm:px-8 text-sm leading-relaxed text-center">
                        especially when joined on vocals by guitarist Paul Gaughan. John Fitzpatrick's keyboards add a lot of colour and ideas to the sound especially on their upcoming single 'Stone Age Man. The even superior 'It's A Sunday Morning' is more typical of their overall modern Bowie influenced style, which can keep you dancing while listening to subtle underpinnings and off-beat themes. The Fuze have ideas and ability in abundance. Watch them go."

                        

                    </p>
                </div>
                <div class="text-6xl relative hidden sm:block"><div class="absolute bottom-0">&rdquo;</div></div>
            </div>
            <p class="text-center"><b>- Senan Turnbull, Hotpress, 1980</b><br/>(Review of gig in the Project Arts Centre, Dublin)</p>
        </section>

        <hr class="border-gray-700" />






    </div>

</div>
