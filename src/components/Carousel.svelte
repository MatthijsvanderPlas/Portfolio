<script>
  import Icon from '@iconify/svelte';
  export let images
  export let title


  let index = 0

  const next = () => {
    index < images.length - 1 ? index++ : index = 0
  }

  const prev = () => {
    index === 0 ? index = images.length - 1 : index--
  }

</script>
<button id={title + '-prev'} title={title + '-prev'} class="btn pr-[5px]" on:click={prev}><Icon icon="ooui:previous-ltr" /></button>
{#each [images[index]] as src} 
  <img loading="lazy" class="object-scale-down w-full min-w-full h-full" id={index} src={src.src} alt={title} />
{/each}
<button id={title + '-next'} title={title + '-next'} class="btn pl-[5px]" on:click={next}><Icon icon="ooui:next-ltr" /></button>