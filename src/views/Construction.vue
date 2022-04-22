<!-- @format -->

<template>
  <div class="construction">
    <title-page class="text-center" firstTitle="Nổi" lastTitle="Bật" />
    <div class="latest-news my-md-5">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 mb-3"
            v-for="item in constructions"
            :key="item.id"
          >
            <div class="single-latest-news">
              <div class="latest-news-bg">
                <div class="show-popup" @click="showPopup(item.imgs)">
                  <b-icon
                    icon="arrows-angle-expand"
                    scale="1.5"
                    aria-hidden="true"
                  ></b-icon>
                </div>
                <carousel
                  :per-page="1"
                  :speed="1000"
                  paginationPosition="bottom-overlay"
                  paginationActiveColor="#f28123"
                  :centerMode="true"
                >
                  <slide v-for="img in item.imgs" :key="img">
                    <div style="height: 100%;" class="d-flex align-items-center justify-content-center">
                      <img :src="require('../assets/'+img)" alt="" />
                    </div>
                  </slide>
                </carousel>
              </div>
              <div class="news-text-box">
                <h3>{{ item.title }}</h3>
                <p class="blog-meta">
                  <span class="date"
                    >{{ item.date }} th{{ item.month }}, {{ item.year }}</span
                  >
                </p>
                <pre class="excerpt">{{ item.content }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: { TitlePage, Carousel, Slide },
  computed: {
    constructions() {
      return this.$store.state.constructions;
    },
  },
  methods: {
    showPopup(imgs) {
      this.$store.commit("getImgs", imgs);
    },
  },
};
</script>

<style lang="scss" scoped>
.VueCarousel-wrapper {
  .VueCarousel-dot {
    width: 5px !important;
    height: 5px !important;
  }
  
}

.construction {
  padding: 120px 0;
  @media (max-width: 767.9px) {
    padding: 50px 0;
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
}
</style>
