<script setup lang="ts">
import { usePopupStore } from "@/stores/popup";

const usePopupStores = usePopupStore();
</script>

<template>
  <section class="popup_box" v-if="usePopupStores.name === 'brave'">
    <div class="main">
      <div class="header">
        <h1 class="title">브레이브퀸</h1>
        <button
          type="button"
          class="close_button"
          title="팝업 닫기"
          @click="usePopupStores.clearPopup()"
        >
          <picture
            ><img src="~/assets/images/close_button.svg" alt="팝업 닫기"
          /></picture>
        </button>
      </div>
      <div class="desc">
        <p class="name">사이트이름. 브레이브퀸</p>
        <p class="date">작업일자. 2022-12 ~ 2023-02</p>
        <div class="skill_list">
          <span>기술스택.</span>
          <span style="color: #41b883">Vue.js</span>
          <span style="color: #41b883">Nuxt</span>
          <span style="color: #264de4">TailwindCSS</span>
          <span style="color: #f7df1e">Javascript</span>
          <span style="color: #3179c7">Typescript</span>
          <span style="color: #2e2e2e">CAFE24</span>
        </div>
      </div>
      <div class="code">
        <p class="title">작업내역</p>
        <div class="list">
          <p>1. 피그마를 통해 디자인팀과 협업하여 페이지(CAFE24) 퍼블리싱</p>
          <p>
            2. CAFE24 API로부터의 WebHook을 이용하여 상품 구매시 해당 날짜 재고
            차감 기능 및 페이지 구현
          </p>
          <p>
            3. DB에 저장된 해당 날짜 재고 관리 기능<br />(재고 소진/초과 시 구매
            불가, 특정 날짜 재고 처리기능)
          </p>
        </div>
      </div>
    </div>
    <a href="https://bravequeen.kr" class="link" target="_blank">사이트 보러가기</a>
  </section>
</template>

<style lang="scss" scoped></style>
