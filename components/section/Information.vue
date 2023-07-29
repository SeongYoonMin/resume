<script setup lang="ts"></script>

<template>
  <section class="information">
    <div class="who">
      <h2>
        함께하고 싶은<br />개발자 주니어 1년차<br /><strong>민성윤</strong>
      </h2>
    </div>
    <div class="info">
      <a href="tel:01064149400">Tel. 82+ 010.6414.9400</a>
      <a href="mailto:namo4862@gmail.com">Email. namo4862@naver.com</a>
      <a href="https://github.com/seongyoonmin"
        >Github. https://github.com/seongyoonmin</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
.information {
  padding: 120px 0;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  column-gap: 120px;
  box-sizing: border-box;
  background-color: #3a3a3a;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
    flex-direction: column;
    row-gap: 20px;
  }

  .who {
    font-size: 44px;
    color: white;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
    strong {
      color: #2539f0;
      font-weight: 600;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 10px;
    a {
      width: 100%;
      box-sizing:border-box;
      padding: 10px 20px;
      display: block;
      color: #2e2e2e;
      font-weight: 500;
      font-size: 20px;
      color: white;
      border-bottom: 1px solid #d7d7d7;
      transition: 0.3s all;
      &:hover {
        color: #2539f0;
        font-weight: 700;
        border-color: #2539f0;
      }
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>
