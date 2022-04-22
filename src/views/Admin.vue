<template>
  <div>
    <div class="d-flex justify-content-center align-items-center mt-5">
      <title-page class="text-center" firstTitle="Quản" lastTitle="Lý"/><p class="nav-item ms-5" @click="logout"><b-icon icon="power" scale="1.5" aria-hidden="true"></b-icon></p>
    </div>
    <cart-admin/>
  </div>
</template>

<script>
import CartAdmin from '../components/admin/CartAdmin.vue'
import TitlePage from '../components/TitlePage.vue'
export default {
  components: {  TitlePage, CartAdmin },
  methods : {
    logout() {
      if (confirm('Đăng xuất ?')) {
        localStorage.removeItem('token')
        this.$router.push({path : '/login'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  cursor: pointer;
}
</style>