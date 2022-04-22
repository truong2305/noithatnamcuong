<!-- @format -->

<template>
  <div class="home">
    <feature />
    <div class="product-section mt-120 mb-120">
      <title-page class="text-center mb-md-4 mt-5" firstTitle="Sản" lastTitle="Phẩm" />
      <div class="container">
        <div class="row product-lists">
          <product v-for="product in products" :product="product" :key="product.id" />
        </div>
      </div>
      <div class="text-center">
        <router-link to="/san-pham">
          <button class="cart-btn">Xem thêm</button>
        </router-link>
      </div>
      <div class="container mt-120">
        <div class="row">
          <carousel
            :per-page="1"
            :speed="1000"
            :paginationEnabled="false"
            :autoplay="true"
            :loop="true"
          >
            <slide class="col-12">
              <div class="text-center">
                <div class="owl-item cloned">
                  <div class="single-testimonial-slider">
                    <div class="client-avater">
                      <img src="../assets/avt5.jpg" alt="" />
                    </div>
                    <div class="client-meta">
                      <h3>Huyền Trang<span>Khách hàng</span></h3>
                      <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae
                        dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium "
                      </p>
                      <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
              <slide class="col-12">
              <div class="text-center">
                <div class="owl-item cloned">
                  <div class="single-testimonial-slider">
                    <div class="client-avater">
                      <img src="../assets/avt1.jpg" alt="" />
                    </div>
                    <div class="client-meta">
                      <h3>Anh Phan<span>Khách hàng</span></h3>
                      <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae
                        dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium "
                      </p>
                      <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
              <slide class="col-12">
              <div class="text-center">
                <div class="owl-item cloned">
                  <div class="single-testimonial-slider">
                    <div class="client-avater">
                      <img src="../assets/avt2.jpg" alt="" />
                    </div>
                    <div class="client-meta">
                      <h3>Phan Ngọc Thạch<span>Khách hàng</span></h3>
                      <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae
                        dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium "
                      </p>
                      <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
              <slide class="col-12">
              <div class="text-center">
                <div class="owl-item cloned">
                  <div class="single-testimonial-slider">
                    <div class="client-avater">
                      <img src="../assets/avt.png" alt="" />
                    </div>
                    <div class="client-meta">
                      <h3>Diệu Hiền<span>Khách hàng</span></h3>
                      <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae
                        dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium "
                      </p>
                      <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
              <slide class="col-12">
              <div class="text-center">
                <div class="owl-item cloned">
                  <div class="single-testimonial-slider">
                    <div class="client-avater">
                      <img src="../assets/avt3.jpg" alt="" />
                    </div>
                    <div class="client-meta">
                      <h3>Bảo Trần<span>Khách hàng</span></h3>
                      <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae
                        dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium "
                      </p>
                      <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
              <slide class="col-12">
              <div class="text-center">
                <div class="owl-item cloned">
                  <div class="single-testimonial-slider">
                    <div class="client-avater">
                      <img src="../assets/avt6.jpg" alt="" />
                    </div>
                    <div class="client-meta">
                      <h3>Đặng Tiến<span>Khách hàng</span></h3>
                      <p class="testimonial-body">
                        " Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae
                        dict eaque ipsa quae ab illo inventore Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium "
                      </p>
                      <div class="last-icon">
                        <i class="fas fa-quote-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
      </div>
      <title-page class="text-center mb-md-4 mt-120" firstTitle="Công" lastTitle="Trình" />
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-3" v-for="item in constructions" :key="item.id">
            <div class="single-latest-news">
              <div class="latest-news-bg">
                <div class="show-popup" @click="showPopup(item.imgs)">
                  <b-icon icon="arrows-angle-expand" scale="1.5" aria-hidden="true"></b-icon>
                </div>
                <carousel
                  :per-page="1"
                  :speed="1000"
                  paginationPosition="bottom-overlay"
                  paginationActiveColor="#f28123"
                  :centerMode="true"
                >
                  <slide v-for="img in item.imgs" :key="img">
                    <div style="height: 100%" class="d-flex align-items-center justify-content-center">
                      <img :src="require('../assets/' + img)" alt="" />
                    </div>
                  </slide>
                </carousel>
              </div>
              <div class="news-text-box">
                <h3>{{ item.title }}</h3>
                <p class="blog-meta">
                  <span class="date">{{ item.date }} th{{ item.month }}, {{ item.year }}</span>
                </p>
                <pre class="excerpt">{{ item.content }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-3">
        <router-link to="/cong-trinh">
          <button class="cart-btn">Xem thêm</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Feature from "../components/Feature.vue";
import Product from "../components/Product.vue";
import TitlePage from "../components/TitlePage.vue";
import {Carousel, Slide} from "vue-carousel";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Feature,
    Product,
    TitlePage,
    Carousel,
    Slide,
  },
  computed: {
    products() {
      return this.$store.state.productsHome;
    },
    constructions() {
      return this.$store.state.constructionsHome;
    },
  },
  mounted() {
    this.$store.commit("getProductsHome");
    this.$store.commit("getConstructionsHome");
  },
  methods: {
    showPopup(imgs) {
      this.$store.commit("getImgs", imgs);
    },
  },
};
</script>

<style lang="scss" scoped>
.mt-120 {
  margin-top: 120px;
}
.client-meta h3 {
  font-size: 20px;
  font-weight: 700;
  span {
    display: block;
    font-size: 70%;
    margin-top: 10px;
    color: #051922;
    font-weight: 600;
    opacity: 0.5;
  }
}
.client-avater {
  border-radius: 50%;
  overflow: hidden;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  margin-bottom: 1.5rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
p.testimonial-body {
  font-size: 17px;
  font-style: italic;
  width: 700px;
  margin: 0 auto;
  line-height: 1.8;
  color: #999999;
  margin-top: 20px;
  @media (max-width: 767.9px) {
    width: auto;
  }
}
.last-icon {
  margin-top: 20px;
  font-size: 25px;
  opacity: 0.3;
}
.mb-120 {
  margin-bottom: 120px;
}
.single-latest-news {
  box-shadow: 0 0 20px #dddddd;
  transition: 0.3s;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  .latest-news-bg {
    position: relative;
    height: 300px;
    background: #051922;
    .show-popup {
      position: absolute;
      top: 10px;
      right: 10px;
      z-index: 2;
      color: white;
      cursor: pointer;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 300px;
      object-fit: cover;
    }
  }
}
p.blog-meta span {
  margin-right: 15px;
  opacity: 0.6;
  color: #051922;
  font-size: 0.85em;
}
.news-text-box {
  padding: 25px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.single-latest-news h3 {
  font-size: 20px;
  line-height: 1.25em;
  font-weight: 700;
}
p {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.1px;
  line-height: 1.8;
  color: #051922;
  margin: 0 0 1.25rem 0;
}
.excerpt {
  line-height: 1.8;
  color: #555;
  word-wrap: break-word; /* IE 5.5-7 */
  white-space: -moz-pre-wrap; /* Firefox 1.0-2.0 */
  white-space: pre-wrap;
}
a .cart-btn {
  font-family: "Poppins", sans-serif;
  display: inline-block;
  background-color: #f28123;
  color: #fff;
  padding: 10px 20px;
  border: none;
  text-decoration: none;
  border-radius: 25px;
  transition: 0.3s;
  &:hover {
    background-color: #051922;
    color: #f28123;
  }
}
@media (max-width: 767.9px) {
  .mt-120 {
    margin-top: 50px;
  }
  .mb-120 {
    margin-bottom: 50px;
  }
}
</style>
