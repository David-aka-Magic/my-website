<script lang="ts">
    import ThemeDropdown from '../components/ThemeDropdown.svelte';
    import { themeStore } from '$lib/stores/theme';
    import ProfileButton from '../components/ProfileButton.svelte';
</script>

<div class="page">
    <ThemeDropdown />
    <h1>Welcome to My Website</h1>
    <p>Current theme: {$themeStore}</p>
    <p>This is the home page content.</p>
    <ProfileButton
        menuItems={[
            { text: 'Profile', url: '/profile' },
            { text: 'Settings', url: '/settings' },
            { text: 'Logout', url: '/logout' }
        ]}
    />
</div>

<style>
    .page {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        position: relative;
    }

    
</style>