<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { THEMES } from '$lib/theme/constants';
  import { themeStore, applyTheme } from '$lib/stores/theme';

  let isOpen = false;

  onMount(() => {
    const unsubscribe = themeStore.subscribe(value => {
      console.log('Current theme:', value);
      console.log('HTML attribute:', document.documentElement.getAttribute('data-theme'));
    });

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.theme-picker')) {
        isOpen = false;
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      unsubscribe();
      document.removeEventListener('click', handleClickOutside);
    };
  });

  function toggleDropdown() {
    isOpen = !isOpen;
  }
</script>

<div class="theme-picker">
  <button
    class="current-theme"
    on:click|stopPropagation={toggleDropdown}
    aria-haspopup="listbox"
    aria-expanded={isOpen}
  >
    <span class="icon">
      {THEMES.find(t => t.id === $themeStore)?.icon}
    </span>
    <span class="name">
      {THEMES.find(t => t.id === $themeStore)?.name}
    </span>
    <span class="arrow">{isOpen ? '▲' : '▼'}</span>
  </button>

  {#if isOpen}
    <div class="dropdown" role="listbox">
      {#each THEMES as theme (theme.id)}
        <button
          class="theme-option {$themeStore === theme.id ? 'selected' : ''}"
          on:click|stopPropagation={() => applyTheme(theme.id)}
          role="option"
          aria-selected={$themeStore === theme.id}
        >
          <span class="icon">{theme.icon}</span>
          <span class="name">{theme.name}</span>
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
.theme-picker {
  position: relative;
  display: inline-block;
  margin: 1rem;
}

.current-theme {
  padding: 0.5rem 1rem;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  background: var(--bg-color);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  z-index: 100;
}

.theme-option {
  display: block;
  width: 100%;
  padding: 0.5rem 1rem;
  text-align: left;
  background: var(--bg-color);
  color: var(--text-color);
  border: none;
  cursor: pointer;
}
</style>