<script setup lang="ts">
definePageMeta({
  layout: "main",
});
</script>

<template>
  <section id="main">
    <div class="header_box">
      <h1 class="title">민성윤</h1>
      <p class="sub_title">함께하고 싶은 개발자</p>
    </div>
    <div class="information padding_contant">
      <h2 class="main_title">Information.</h2>
      <p class="main_desc">
        함께하고 싶은 개발자를 꿈꾸는 프론트엔드 개발 1년차 주니어 민성윤입니다!
      </p>
      <div class="contact">
        <picture class="thumb">
          <img src="" alt="성윤 사진" />
        </picture>
        <div class="desc">
          <h3 class="desc_title">Contact.</h3>
          <a href="mailto:namo4862@gmail.com">Email. namo4862@gmail.com</a>
          <a href="tel:01064149400">Phone. 010-6414-9400</a>
          <a href="https://github.com/SeongYoonMin"
            >Github. https://github.com/SeongYoonMin</a
          >
        </div>
      </div>
    </div>
    <div class="introduction padding_contant">
      <h2 class="main_title">Introduction.</h2>
      <p class="info">
        설명
      </p>
    </div>
    <div class="work padding_contant">
      <h2 class="main_title">Work Experience.</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
#main {
  padding: 40px 12px;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
  .header_box {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    column-gap: 14px;
    margin-bottom: 40px;
    .title {
      font-size: 32px;
      font-weight: 600;
    }
    .sub_title {
      font-size: 20px;
      font-weight: 500;
      color: #616161;
    }
  }
  .main_title {
    font-size: 28px;
    font-weight: 600;
  }
  .main_desc {
    font-size: 16px;
    padding-bottom: 20px;
  }
  .padding_contant {
    padding: 40px 0;
    border-bottom: 1px solid #616161;
  }
  .information {
    .contact {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      column-gap: 12px;
      .desc {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        row-gap: 6px;
        color: #616161;
        .desc_title {
          font-size: 20px;
          font-weight: 600;
          color: black;
        }
        a {
          color: #616161;
          transition: 0.3s all;
          &:hover {
            color: black;
            transform: scale(1.1);
          }
        }
      }
    }
  }
  .introduction {

  }
}

</style>
