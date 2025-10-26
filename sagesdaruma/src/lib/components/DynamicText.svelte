<script> 
    import { currentHeadlines } from '$lib/stores/contentStore.js';
    export let isComplete = false;
    import { onMount } from 'svelte';

    let displayedLines = [];

    let currentLineIndex = 0;
    let currentCharIndex = 0; 
    let currentLineText = "";
    
    $: headlines = $currentHeadlines;
    $: if (headlines) {
        resetAnimation();
    }
    function animateText(){
        if (currentLineIndex >= headlines.length){
            isComplete = true;
            return;
        }
        const currentHeadline = headlines[currentLineIndex];

        if (currentCharIndex < currentHeadline.length){
            currentLineText += currentHeadline[currentCharIndex];
            currentCharIndex++;
            setTimeout(animateText, 50);
        } else {
            displayedLines = [...displayedLines, currentLineText];
            currentLineText = "";
            currentCharIndex = 0;
            currentLineIndex++;

            setTimeout(animateText, 500);
        }
    }
    function resetAnimation(){
        displayedLines = [];
        currentLineText = "";
        currentCharIndex = 0;
        currentLineIndex = 0;
        isComplete = false;
        animateText();
    }

    onMount(() => {
        animateText();
    });
</script>



<div>
    <div class="heading-padder montfont">

        {#each displayedLines as Line}
            <h1>{Line}</h1>
        {/each}

        {#if currentLineIndex < headlines.length}
            <h1>{currentLineText}<span class="cursor">|</span></h1>
        {/if}
    </div>
    

</div>

<style>
    h1{
        font-optical-sizing: auto;

        min-height: 1.2em;

    }
    .cursor{
        animation: blink 1s infinite;
        opacity: 0;
    }
    @keyframes blink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
    }
</style>
