<script>
  import { onMount } from 'svelte';
  
  let isMobile = false;
  let isAnimationStarted = false;
  
  onMount(() => {
    const checkMobile = () => {
      isMobile = window.innerWidth <= 768;
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Start animation after a small delay
    setTimeout(() => {
      isAnimationStarted = true;
    }, 100);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  });
</script>

<section class="hero">
  <div class="hero-container">
    <div class="content-wrapper">
      <div class="content">
        <div class="header">
          <div class="spacer"></div>
          <div class="author">
           
          </div>
        </div>
        
        <div class="image-container">
          <div class="image-wrapper">
            <img src="/bodenor1.jpg" alt="Bodenor" />
          </div>
          <div class="panel-half left" class:open={isAnimationStarted}></div>
          <div class="panel-half right" class:open={isAnimationStarted}></div>
        </div>
        
        <div class="footer">
          <div class="subtitle">
          </div>
          <div class="spacer"></div>
        </div>
      </div>
      
      <div class="overlay-text">
      </div>
    </div>
  </div>
</section>

<style>
  .hero {
    background-color: rgb(255, 255, 255);
    height: 788px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .hero-container {
    width: 100%;
    max-width: 100%;
    height: 788px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-wrapper {
    width: 528px;
    height: 736px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
  }

  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .spacer {
    width: 99.8732%;
    height: 0;
  }

  .author {
    color: rgb(32, 3, 20);
    font-size: 14.4px;
    line-height: 28.8px;
    font-family: Restarthard, sans-serif;
    letter-spacing: 0.288px;
    font-weight: 400;
    text-align: right;
    flex: 0 0 auto;
  }

  .image-container {
    width: 100.054%;
    height: 678.406px;
    border-radius: 14.9712px;
    background-color: rgb(236, 224, 223);
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .panel-half {
    position: absolute;
    width: 50%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    top: 0;
    transition: transform 1s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 2;
  }

  .panel-half.left {
    left: 0;
    transform: translateX(0);
  }

  .panel-half.right {
    right: 0;
    transform: translateX(0);
  }

  .panel-half.left.open {
    transform: translateX(-100%);
  }

  .panel-half.right.open {
    transform: translateX(100%);
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .subtitle {
    color: rgb(32, 3, 20);
    font-size: 14.4px;
    line-height: 28.8px;
    font-family: Recklessneue, sans-serif;
    letter-spacing: 0.576px;
    font-weight: 400;
    flex: 0 0 auto;
  }

  .overlay-text {
    height: 100%;
    z-index: 5;
    color: rgb(34, 44, 23);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 14.4px 0;
    position: absolute;
    inset: 0;
  }

  .first-heading,
  .second-heading {
    color: orange;
    font-size: 144px;
    font-family: Recklessneue, sans-serif;
    text-align: left;
    letter-spacing: -4.32px;
    font-weight: 300;
    line-height: 165.6px;
    margin: 0;
    position: absolute;
    transform: scale(0.6);
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
    left: 0;
    right: 0;
    opacity: 1;
  }

  .first-heading {
    margin-top: -115.2px;
  }

  .second-heading {
    margin-top: 115.2px;
  }

  .first-heading.animate {
    left: -28vw;
    opacity: 0.8;
  }

  .second-heading.animate {
    right: -23vw;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    .hero,
    .hero-container {
      height: 100vh;
    }

    .content-wrapper {
      width: 90%;
      height: 90%;
    }

    .image-container {
      height: 80vh;
    }

    .first-heading,
    .second-heading {
      font-size: 96px;
      line-height: 110px;
      transform: scale(0.9);
      white-space: nowrap;
    }

    .first-heading.animate {
      left: -8vw;
    }

    .second-heading.animate {
      right: -8vw;
    }

    .first-heading {
      margin-top: -12vh;
    }

    .second-heading {
      margin-top: 12vh;
    }

    .author {
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.5px;
    }

    .subtitle {
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 480px) {
    .first-heading,
    .second-heading {
      font-size: 72px;
      line-height: 82px;
      transform: scale(0.85);
    }

    .first-heading.animate {
      left: -5vw;
    }

    .second-heading.animate {
      right: -5vw;
    }

    .first-heading {
      margin-top: -8vh;
    }

    .second-heading {
      margin-top: 8vh;
    }

    .author {
      font-size: 14px;
      line-height: 28px;
    }

    .subtitle {
      font-size: 14px;
      line-height: 28px;
    }
  }
</style>


