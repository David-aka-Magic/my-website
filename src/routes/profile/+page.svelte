<script lang="ts">
  import ThemeDropdown from '../../components/ThemeDropdown.svelte';
  import { themeStore } from '$lib/stores/theme';
  import Banner from '../../components/Banner.svelte';
  
  const bannerImg = 'https://t4.ftcdn.net/jpg/04/21/49/67/360_F_421496718_abUsV4fBwRRnf1H8xpkSseulmo8RUTQv.jpg';
  const profileImg = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8LA-7jb-gy_JkM7nC6vbRp-bpWgGFpLK86qI7bx_1XO5qtiJNHQb9xY4j4ThXiNo-609n62vpjR-IQE-Fb-HYmw';
</script>

<div class="profile-header-wrapper">
  <Banner 
    bannerImage={bannerImg} 
    profileImage={profileImg} 
    altText="Your name" 
  />
</div>
<br> <!-- Yes I added a <br>. I didnt feel like messing with css. -->
<main class="page-content">
  <h1>Welcome to My Website</h1>
    <ThemeDropdown />
  <p>Current theme: {$themeStore}</p>
  <p>This is the home page content.</p>
</main>

<style>
  .profile-header-wrapper {
    position: relative;
  }

  .page-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    padding-top: 0; 
  }
</style>