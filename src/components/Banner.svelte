<script lang="ts">
  export let bannerImage: string;
  export let profileImage: string;
  export let altText: string = "Profile picture";
</script>

<div class="banner-component">
  <div class="banner-image-container">
    <img src={bannerImage} alt="Profile banner" class="banner-image" />
  </div>
  
  <div class="profile-picture-container">
    <img src={profileImage} alt={altText} class="profile-picture" />
  </div>
</div>

<style>
  .banner-component {
    position: relative;
    width: 100%;
    height: 200px;
    margin-bottom: 75px; 
  }

  .banner-image-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .banner-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-picture-container {
    position: absolute;
    left: 50px;
    bottom: -75px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
  }

  .profile-picture {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .banner-component {
      height: 180px;
      margin-bottom: 60px;
    }
    
    .profile-picture-container {
      width: 120px;
      height: 120px;
      bottom: -60px;
      left: 30px;
    }
  }

  @media (max-width: 480px) {
    .banner-component {
      height: 150px;
      margin-bottom: 50px;
    }
    
    .profile-picture-container {
      width: 100px;
      height: 100px;
      bottom: -50px;
      left: 20px;
    }
  }
</style>