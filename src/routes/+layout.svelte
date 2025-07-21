<script lang="ts">
    import { browser } from '$app/environment';
    import { initializeTheme, themeStore } from '$lib/stores/theme';
    import Navbar from '../components/NavBar.svelte';
    import Footer from '../components/Footer.svelte';
    import '../global.css';
    import { onMount } from 'svelte';

    onMount(() => {
        if (browser) {
            initializeTheme();
        }
    });
</script>

<Navbar />

<main class="main-content">
  <div class="debug-theme">
    Active Theme: {$themeStore}
  </div>
    <slot />
</main>

<Footer year={2025} companyName="Magic Inc." />

<style>
    .main-content {
        padding-top: 80px;
        min-height: 100vh;
    }
</style>