<script setup lang="ts"></script>

<template>
  <main>
    <div class="top_banner">
      <picture class="background_box">
        <img src="~/assets/images/background2.png" alt="메인 배경사진" />
      </picture>
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
  .background_box {
    display: block;
    position: relative;
    z-index: 1;
    img {
      display: block;
    }
  }
  .headers  {
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
    h1 {
      font-size: 100px;
      color: white;
    }
    .possible {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 26px;
      .items {
        padding: 10px 20px;
        border-radius: 50px;
        font-size: 18px;
        font-weight: 600;
        &.html {
          color: #E44D26;
          border: 1px solid #E44D26;
        }
        &.css {
          color: #264DE4;
          border: 1px solid #264DE4;
        }
        &.javascript {
          color: #F7DF1E;
          border: 1px solid #F7DF1E;
        }
        &.typescript {
          color: #3179C7;
          border: 1px solid #3179C7;
        }
        &.vue {
          color: #41B883;
          border: 1px solid #41B883;
        }
        &.nuxt {
          color: #41B883;
          border: 1px solid #41B883;
        }
      }
    }
  }
}
</style>
