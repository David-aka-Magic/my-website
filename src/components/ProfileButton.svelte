<script lang="ts">
  import { onMount } from 'svelte';

  export let imageSrc: string | undefined = undefined;
  export let altText: string = "Profile";
  export let size: string = "3rem";
  export let border: boolean = true;
  export let profileUrl: string = "/profile";
  export let menuItems: Array<{text: string, url: string}> = [];

  let isMenuOpen = false;
  let menuRef: HTMLElement;
  let buttonRef: HTMLElement;

  const redirectToProfile = () => {
    window.location.href = profileUrl;
  };

  const handleItemClick = (url: string) => {
    window.location.href = url;
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef && !menuRef.contains(event.target as Node)) {
      isMenuOpen = false;
    }
  };

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<div class="profile-container">
  <button 
    class="profile-button" 
    style="--size: {size}; border: {border ? 'var(--border-width) solid var(--border-color)' : 'none'}"
    on:click={redirectToProfile}
    on:mouseenter={() => menuItems.length > 0 && (isMenuOpen = true)}
    bind:this={buttonRef}
  >
    {#if imageSrc}
      <img src={imageSrc} alt={altText} />
    {:else}
      <span class="fallback">{altText[0]?.toUpperCase()}</span>
    {/if}
  </button>

  {#if menuItems.length > 0 && isMenuOpen}
    <div class="menu" bind:this={menuRef}>
      {#each menuItems as item}
        <div class="menu-item" on:click={() => handleItemClick(item.url)}>
          {item.text}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .profile-container {
    position: relative;
    display: inline-block;
  }

  .profile-button {
    --border-width: 2px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    border: none;
    background-color: var(--primary-color-light);
    transition: all 0.3s ease;
  }

  .profile-button:hover {
    background-color: var(--primary-color);
  }

  .profile-button img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-button .fallback {
    font-size: calc(var(--size) / 2);
    font-weight: bold;
    color: var(--primary-color);
  }

  .profile-button:hover .fallback {
    color: white;
  }

  .menu {
    position: absolute;
    right: 0;
    top: calc(100% + 0.5rem);
    min-width: 200px;
    background-color: var(--bg-color);
    border-radius: 0.5rem;
    box-shadow: var(--nav-shadow);
    z-index: 1000;
    overflow: hidden;
    border: 1px solid var(--border-color);
  }

  .menu-item {
    padding: 0.75rem 1rem;
    cursor: pointer;
    color: var(--text-color);
    transition: all 0.2s ease;
  }

  .menu-item:hover {
    background-color: var(--primary-color-light);
    color: var(--primary-color);
  }

  .menu-item:not(:last-child) {
    border-bottom: 1px solid var(--border-color);
  }
</style>