<template>
  <div id="app">
    <transition name="fade">
      <show-popup v-if="showPopup"/>
    </transition>
    <loader />
    <the-header />
    <banner />
    <router-view />
    <call/>
    <slide-slider />
    <the-footer
    />
  </div>
</template>
<script>
import Banner from "./components/Banner.vue";
import Call from "./components/Call.vue";
import Loader from "./components/Loader.vue";
import ShowPopup from './components/ShowPopup.vue';
import SlideSlider from "./components/SlideSlider.vue";
import TheFooter from "./components/TheFooter.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  components: { Loader, TheHeader, Banner, TheFooter, Call, SlideSlider, ShowPopup, },
  computed: {
     showPopup() {
      return this.$store.state.showPopup
    },
  },
};
</script>
<style lang="scss" scoped>
img {
  width: 100%;
}
#app {
.fade-enter-active {
  transition: 0.3s;
  opacity: 1;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.3s ease;
}
}

</style>
