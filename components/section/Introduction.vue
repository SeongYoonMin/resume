<script setup lang="ts"></script>

<template>
  <section class="introduction">
    <div class="intro">
      <h2 class="title">INTRODUCTION</h2>
      <p class="desc">
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
        ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.introduction {
  padding: 120px 0;
  background-color: #2539F0;
  .intro {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 20px;
    color: white;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    .title {
      font-size: 44px;
      font-weight: 500;
    }
    .desc {
      font-size: 18px;
      
    }
  }
}
</style>
