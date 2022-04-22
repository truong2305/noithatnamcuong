<template>
  <div class="category">
      <title-page class="text-center" firstTitle="Danh" lastTitle="Mục"/>
      <p class="text-cate text-center">
          {{ cateTitle }}
      </p>
      <category-products/>
  </div>
</template>

<script>
import CategoryProducts from '../components/CategoryProducts.vue'
import TitlePage from '../components/TitlePage.vue'
export default {
  components: { CategoryProducts, TitlePage },
  computed: {
      cateTitle() {
          return this.$store.state.cateTitle
      }
  }

}
</script>

<style lang="scss" scoped>
.category{
    margin: 120px 0;
    .text-cate {
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 40px;
    }
}
</style>