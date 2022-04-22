<!-- @format -->

<template>
 
 <div class="col-xl-3 col-lg-4 col-sm-6 text-center">
            <div class="single-product-item">
              <div class="product-image">
                <img :src="require('../assets/'+product.img)" alt="" />
              </div>
              <h3 class="mt-3">{{ product.name }}</h3>
              <p class="product-price mt-3"><span class="mb-2">đơn vị {{ product.unit }}</span>{{ formatPrice(product.price) }}</p>
              <router-link :to="'/san-pham/id='+product.id+'/'+product.slug" class="cart-btn">Xem nhiều mẫu</router-link>
            </div>
          </div>
</template>

<script>
export default {
  methods: {
    formatPrice(price) {
     return price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    },
  },
  props : ['product'],
};
</script>
<style lang="scss" scoped>
.single-product-item {
    box-shadow: 0 0 20px #e4e4e4;
    padding-bottom: 50px;
    border-radius: 5px;
    margin-bottom: 30px;
    overflow: hidden;
    transition: 0.3s;
    h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
}
    .product-image {
    position: relative;
    height: 300px;
    background: #051922;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
     width: auto;
     height: auto;
     max-width: 100%;
     max-height: 100%;
      object-fit: cover;
    }
}
 
p.product-price {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
    font-weight: 700;
    margin-bottom: 15px;
}
p.product-price span {
    display: block;
    opacity: 0.8;
    font-size: 15px;
    font-weight: 400;
}
a.cart-btn {
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
}
</style>
