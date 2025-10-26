<script> 
    import DynamicText from '$lib/components/DynamicText.svelte';
    import NavigationButtons from '$lib/components/NavigationButtons.svelte';
    let isComplete = false;
</script>

<div class="background-container">
    
    <DynamicText bind:isComplete />
    {#if isComplete}
        <NavigationButtons/>
    {/if}
</div>


<style>
      .background-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: linear-gradient(45deg, #0a0011, #110022, #000a11);
          animation: hue-shift 20s linear infinite;
      }

      @keyframes hue-shift {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
      }
  </style>
