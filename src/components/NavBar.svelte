<script lang="ts">
  import { onMount } from 'svelte';
  import ProfileButton from './ProfileButton.svelte';

  type NavItem = {
    name: string;
    href: string;
    external?: boolean;
  };

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ];

  let mobileMenuOpen = false;
  let isScrolled = false;

  let profileImageSrc = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8LA-7jb-gy_JkM7nC6vbRp-bpWgGFpLK86qI7bx_1XO5qtiJNHQb9xY4j4ThXiNo-609n62vpjR-IQE-Fb-HYmw';
  let profileMenuItems = [
    { text: 'My Profile', url: '/profile' },
    { text: 'Settings', url: '/settings' },
    { text: 'Logout', url: '/logout' }
  ];

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
  };
</script>

<header class={`navbar ${isScrolled ? 'scrolled' : ''}`}>
  <div class="container">
    <div class="navbar-content">
      <div class="logo">
        <a href="/">Logo</a>
      </div>

      <nav class="desktop-nav">
        {#each navItems as item}
          <a
            href={item.href}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
            class="nav-link"
          >
            {item.name}
          </a>
        {/each}
      </nav>

      <div class="profile-button-wrapper">
        <ProfileButton 
          imageSrc={profileImageSrc}
          menuItems={profileMenuItems}
          size="2.5rem"
        />
      </div>

      <div class="mobile-menu-button">
        <button
          type="button"
          on:click={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {#if mobileMenuOpen}
            <svg class="menu-icon" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          {:else}
            <svg class="menu-icon" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </div>

  {#if mobileMenuOpen}
    <div class="mobile-nav">
      {#each navItems as item}
        <a
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          class="mobile-nav-link"
        >
          {item.name}
        </a>
      {/each}
      {#each profileMenuItems as item}
        <a href={item.url} class="mobile-nav-link">
          {item.text}
        </a>
      {/each}
    </div>
  {/if}
</header>

<style>
  .navbar {
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 1rem 0;
    transition: all 0.3s ease;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
  }

  .logo a {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    text-decoration: none;
  }

  .desktop-nav {
    display: none;
  }

  @media (min-width: 768px) {
    .desktop-nav {
      display: flex;
      gap: 2rem;
    }
  }

  .mobile-menu-button {
    display: block;
  }

  @media (min-width: 768px) {
    .mobile-menu-button {
      display: none;
    }
  }

  .mobile-menu-button button {
    background: none;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    color: var(--nav-link-color);
  }

  .menu-icon {
    width: 1.5rem;
    height: 1.5rem;
    stroke: currentColor;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }

  @media (min-width: 768px) {
    .mobile-nav {
      display: none;
    }
  }

  .mobile-nav-link {
    padding: 0.75rem 1.5rem;
    text-decoration: none;
    font-size: 1rem;
    transition: background-color 0.2s ease;
  }
</style>