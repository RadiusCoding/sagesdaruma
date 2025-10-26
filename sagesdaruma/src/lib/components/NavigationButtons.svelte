<script>
    import { currentState, conversationFlow, changeState } from '$lib/stores/contentStore.js';

    $: currentFlow = conversationFlow[$currentState];

    function handleClick(button) {
        changeState(button.nextState);
    }
</script>

<div class="button-container">
    {#each currentFlow.buttons as button}
        <button on:click={() => handleClick(button)}>
            {button.label}
        </button>
    {/each}
</div>

<style>
    .button-container {
        display: flex;
        gap: 1rem;
        margin: 2rem;
        flex-wrap: wrap;
    }

    button {
        padding: 0.75rem 1.5rem;
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 1rem;
        background: transparent;
        border: 2px solid #333;
        border-radius: 25px;
        cursor: pointer;
        transition: all 0.3s ease;
        color: #ffffff;
    }

    button:hover {
        background: #333;
        border-color: transparent;
        background: linear-gradient(#333,#333) padding-box,
            linear-gradient(90deg, blue, purple, indigo, violet) border-box;
        border: 2px solid transparent;
    }
</style>
