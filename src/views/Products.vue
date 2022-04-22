<template>
  <div class="products">
    <title-page class="text-center" firstTitle="Sản" lastTitle="Phẩm"/>
     <div class="container">
      <div class="row product-lists ">
      <product v-for="item in products" :product="item" :key="item.id"/>
          
        </div>
 </div>
  </div>
</template>

<script>
import Product from '../components/Product.vue'
import TitlePage from '../components/TitlePage.vue'
export default {
  components: { TitlePage, Product },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
 
}
</script>

<style lang="scss" scoped>
.products {
  padding: 120px 0;
   @media (max-width: 767.9px) {
    padding: 50px 0;
  }
}
</style>