<script setup lang="ts"></script>

<template>
  <section class="introduction">
    <div class="intro">
      <h2 class="title">INTRODUCTION</h2>
      <p class="desc">
        안녕하세요! 함께하고 싶은 개발자를 꿈꾸는 1년차 주니어 민성윤입니다!<br />
        퍼포먼스 마케팅 스타트업에서 웹사이트 제작 및 외주로 첫 시작을
        하였습니다.<br />
        주로 웹페이지 제작 및 관리자페이지 제작을 담당하였고, 디자인/마케팅 팀과
        협업하였습니다.<br />
        <br />
        아직 미숙하다는것을 잘 알기에 항상 배우려는 자세로 임하고 있습니다.<br />
        새로운 지식 습득 및 공유를 좋아하고, 팀원간의 협업을 중요시하게
        생각합니다.<br />
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.introduction {
  padding: 120px 0;
  box-sizing: border-box;
  background-color: #2539f0;
  @media screen and (max-width:768px) {
    padding: 40px 20px;
  }
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
    word-break: keep-all;
    .title {
      font-size: 44px;
      font-weight: 500;
      @media screen and (max-width: 768px) {
        font-size: 32px;
      }
    }
    .desc {
      font-size: 18px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}
</style>
