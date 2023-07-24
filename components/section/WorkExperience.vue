<script lang="ts" setup>
interface ImageType {
  id: number;
  name: string;
  src: string;
  overSrc: string;
  overState: boolean;
}
[];
const imageList = ref<ImageType>([
  {
    id: 0,
    name: "솥밥전문점 아뜨뜨",
    src: "/images/atteu.png",
    overSrc: "/images/atteu_over.png",
    overState: false,
  },
  {
    id: 1,
    name: "저스트텐동",
    src: "/images/tendong.png",
    overSrc: "/images/tendong_over.png",
    overState: false,
  },
  {
    id: 2,
    name: "세컨디 포레스트",
    src: "/images/second.png",
    overSrc: "/images/second_over.png",
    overState: false,
  },
  {
    id: 3,
    name: "수수굉",
    src: "/images/susu.png",
    overSrc: "/images/susu_over.png",
    overState: false,
  },
  {
    id: 4,
    name: "브레이브퀸",
    src: "/images/brave.png",
    overSrc: "/images/brave_over.png",
    overState: false,
  },
  {
    id: 5,
    name: "무진 스튜디오",
    src: "/images/muzin.png",
    overSrc: "/images/muzin_over.png",
    overState: false,
  },
]);
</script>

<template>
  <section class="work_experience">
    <div class="exp">
      <h2 class="title">WORK EXPERIENCE</h2>
      <div class="list">
        <div class="items" v-for="items in imageList" :key="items.id">
          <picture class="thumb"
            ><img
              :src="items.overState ? items.overSrc : items.src"
              style="transition: .3s all"
              :class="{over: items.overState}"
              @mouseover="items.overState = !items.overState"
              @mouseout="items.overState = !items.overState"
              :alt="items.name"
          /></picture>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work_experience {
  padding: 120px 0;
  .exp {
    max-width: 800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    row-gap: 40px;
    margin: 0 auto;
    .title {
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
</style>
