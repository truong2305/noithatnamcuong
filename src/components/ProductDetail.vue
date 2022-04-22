<template>
  <div class="product-detail mb-5" v-if="product">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-sm-7 col-12 offset-lg-1 product-detail-img">
          <div class="product-detail-img-main">
            <img
              :src="require(`../assets/${product.type[indexSelect].img}`)"
              alt=""
            />
          </div>
          <div class="d-flex product-detail-img-more mt-3">
            <div
              v-for="(type, index) in product.type"
              :class="{ active: index === indexSelect }"
              :key="index"
              @click="select(index, type.name)"
            >
              <img :src="require(`../assets/${type.img}`)" alt="" />
            </div>
          </div>
        </div>
        <div class="col-sm-5 col-12 offset-lg-1 mt-4 mt-sm-0">
          <p class="d-none d-sm-block">V-home Đà Lạt</p>
          <h3 class="mb-lg-5 mb-sm-4 mb-3">{{ product.name }}</h3>
          <pre>{{ product.description }}</pre>

          <h4>{{ formatPrice(product.price) }} / {{ product.unit }}</h4>
          <div class="mb-4">
            <span>{{ name }}</span>
          </div>
          <router-link
            to="/dat-hang"
            @click.native="addCart(product)"
            class="cart-btn"
            ><i class="fas fa-shopping-cart"></i> Đặt hàng</router-link
          >
          <div class="mt-3">
            <router-link to="/lien-he" class="cart-btn contact"
              >Liên hệ tư vấn</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indexSelect: 0,
      isActive: false,
      name: "",
    };
  },
  created() {
    this.$store.commit("getProductDetail", this.$route.params.id);
    this.name = this.product.type[0].name;
  },
  computed: {
    product() {
      return this.$store.state.productDetail;
    },
    id() {
      return this.$route.params.id;
    },
  },
  watch: {
    id() {
      this.$store.commit("getProductDetail", this.$route.params.id);
      console.log(this.$route.params.id);
      console.log(this.id);
      this.name = this.product.type[0].name;
    },
  },
  methods: {
    select(index, name) {
      this.indexSelect = index;
      this.name = name;
    },
    imgSlide(imgs) {
      return JSON.parse(imgs);
    },
    formatPrice(price) {
      return price.toLocaleString("vi", { style: "currency", currency: "VND" });
    },
    addCart(product) {
      product.number = 10;
      product.sample = this.name;
      product.img = product.type[this.indexSelect].img
      let productCart = localStorage.getItem("products_cart");
      if (productCart) {
        let products_cart = JSON.parse(productCart);
        let findProduct = products_cart.find((item) => item.id === product.id);
        if (findProduct) {
          const index = products_cart.indexOf(findProduct);
          products_cart.splice(index, 1);
          products_cart.unshift(product);
          localStorage.setItem("products_cart", JSON.stringify(products_cart));
        } else {
          products_cart.unshift(product);
          localStorage.setItem("products_cart", JSON.stringify(products_cart));
        }
      } else localStorage.setItem("products_cart", JSON.stringify([product]));
      this.$store.commit("getNumberProductCart");
    },
  },
};
</script>

<style lang="scss" scoped>
.product-detail {
  margin-top: 120px;
  p {
    font-size: 1.2rem;
    font-weight: 700;
    color: #f28123;
  }
  h3 {
    font-weight: 800;
    font-size: 2rem;
  }
  pre {
    font-size: 1rem;
    opacity: 0.8;
    word-wrap: break-word; /* IE 5.5-7 */
    white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
    white-space: pre-wrap;
  }
  span {
    font-weight: 700;
    color: rgb(149, 153, 153);
  }
  h4 {
    font-weight: 700;
  }
  .cart-btn {
    font-family: "Poppins", sans-serif;
    display: inline-block;
    background-color: #f28123;
    color: #fff;
    padding: 10px 20px;
    text-decoration: none;
    border-radius: 25px;
    transition: 0.3s;
    font-weight: 600;
    &:hover {
      background-color: #051922;
      color: #f28123;
    }
  }
  .contact {
    background: rgb(226, 230, 235);
    color: black;
  }
  &-img {
    &-main {
      border-radius: 10px;
      height: 450px;
      background: #051922;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
    &-more {
      flex-wrap: wrap;
      div {
        cursor: pointer;
        border-radius: 3px;
        width: calc(100% / 7);
        padding: 2px;
        margin-bottom: 4px;
        height: 60px;
        background: #051922;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .active {
        border: 2px solid #f28123;
      }
      div:nth-child(2n) {
        margin: 0 5px;
      }
      img {
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
      }
    }
  }
  @media (max-width: 991.9px) {
    p {
      font-size: 1.1rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 767.9px) {
    margin-top: 50px;

    h3 {
      font-size: 1.2rem;
    }
    pre {
      font-size: 0.9rem;
    }
    h4 {
      font-size: 1.1rem;
    }
    span {
      font-size: 0.9rem;
    }
    &-img {
      &-main {
        height: 350px;
      }
    }
  }
}
</style>