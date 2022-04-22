<template>
  <div class="error-page my-5 text-center">
      <div class="container">
          <div class="row">
              <div class="col-12">
                  <div class="mb-4">
                      <img src="../assets/404.png" alt="">
                  </div>
                  <p>Không tìm thấy trang</p>
                  <router-link to="/" class="cart-btn">Về trang chủ</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.error-page {
    .cart-btn {
        font-family: 'Poppins', sans-serif;
    display: inline-block;
    background-color: #F28123;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
       border-radius: 25px;
       transition: 0.3s;
       &:hover {
      background-color: #051922;
      color: #f28123;
    }
    }
    p {
        font-size: 2rem;
        font-weight: 800;
        opacity: 0.5;
        @media (max-width : 576.9px) {
            font-size: 1.5rem;
        }
    }
}
</style>