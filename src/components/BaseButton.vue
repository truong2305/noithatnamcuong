<template>
      <router-link to="/san-pham"><button>Xem sản phẩm</button></router-link>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
  button {
      font-family: "Poppins", sans-serif;
      background-color: #fff;
      color: #f28123;
      padding: 10px 30px;
      border-radius: 20px;
      transition: 0.3s;
      font-weight: 700;
      font-size: 1.1rem;
      border: none;
      &:hover {
        background: #f28123;
        color: #ffffff;
      }
      @media (max-width: 576.9px) {
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
      }
    }
</style>