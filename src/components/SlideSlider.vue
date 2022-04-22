<!-- @format -->

<template>
  <div class="logo-carousel-section py-3 py-md-4">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <carousel  :perPageCustom="[[0, 4], [767, 7], [992, 9]]" :autoplay="true" :loop="true" :autoplayTimeout="5500" :paginationEnabled="false" :speed="2500">
            <slide v-for="item in products" :key="item.id" class="px-3"> 
                <router-link :to="'/san-pham/id='+item.id+'/'+item.slug">
                    <img :src="require(`../assets/${item.img}`) " alt="" />
                    </router-link>    
            </slide>
          </carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {Carousel, Slide} from "vue-carousel";
export default {
  components: {
    Carousel,
    Slide,
  },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
};
</script>

<style lang="scss" scoped>
.logo-carousel-section {
  background-color: #f5f5f5;
  a {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #051922;
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
</style>
