<!-- @format -->

<template>
  <div class="about">
    <title-page class="text-center" firstTitle="Giới" lastTitle="Thiệu" />
    <div class="container">
      <p class="text-center mb-5 text-desc">Hãy cho tôi 1 bức tường phẳng, tôi sẽ làm nên điều bạn mong muốn!</p>
      <nav class="mb-md-5 mb-4">
        <ul class="nav nav-tabs">
          <li
            class="nav-item"
            :class="{ active: isInfo }"
            @click="isInfo = true"
          >
            Thông tin
          </li>
          <li
            class="nav-item"
            :class="{ active: !isInfo }"
            @click="isInfo = false"
          >
            Thành viên
          </li>
        </ul>
      </nav>
      <transition name="fade">
        <info
          v-if="isInfo"
        />
        <team
          v-if="!isInfo"
        />
      </transition>
      <div class="about-text">
        CHÂN THÀNH CẢM ƠN VÀ NHẬN SỰ HỢP TÁC TỪ QUÝ KHÁCH HÀNG
        <div class="mt-ms-5 mt-4">
          <router-link to="lien-he">Liên hệ tư vấn</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Info from "../components/about/Info.vue";
import Team from "../components/about/Team.vue";
import TitlePage from "../components/TitlePage.vue";
export default {
  components: { TitlePage, Info, Team },
  data() {
    return {
      isInfo: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.about {
  padding: 120px 0;
  @media (max-width: 767.9px) {
    padding: 50px 0;
  }
  .text-desc {
    margin-top: -1rem;
  }
  &-text {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 5rem;
    a {
      font-family: "Poppins", sans-serif;
      display: inline-block;
      background-color: #f28123;
      color: #fff;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 50px;
      font-size: 1rem;
      transition: 0.3s;
      &:hover {
        background: #051922;
        color: #f28123;
      }
    }
  }
}
.nav-tabs {
  border-bottom: none;
  justify-content: center;
  position: relative;
  li {
    cursor: pointer;
    margin-bottom: 0;
    margin: 0 2rem;
    color: #999999;
    font-weight: 700;
    text-decoration: none;
    transition: 0.3s;
    font-size: 1.2rem;
    &:hover {
      color: black;
    }
  }
  &:before {
    position: absolute;
    left: 0;
    top: 12px;
    height: 1px;
    width: 370px;
    background: #f28123;
    content: "";
  }
  &:after {
    position: absolute;
    right: 0;
    top: 12px;
    height: 1px;
    width: 370px;
    background: #f28123;
    content: "";
  }
  .active {
    color: #051922;
  }
}
@media (max-width: 1400px) {
  .nav-tabs {
    li {
      margin: 0 1rem;
    }
    &:before {
      width: 340px;
    }
    &:after {
      width: 340px;
    }
  }
}
@media (max-width: 1199.9px) {
  .nav-tabs {
    li {
      font-size: 1.1rem;
    }
    &:before {
      width: 250px;
    }
    &:after {
      width: 250px;
    }
  }
}
@media (max-width: 991.9px) {
  .nav-tabs {
    &:before {
      width: 0;
    }
    &:after {
      width: 0;
    }
  }
}
@media (max-width: 576.9px) {
  .nav-tabs {
    li {
      font-size: 1.1rem;
      margin: 0 0.7rem;
    }
  }
  .about-text {
    font-size: 1.1rem !important;
  }
}
.fade-enter-active {
  transition: 0.5s;
  opacity: 1;
  transform: translateX(0);
}
.fade-enter {
  opacity: 0;
  transform: translateX(-50px);
}
.fade-leave {
  opacity: 0;
}
</style>
