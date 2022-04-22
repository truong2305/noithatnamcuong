<!-- @format -->

<template>
  <div id="sticker-sticky-wrapper" :class="{'is-sticky': isSticky}" class="sticky-wrapper">
    <transition name="fade"><search @close="search = false" ref="searchComponent" v-show="search" /></transition>
    <nav-bar-mobile class="d-block d-lg-none" @close2="isOpen = false" :open="isOpen"/>
    <div class="top-header-area" id="sticker">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-sm-12 text-center">
            <div class="main-menu-wrap">
              <!-- logo -->
              <div class="site-logo">
                <a href="/">
                  VhomeDaLat
                  <span class="d-block d-lg-none">37E Triệu Việt Vương, Đà Lạt</span>
                </a>
              </div>
              <nav class="main-menu" style="display: block">
                <ul>
                  <li class="current-list-item d-lg-inline-block d-none">
                    <router-link to="/" active-class="router-active" exact>Trang chủ</router-link>
                  </li>
                  <li class="d-lg-inline-block d-none">
                    <router-link to="/gioi-thieu" active-class="router-active">Giới thiệu</router-link>
                  </li>
                  <li class="open-menu d-lg-inline-block d-none">
                    <router-link to="/danh-muc/giay-dan-tuong-han-quoc" active-class="router-active"
                      >Danh mục<i style="transform: translateY(1px)" class="fa fa-angle-down float-right ms-2"></i
                    ></router-link>
                    <ul class="sub-menu">
                      <li v-for="item in categories" @click="getCateProducts(item.id)" :key="item.id">
                        <router-link :to="'/danh-muc/' + item.slug">{{ item.name }}</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="d-lg-inline-block d-none">
                    <router-link to="/cong-trinh" active-class="router-active">Công trình</router-link>
                  </li>
                  <li class="d-lg-inline-block d-none">
                    <router-link to="/san-pham" active-class="router-active">Sản phẩm</router-link>
                  </li>
                  <li class="d-lg-inline-block d-none">
                    <router-link to="/lien-he" active-class="router-active">Liên hệ</router-link>
                  </li>
                  <li>
                    <div class="header-icons">
                      <a class="mobile-hide search-bar-icon" style="cursor: pointer" @click="openSearch"
                        ><i class="fas fa-search"></i
                      ></a>

                      <router-link to="/dat-hang" class="cart-icon" active-class="router-active">
                        <div class="cart-icon-number">
                          <small>{{ getNumberProductCart }} </small>
                        </div>
                        <i class="fas fa-shopping-cart"></i
                      ></router-link>
                      <a class="d-inline-block d-lg-none" @click="isOpen = true" style="cursor: pointer; font-size : 1.2rem"><i class="fas fa-bars"></i></a>
                      <router-link to="/login" class="d-lg-inline-block d-none" active-class="router-active"> <i class="far fa-user"></i></router-link>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBarMobile from './NavBarMobile.vue';
import Search from "./Search.vue";
export default {
  components: {Search,NavBarMobile},
  data() {
    return {
      isSticky: false,
      search: false,
      isOpen : false,
    };
  },

  computed: {
    categories() {
      return this.$store.state.categories;
    },
    getNumberProductCart() {
      return this.$store.state.getNumberProductCart;
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.$store.commit("getNumberProductCart");
  },
  methods: {
    openSearch() {
      this.search = true
     this.$refs.searchComponent.$refs.searchInput.focus();
    },
    getCateProducts(id) {
      this.$store.commit("getCateProducts", id);
    },
    handleScroll() {
      if (window.scrollY > 10) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.cart-icon {
  position: relative;

  &-number {
    position: absolute;
    background: red;
    top: 3px;
    right: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    small {
      font-size: 0.6rem;
    }
  }
}

.sticky-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999 !important;
  .top-header-area {
    transition: 0.3s;
    position: absolute;
    z-index: 999;
    width: 100%;
    padding: 25px 0;
    .main-menu-wrap {
      position: relative;
      .site-logo {
        float: left;
        max-width: 180px;
       a {
         color: #f28123;
         text-decoration: none;
         font-size: 2rem;
         font-weight: 800;
         span {
           font-size: 0.8rem;
           font-weight: 600;
         }
       }
      }
      nav.main-menu ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
          position: relative;
          display: inline-block;
          a {
            color: #fff;
            text-decoration: none;
            font-weight: 700;
            display: block;
            padding: 15px;
            transition: 0.3s;
            &:hover {
              color: #f28123;
            }
            @media (max-width : 767.9px) {
              padding: 15px 0.5rem;
            }
          }
          &:last-child {
            float: right;
            a {
              display: inline-block;
            }
          }
          .sub-menu {
            position: absolute;
            background-color: #fff;
            width: 300px;
            padding: 15px 15px;
            margin: 0;
            left: 0;
            top: 50px;
            border-radius: 3px;
            transition: 0.3s ease;
            opacity: 0;
            visibility: hidden;
            box-shadow: 0 0 20px #555555;
            transform: translateY(10px);
            li {
              display: block;
              text-align: left;
              &:last-child {
                float: unset;
              }
              a {
                color: #051922;
                padding: 8px;
                font-weight: 600;
                transition: 0.3s;
                &:hover {
                  color: #f28123;
                }
              }
            }
          }
        }
        .open-menu {
          &:hover {
            .sub-menu {
              opacity: 1;
              visibility: visible;
              transform: translateY(0);
            }
          }
        }
      }
    }
  }
  .router-active {
    color: #f28123 !important;
  }
}
.sticky-wrapper.is-sticky .top-header-area {
  background-color: #051922;
  padding: 15px 0;
}
@media (max-width : 991.9px) {
  .sticky-wrapper {
  .top-header-area {
    .main-menu-wrap {
      .site-logo {
       a {
         font-size: 1.7rem;
       }
      }
    }
  }
}
@media (max-width : 576.9px) {
  .sticky-wrapper {
  .top-header-area {
    .main-menu-wrap {
      .site-logo {
       a {
         font-size: 1.5rem;
         span {
           font-size: 0.65rem;
         }
       }
      }
    }
  }
}
}}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
