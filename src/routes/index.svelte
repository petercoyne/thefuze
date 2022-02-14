<script>
	import scrollSpy from 'simple-scrollspy'
	import { onMount } from 'svelte'
	import { fade, slide } from 'svelte/transition';
	import Photo from '$lib/Photo.svelte';
	import Review from '$lib/Review.svelte';
	import Header from '$lib/Header.svelte';
	import { track, playing } from '$lib/currentTrack.js';

	const options = {
		sectionClass: '.scrollsection',     // Query selector to your sections
		menuActiveTarget: 'a',              // Query selector to your elements that will be added `active` class
		offset: 100                         // Menu item will active before scroll to a matched section 100px
	}
	onMount(() => {
		scrollSpy('#main-menu', options);
	});
	let y;

	let menushow = false;
	function toggleMobileMenu() {
		menushow = !menushow;
	}
</script>

<svelte:window bind:scrollY={y}/>

<Header bind:y />

<a on:click="{toggleMobileMenu}" id="mobilemenubutton" class="fixed border backdrop-blur border-gray-700 md:hidden z-50 top-4 right-0 bg-black bg-opacity-50 rounded-full p-4 m-4 hover:bg-white hover:bg-opacity-30 cursor-pointer transition-colors">
	{#if !menushow}
	<img transition:slide src="/menu.svg" alt="" srcset="" width="24" height="24">
	{:else}
	<img transition:slide src="/x.svg" alt="" srcset="" width="24" height="24">
	{/if}
</a>

{#if menushow}
<div id="mobilemenu" transition:fade on:click="{toggleMobileMenu}">
	<nav id="mobile-menu" class="md:hidden top-8 left-8 right-24 rounded-2xl fixed p-8 bg-black bg-opacity-70 backdrop-blur-lg border border-gray-700">
		<a href="#thefuze" class="block text-xl my-2 px-1">The Fuze</a>
		<a href="#timeline" class="block text-xl my-2 px-1">Timeline</a>
		<div class="border-l-2 border-gray-300 leading-none mx-1">
			<a href="#1977" class="block p-2 ml-2">1977<br/><span class="text-gray-400 text-xs">Starting with a Sunburst</span></a>
			<a href="#1979" class="block p-2 ml-2">1979<br/><span class="text-gray-400 text-xs">Front Man Wanted</span></a>
			<a href="#1980" class="block p-2 ml-2">1980<br/><span class="text-gray-400 text-xs">The Fuze Set Carousel Alight</span></a>
			<a href="#1981" class="block p-2 ml-2">1981<br/><span class="text-gray-400 text-xs">The Fuze is Lit</span></a>
		</div>
		<a href="#lineup" class="block text-xl my-2 px-1">Lineup</a>
		<a href="#videos" class="block text-xl my-2 px-1">Videos</a>
		<a href="#buycd" class="block text-xl my-2 px-1">Buy CD</a>
		<a href="#more" class="block text-xl my-2 px-1">More</a>
	</nav>
</div>
{/if}

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
				<a href="#1981" class="block p-2 ml-2">1981<br/><span class="text-gray-400 text-xs">The Fuze is Lit</span></a>
			</div>
			<a href="#lineup" class="block text-xl my-2 px-1">Lineup</a>
			<a href="#videos" class="block text-xl my-2 px-1">Videos</a>
			<a href="#buycd" class="block text-xl my-2 px-1">Buy CD</a>
			<a href="#more" class="block text-xl my-2 px-1">More</a>
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
					<Photo description="The Fuze" src="/images/rockstars.jpg" align="right"/>
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
			<p class="text-white text-6xl mb-2 mt-4 px-8">1977</p>
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
		
		<section id="1979" class="text-gray-300 scrollsection my-8 pb-12 ">
			<p class="text-white text-6xl mb-2 mt-12 px-8">1979</p>
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

			<Review author="UCG Rag Mag" date="1979" info="Review of The Fuze's first gig">
				<p>
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
				<p class="mt-4">
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
			</Review>
		</section>

		<hr class="border-gray-700" />

		<section id="1980" class="text-gray-300 scrollsection py-8 bg-gray-900">
			<p class="text-white text-6xl mb-2 px-8 mt-4">1980</p>
			<p class="text-lg text-gray-400 py-2 px-8">THE FUZE SET CAROUSEL ALIGHT</p>

			<Review author="Munster Express" date="1980">
				<p>
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
					even have another Boomtown Rats in the making...
				</p>
			</Review>

			<div class="grid grid-cols-1 sm:grid-cols-2 mt-16 mb-16 items-center bg-gray-800">
				<img src="/images/1980.webp" class="" alt="Dave Fanning's Top 10 Rock Tracks"/>
				<p class="text-center  p-8"><i>&ldquo;I&apos;ve my dreams set on writing and performing original songs&rdquo;</i> a 19-year-old Pat reveals in an interview. He does both with style.</p>
			</div>

			<Review author="Senan Turnbull, Hotpress" date="1980" info="Review of gig in the Project Arts Centre, Dublin">
				<p>
					<span class="uppercase text-gray-300 font-bold">ON THEIR FIRST</span> excursion outside Galway The Fuze walked away with first prize at the Tramore Band Competition which, among other things, landed them a record deal with Mulligan Records. On their second jaunt away from home they walk away with the prize for the best Dublin debut by any band, earning them this 'rave' review and probably the kiss-of-death. Together since November 79 they have established a very individual sound with definite influences from The Rats, U2 and even Madness in 'I Am A Soldier. Pat Coyne's lyrics and vocal style revealed considerable potential,
				</p>
				<p class="mt-4">
					especially when joined on vocals by guitarist Paul Gaughan. John Fitzpatrick's keyboards add a lot of colour and ideas to the sound especially on their upcoming single 'Stone Age Man. The even superior 'It's A Sunday Morning' is more typical of their overall modern Bowie influenced style, which can keep you dancing while listening to subtle underpinnings and off-beat themes. The Fuze have ideas and ability in abundance. Watch them go."
				</p>
			</Review>
		</section>

		<hr class="border-gray-700" />

		<section id="1981" class="text-gray-300 scrollsection pt-8">
			<p class="text-white text-6xl mb-2 mt-4 px-8">1981</p>
			<p class="text-lg text-gray-400 py-2 px-8">THE FUZE IS LIT</p>
			<Review author="Western People" date="1981">
				<p class=" leading-6">
					<span class="uppercase text-gray-300 font-bold">THE FUZE IS LIT.</span> The west’s newest band is all set for it’s debut appearence on the ballroom circuit on Sunday night next, March 1st. The zealous new five-piece have been achieving quite a reputation for itself in the past fifteen months, and their first single ‘Stone Age Man’ is due for release this week. Describing themselves a ‘pop/new wave’ group, they will now include more covers along with their original material to suit the wider appeal of the ballroom circuit. Some weeks ago the boys made their debut on RTE’s ‘Anything Goes’ and Radio 2 rockster Dave Fanning has featured The Fuze on his radio show on numerous
					occasions. Now that The Fuze is lit, just wait for the explosion!
					– Western People 1981
				</p>
			</Review>

			<p class="px-8 text-md my-12 leading-6"><Photo description="The Fuze" src="/images/1981.webp" align="left"/>With the departure of guitarist Dave Fitzgerald to study art, the now-five-piece Fuze launch themselves on an unsuspecting ballroom circuit. Our heroes adopt a suitably serious pose to mark the occasion while neither John Fitz nor Stan betrays any unusual nervousness at the prospect of ‘debuting’ in their home town<br/><br/></p>

			<Review author="RTE Guide" date="July 1981">
				<p>
					IT’S A SUNDAY MORNING. I remember being impressed with the last single from The Fuze and the same applies here. Written by the band’s lead vocalist Pat Coyne and bassist Mike Staunton, the song is a strong rock number that has that distinctive sound made by many Irish bands of this type. Is a definite Irish sound emerging? The Fuze have been touring Ireland for the past few weeks and you should catch their live act...				</p>
			</Review>

			<div class="flex flex-col sm:flex-row mt-12 mb-12 items-center bg-yellow-900 rounded-lg border border-yellow-700 mx-2 bg-no-repeat"
			style="background-image: url('/images/vinyl.webp');">
				<div class="p-8 flex-grow">
					<div class="flex pb-4 mb-4 border-b border-yellow-700 justify-center">
						<img src="/images/stoneageman.webp" class="h-12 rounded-sm mr-4" alt="Stone Age Man Cover"/>
						<div class="flex-grow">
							<p class="block uppercase text-sm text-yellow-500">Single</p>
							<p>Stone Age Man</p>
						</div>
						{#if $track != 7}
							<button
							on:click={() => track.set(7)}
							class="bg-yellow-700 p-3 ml-4 rounded-lg">▷ Play</button>
						{:else}
							{#if $playing}
								<button
								on:click={() => playing.set(false)}
								class="bg-yellow-700 p-3 ml-4 rounded-lg">Pause</button>
							{:else}
								<button
								on:click={() => playing.set(true)}
								class="bg-yellow-700 p-3 ml-4 rounded-lg">Resume</button>
							{/if}
						{/if}
					</div>
					<p>
						Reviewing ‘Stone Age Man’ Hotpress declares <b>“The Fuze
						light up with promise, align themselves with new music
						but don’t irritate with new poses and could dance across
						lakes of dry ice.”</b> Bang on! Couldn’t have put it better
						ourselves. Released in March 81, these three minutes of
						power pop make it to number 32 in the charts
						</p>
				</div>
			</div>

			<Review author="John Waters, Hotpress" date="June 1981">
				<p>
					I RECALL SEEING A VIDEO of this song (‘It’s A Sunday Morning’) on ‘Anything Goes’ and being struck not just by the power and pop-sensibility of the song, but also by the fact that here was an example of a very rare species – an Irish band singing about a uniquely Irish situation. The video showed the band standing around at the back of a church, while a priest spouted fire and brimstone and thumped his bible on the pulpit.
				</p>
			</Review>

			<div class="flex flex-col sm:flex-row mt-12 mb-12 items-center bg-yellow-900 rounded-lg border border-yellow-700 mx-2 bg-no-repeat"
			style="background-image: url('/images/vinyl.webp');">
				<div class="p-8 flex-grow">
					<div class="flex pb-4 mb-4 border-b border-yellow-700 justify-center">
						<img src="/images/sundaymorning.webp" class="h-12 rounded-sm mr-4" alt="Stone Age Man Cover"/>
						<div class="flex-grow">
							<p class="block uppercase text-sm text-yellow-500">Single</p>
							<p>It's a Sunday Morning</p>
						</div>
						{#if $track != 0}
							<button
							on:click={() => track.set(0)}
							class="bg-yellow-700 p-3 ml-4 rounded-lg" >▷ Play</button>
						{:else}
							{#if $playing}
								<button
								on:click={() => playing.set(false)}
								class="bg-yellow-700 p-3 ml-4 rounded-lg" >Pause</button>
							{:else}
								<button
								on:click={() => playing.set(true)}
								class="bg-yellow-700 p-3 ml-4 rounded-lg" >Resume</button>
							{/if}
						{/if}
					</div>
					<p>
						Described by the band as a song <b>“about what every young fellow in the West of Ireland feels when he’s called out of bed by his mother on a Sunday morning”</b>, ‘It’s A Sunday Morning’ is well received by the critics. Hotpress states <b>“bass and drums aren’t as blunt and brusque for Fuze-pop as in comparable British productions but they compensate with a light feathery touch on the keyboard melody lines. Almost a water-ice.”</b> It tops out at 14 in the charts, helped along its way by a music video (a new marketing concept) directed by RTÉ’s Bob Collins
					</p>
				</div>
			</div>

		</section>

		<hr class="border-gray-700" />

		<section id="lineup" class="scrollsection pb-12 bg-gray-900 text-gray-300 overflow-hidden">
			<div class="container pt-4 mx-4 md:pt-8 md:mx-12">
				<img src="/logo.png" width="192" alt="The Fuze" class="self-center -ml-2 my-4"/>
				<h4 class="text-xl uppercase text-gray-400">Band Line-up Throughout the years</h4>
				
				<table>
					<tr>
						<td>
							<h3 class="text-sm uppercase mt-6 text-white">Pat Coyne</h3>
							<p class="text-sm">Lead Vocals</p>
						</td>
					</tr>
					<tr>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Paul Gaughan</h3>
							<p class="text-sm">Guitar, Vocals</p>
						</td>
					</tr>
					<tr>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Mike Staunton</h3>
							<p class="text-sm">Bass</p>
						</td>
					</tr>
					<tr>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Mike Arrigan</h3>
							<p class="text-sm">Drums, Percussion</p>
						</td>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Barry Duffy</h3>
							<p class="text-sm">Drums, Percussion</p>
						</td>
					</tr>
					<tr>
						<td>
							<h3 class="text-sm uppercase mt-4 mr-6 text-white">John Fitzpatrick</h3>
							<p class="text-sm">Keyboards, Vocals</p>
						</td>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Eddie Lynch</h3>
							<p class="text-sm">Keyboards</p>
						</td>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Noel Furey</h3>
							<p class="text-sm">Keyboards, Vocals</p>
						</td>
					</tr>
					<tr>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Dave Fitzgerald</h3>
							<p class="text-sm">Lead Guitar</p>
						</td>
						<td>
							<h3 class="text-sm uppercase mt-4 text-white">Declan Kennedy</h3>
							<p class="text-sm">Lead Guitar</p>
						</td>
					</tr>
				</table>
			</div>

		</section>

		<hr class="border-gray-700" />

		<section id="videos" class="scrollsection">
			<h1 class="text-gray-500 text-2xl uppercase my-8 mx-8">Videos</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
				<iframe style="width: 100%; aspect-ratio: 4 / 3;" src="https://www.youtube.com/embed/nhGWNWqhkgI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe style="width: 100%; aspect-ratio: 4 / 3;" src="https://www.youtube.com/embed/J8sD9cWyoHk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe style="width: 100%; aspect-ratio: 4 / 3;" src="https://www.youtube.com/embed/yqPAwqGTkik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				<iframe style="width: 100%; aspect-ratio: 4 / 3;" src="https://www.youtube.com/embed/BWY6pUc7pEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			</div>
		</section>

		<hr class="border-gray-700 mt-12" />

		<section id="buycd" class="scrollsection bg-gray-900 py-4">
			<h1 class="text-gray-500 text-2xl uppercase mt-4 mx-8">Buy the CD</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 text-gray-300">
				<img src="/bftp-large.jpg" alt="The Fuze - A Blast From The Past" class="p-8 pb-0 md:pb-8"/>
				<div class="self-center p-8">
					<p>15 remastered studio recordings from the early eighties, including the hit singles <b class="font-bold text-white">It&#39;s a Sunday Morning</b> and <b class="font-bold text-white">Stone Age Man</b> plus five bonus live tracks.</p>
					<a href="mailto:buycd@thefuze.ie?subject=Buy CD&body=Enter Your Name and Postal Address"
					   class="inline-block bg-blue-600 text-white font-bold p-4 mt-4 rounded">
						Buy Now
					</a>
				</div>
			</div>
		</section>

		<hr class="border-gray-700" />

		<section id="more" class="scrollsection py-8">
			<h1 class="text-gray-500 text-2xl uppercase mx-8">More</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<a href="http://www.soundcloud.com/the-fuze-galway">
					<div class="flex mx-8 mt-4">
						<img src="/soundcloud.svg" width="48" alt="soundcloud" class="my-3"/>
						<p class="ml-4 self-center">4 rare recordings</p>
					</div>
				</a>
				<a href="https://www.instagram.com/thefuzegalway/">
					<div class="flex mx-8 mt-4">
						<img src="/Instagram.svg" width="48" alt="instagram"/>
						<p class="ml-4 self-center">Instagram Profile</p>
					</div>
				</a>
				<a href="https://open.spotify.com/album/2LkjVxqnhvctqBHNcOOYrp?si=5mdHvuDBRcuVFrMp94FC7g">
					<div class="flex mx-8 mt-4">
						<img src="/spotify.png" width="48" alt="spotify"/>
						<p class="ml-4 self-center">Listen on Spotify</p>
					</div>
				</a>
				<a href="http://itunes.apple.com/album/id/1560559827">
					<div class="flex mx-8 mt-4">
						<img src="/applemusic.png" width="48" alt="apple music"/>
						<p class="ml-4 self-center">Listen on Apple Music</p>
					</div>
				</a>
				<a href="https://www.irishrock.org/irodb/bands/fuze1.html">
					<div class="flex mx-8 mt-4">
						<img src="/link.png" width="48" alt="link"/>
						<p class="ml-4 self-center">Irish Rock Discography</p>
					</div>
				</a>
				<a href="https://www.google.com/search?q=the+fuze+galway">
					<div class="flex mx-8 mt-4">
						<img src="/link.png" width="48" alt="link"/>
						<p class="ml-4 self-center">Explore More</p>
					</div>
				</a>
			</div>
		</section>

		<hr class="border-gray-700" />

		<p class="text-gray-300 text-sm text-center my-12">&copy; 2022 The Fuze</p>
	</div>

</div>
