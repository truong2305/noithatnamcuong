<!-- @format -->

<template>
    <div class="show-popup">
      <div class="hidden-popup" @click="hiddenPopup">
        <b-icon icon="arrows-angle-contract" scale="1.5" aria-hidden="true"></b-icon>
      </div>
      <div class="show-popup-img">
        <carousel
          :per-page="1"
          :speed="1000"
          :centerMode="true"
          paginationPosition="bottom-overlay"
          paginationActiveColor="#f28123"
        >
          <slide v-for="img in imgs" :key="img">
            <div  style="height: 100%;" class="d-flex align-items-center justify-content-center">
              <img :src="require('../assets/'+img)" alt="" />
            </div>
          </slide>
        </carousel>
      </div>
    </div>
</template>

<script>
import {Carousel, Slide} from "vue-carousel";
export default {
  components: {Carousel, Slide},
  computed: {
    imgs() {
      return this.$store.state.imgs;
    },
  },
  methods: {
    hiddenPopup() {
      this.$store.commit("hiddenPopup");
    },
  },
};
</script>

<style lang="scss" scoped>
.show-popup {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(black, 0.9);
  z-index: 10000000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  .hidden-popup {
    position: absolute;
    top: 20px;
    right: 40px;
    color: white;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
  justify-content: center;
  align-items: center;
  }
  &-img {
    width: 50vw;
    height: 70vh;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
        max-height: 70vh;
    object-fit: cover;
  }
 
    @media (max-width: 991.9px) {
    .hidden-popup {
      right: 20px;
    }
    &-img {
      width: 80vw;
      max-height: 90vh;
    }
  }
  @media (max-width: 576.9px) {
    &-img {
      width: calc( 100vw - 20px ) !important;
      max-height: 90vh;
    }
  }
}

</style>
