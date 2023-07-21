<script setup lang="ts"></script>

<template>
  <main>
    <div class="top_banner">
      <picture class="background_box">
        <img src="~/assets/images/background.png" alt="메인 배경사진" />
      </picture>
      <div class="banner_icons">
        <div class="items">
          <picture class="icons">
            <img src="~/assets/images/html5.svg" alt="" />
          </picture>
          <p>HTML5</p>
        </div>
        <div class="items">
          <picture class="icons">
            <img src="~/assets/images/css3.svg" alt="" />
          </picture>
          <p>CSS3</p>
        </div>
        <div class="items">
          <picture class="icons">
            <img src="~/assets/images/javascript.svg" alt="" />
          </picture>
          <p>Javascript</p>
        </div>
        <div class="items">
          <picture class="icons">
            <img src="~/assets/images/typescript.svg" alt="" />
          </picture>
          <p>Typescript</p>
        </div>
        <div class="items">
          <picture class="icons">
            <img src="~/assets/images/vue.svg" alt="" />
          </picture>
          <p>Vue.js</p>
        </div>
        <div class="items">
          <picture class="icons">
            <img src="~/assets/images/nuxt.svg" alt="" />
          </picture>
          <p>Nuxt</p>
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
  .banner_icons {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 800px;
    z-index: 2;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    right: 0;
    margin: 0 auto;
    .items {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      row-gap: 8px;
      font-size: 20px;
      color: white;
      font-weight: 500;
      .icons {
        display: block;
        width: 80px;
        height: 80px;
      }
    }
  }
}
</style>
