<script>
  import { Hamburger } from 'svelte-hamburgers'
  import Logo from '@public/logo.svelte'
  let open;

  const menuItems = ['about','skills', 'projects','contact']

  function handleClick() {
    open = !open
  }
  let y;
  let primary = 'white'

$: if (y >= 100 && y <= 260 ) {
  primary = 'black'
} else if (y >= 480 && y <= 630) {
  primary = 'black'
} else if (y >= 1100 && y <= 1610) {
  primary = 'black'
} else if (y >= 2520 && y <= 4270) {
  primary = 'black'
}
 else {
  primary = 'white'
}

  let width;
  let bgColor = 'bg-[#efefef]'

</script>

<svelte:window bind:scrollY={y} bind:innerWidth={width}/>

{#if width < 600}
<nav class="fixed z-20 flex justify-end min-w-full">
    <Hamburger bind:open --color={primary} --active-color='black' class='test' />
  </nav>
  
  <section class="{open ? 'flex' : 'hidden' } fixed z-10 top-0 right-0 w-full flex-col items-center nav" >
    <a href="#home"><div class="absolute top-0 left-2 pt-2 pb-4">
      <Logo />
    </div></a>
    <ul class="text-center pt-16">
    {#each menuItems as item, index}
    <li class='text-2xl p-2 w-full font-bold {index === menuItems.length - 1 ? 'pb-4' : ''}'><a href='#{item}'  on:click={handleClick} >{item.charAt(0).toUpperCase() + item.slice(1)}</a></li>
    {/each}
    </ul>
   </section>

{:else}
   <nav class="fixed top-0 left-0 z-50 lg:min-h-[75px]  flex items-center w-full drop-shadow-lg shadow-[#2D3E4F] {bgColor}">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
    <Logo />
    <ul class="w-full flex justify-center">
    {#each menuItems as item}
 <li><a href='#{item}' class="inline text-2xl p-2 md:p-6 lg:p-8 font-bold"  on:click={handleClick} >{item.charAt(0).toUpperCase() + item.slice(1)}</a></li>
    {/each}
</ul>
</div>
   </nav>
{/if}
  <style>
    .nav {
      background-color: #efefef;
    }

  </style>