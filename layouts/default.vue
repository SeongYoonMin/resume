<script setup lang="ts"></script>

<template>
  <main>
    <div class="top_banner">
      <div class="background_box">
        
      </div>
      <div class="headers">
        <h1>POSSIBLE SKILLS</h1>
        <div class="possible">
          <p class="items html">HTML5</p>
          <p class="items css">CSS3</p>
          <p class="items javascript">Javascript</p>
          <p class="items typescript">Typescript</p>
          <p class="items vue">Vue.js</p>
          <p class="items nuxt">Nuxt</p>
        </div>
      </div>
    </div>
    <slot />
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: #f5f5f5;
  min-height: 100vh;
}
.top_banner {
  position: relative;
  height: 100vh;
  max-height: 35vh;
  .background_box {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100%;
    background-image: url('~/assets/images/main_background.png');
  }
  .headers {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 20px;
    box-sizing: border-box;
    @media screen and (max-width: 768px) {
      padding: 0 20px;
    }
    h1 {
      font-size: 5.2083vw;
      color: white;
      @media screen and (max-width: 768px) {
        font-size: 60px;
      }
    }
    .possible {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      column-gap: 1.5vw;
      @media screen and (max-width: 768px) {
        column-gap: 10px;
        row-gap: 10px;
        justify-content: flex-start;
      }
      .items {
        padding: 0.7vw 1vw;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 600;
        @media screen and (max-width: 768px) {
          font-size: 14px;
          font-weight: 500;
          padding: 8px 12px;
        }
        &.html {
          color: #e44d26;
          border: 1px solid #e44d26;
        }
        &.css {
          color: #264de4;
          border: 1px solid #264de4;
        }
        &.javascript {
          color: #f7df1e;
          border: 1px solid #f7df1e;
        }
        &.typescript {
          color: #3179c7;
          border: 1px solid #3179c7;
        }
        &.vue {
          color: #41b883;
          border: 1px solid #41b883;
        }
        &.nuxt {
          color: #41b883;
          border: 1px solid #41b883;
        }
      }
    }
  }
}
</style>
