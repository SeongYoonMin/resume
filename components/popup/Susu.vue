<script setup lang="ts">
import { usePopupStore } from "@/stores/popup";

const usePopupStores = usePopupStore();
</script>

<template>
  <section class="popup_box" v-if="usePopupStores.name === 'susu'">
    <div class="main">
      <div class="header">
        <h1 class="title">수수하지만 굉장해!</h1>
        <button type="button" class="close_button" title="팝업 닫기" @click="usePopupStores.clearPopup()">
          <picture
            ><img src="~/assets/images/close_button.svg" alt="팝업 닫기"
          /></picture>
        </button>
      </div>
      <div class="desc">
        <p class="name">사이트이름. 수수하지만 굉장해!</p>
        <p class="date">작업일자. 2023-02 ~ 2023-03</p>
        <div class="skill_list">
          <span>기술스택.</span>
          <span style="color: #41b883">Vue.js</span>
          <span style="color: #41b883">Nuxt</span>
          <span style="color: #264de4">TailwindCSS</span>
          <span style="color: #f7df1e">Javascript</span>
          <span style="color: #3179c7">Typescript</span>
        </div>
      </div>
      <div class="code">
        <p class="title">작업내역</p>
        <div class="list">
          <p>1. 피그마를 통해 디자인팀과 협업하여 페이지 퍼블리싱</p>
          <p>2. 메인페이지에서 서버로부터 해당 업체의 팝업레이어 호출</p>
          <p>3. 카카오 디벨로퍼스에 앱 등록하여 지도 API 구현 및 해당업체 위치 추적기능 구현</p>
          <p>4. 상담문의를 통해여 DB에 문의 저장 구현</p>
          <p>5. 관리자페이지에서 메인페이지의 팝업레이어 관리 페이지 구현</p>
          <p>6. 관리자페이지에서 메인페이지의 메뉴 추가 제거 및 관리 구현</p>
          <p>7. 관리자페이지에서 메인페이지의 매장 추가 제거 및 관리 구현</p>
          <p>8. 관리자페이지에서 DB로부터 문의 내역 확인 페이지 구현</p>
        </div>
      </div>
    </div>
    <a href="https://susu.sanaicompany.com/" class="link" target="_blank">사이트 보러가기</a>
  </section>
</template>

<style lang="scss" scoped></style>
