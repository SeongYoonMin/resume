<script lang="ts" setup>
import { usePopupStore } from "@/stores/popup";

interface ImageType {
  id: number;
  initial: string;
  name: string;
  src: string;
  overSrc: string;
  overState: boolean;
}
const imageList = ref<ImageType[]>([
  {
    id: 0,
    initial: "atteutteu",
    name: "솥밥전문점 아뜨뜨",
    src: "/atteu.png",
    overSrc: "/atteu_over.png",
    overState: false,
  },
  {
    id: 1,
    initial: "tendong",
    name: "저스트텐동",
    src: "/tendong.png",
    overSrc: "/tendong_over.png",
    overState: false,
  },
  {
    id: 2,
    initial: "second",
    name: "세컨디 포레스트",
    src: "/second.png",
    overSrc: "/second_over.png",
    overState: false,
  },
  {
    id: 3,
    initial: "susu",
    name: "수수굉",
    src: "/susu.png",
    overSrc: "/susu_over.png",
    overState: false,
  },
  {
    id: 4,
    initial: "brave",
    name: "브레이브퀸",
    src: "/brave.png",
    overSrc: "/brave_over.png",
    overState: false,
  },
  {
    id: 5,
    initial: "muzin",
    name: "무진 스튜디오",
    src: "/muzin.png",
    overSrc: "/muzin_over.png",
    overState: false,
  },
]);

const usePopup = usePopupStore();
</script>

<template>
  <section class="work_experience">
    <div class="exp">
      <h2 class="title">WORK EXPERIENCE</h2>
      <div class="list">
        <a
          class="items"
          v-for="items in imageList"
          :key="items.id"
          href="#none"
          @click="usePopup.setPopup(items.initial)"
        >
          <picture class="thumb"
            ><img
              :src="items.overState ? items.overSrc : items.src"
              style="transition: 0.3s all"
              :class="{ over: items.overState }"
              @mouseover="items.overState = !items.overState"
              @mouseout="items.overState = !items.overState"
              :alt="items.name"
          /></picture>
        </a>
      </div>
    </div>
  </section>
  <Teleport to="body">
    <div v-if="usePopup.state" class="popup">
      <div class="popup_bg" @click="usePopup.clearPopup()"></div>
      <div class="box">
        <PopupAtteutteu />
        <PopupTendong />
        <PopupSecondforrest />
        <PopupSusu />
        <PopupBravequeen />
        <PopupMuzin />
      </div>
    </div>
  </Teleport>
</template>

<style lang="scss" scoped>
.work_experience {
  padding: 120px 0;
  box-sizing: border-box;
  background-color: #1E1E1E;
  @media screen and (max-width:768px) {
    padding: 40px 20px 80px;
  }
  .exp {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 40px;
    margin: 0 auto;
    word-break: keep-all;
    .title {
      color: white;
      font-size: 44px;
      font-weight: 500;
    }
    .list {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
      row-gap: 20px;
      column-gap: 20px;
    }
  }
}
.over {
  transform: scale(0.9);
}

.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  .popup_bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    cursor: pointer;
  }
  .box {
    width: 100%;
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>