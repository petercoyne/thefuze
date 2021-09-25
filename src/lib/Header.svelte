<script>
    export let y;
    $:y = y;    
</script>
<div class="w-full max-w-full h-screen bg-cover bg-repeat-x bg-center flex flex-col items-center justify-around"
style="background-image: url('/bg2.webp')">
    <img src="/logo.png" alt="" class="w-2/3 sm:w-1/2  my-36 xl:my-48" style="transform: translate(0,{-y}px)"/>
    <a href="#maincontent">
        <svg class="bg-white bg-opacity-70 rounded-full w-10 h-10 mb-8 sm:mb-16 xl:mb-32 p-2 z-30 mx-auto animate-bounce text-black"
        fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"></path></svg>
    </a>
</div>