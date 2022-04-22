<!-- @format -->

<template>
  <transition name="fadeLoad">
      <div v-if="isLoader" class="loader">
        <div class="loader-inner">
          <div class="circle"></div>
        </div>
      </div>
  </transition>
</template>

<script>
export default {
  computed: {
    isLoader() {
      return this.$store.state.loader;
    },
  },
};
</script>

<style lang="scss" scoped>
.loader {
  bottom: 0;
  height: 100%;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1111;
  background: #fff;
  overflow-x: hidden;
  &-inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .circle {
      width: 8vmax;
      height: 8vmax;
      border-right: 4px solid #000;
      border-radius: 50%;
      animation: spinRight 800ms linear infinite;
      &:before {
        content: "";
        width: 6vmax;
        height: 6vmax;
        display: block;
        position: absolute;
        top: calc(50% - 3vmax);
        left: calc(50% - 3vmax);
        border-left: 3px solid #f28123;
        border-radius: 100%;

        animation: spinLeft 800ms linear infinite;
      }
      &:after {
        content: "";
        display: block;
        position: absolute;
        border-left: 3px solid #f28123;
        border-radius: 100%;
        width: 4vmax;
        height: 4vmax;
        top: calc(50% - 2vmax);
        left: calc(50% - 2vmax);
        border: 0;
        border-right: 2px solid #000;
        animation: none;
      }
    }
  }
  @keyframes spinRight {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spinLeft {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-720deg);
    }
  }
}

.fadeLoad-enter-active,
.fadeLoad-leave-active {
  transition: opacity 0.3s ease;
}

.fadeLoad-enter-from,
.fadeLoad-leave-to {
  opacity: 0;
}
</style>
