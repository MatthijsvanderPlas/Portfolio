<script>
  import { Hamburger } from 'svelte-hamburgers'
  import Logo from '../../public/logo.svelte'
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
} else if (y >= 1100 && y <= 1350) {
  primary = 'black'
} else if (y >= 2025) {
  primary = 'black'
}
 else {
  primary = 'white'
}



</script>

<svelte:window bind:scrollY={y} />

<nav class="fixed z-20 flex justify-end min-w-full">
    <Hamburger bind:open --color={primary} --active-color='black' class='test' />
  </nav>
  
  <section class="{open ? 'flex' : 'hidden' } fixed z-10 top-[0px] right-0 w-full flex-col items-center nav" >
    <a href="#home"><div class="relative left-[-40px] pt-2 pb-4">
      <Logo />
    </div></a>
    <ul class="text-center">
    {#each menuItems as item, index}
    <li class='text-2xl p-2 w-full font-bold {index === menuItems.length - 1 ? 'pb-4' : ''}'><a href='#{item}'  on:click={handleClick} >{item.charAt(0).toUpperCase() + item.slice(1)}</a></li>
    {/each}
    </ul>
   </section>

  <style>
    .nav {
      background-color: #efefef;
    }

  </style>