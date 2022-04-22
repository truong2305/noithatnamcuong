<!-- @format -->

<template>
  <div class="container">
    <div class="row product-lists">
      <product v-for="item in products" :product="item" :key="item.id" />
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";
export default {
  components: {Product},
  computed: {
    products() {
      return this.$store.state.cateProducts;
    },
  },
};
</script>

<style></style>
