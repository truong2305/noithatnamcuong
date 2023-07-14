<!-- @format -->

<template>
  <div class="contact">
    <div class="container">
      <div class="form-title">
        <h2>Liên hệ tư vấn</h2>
        <p class="mb-0">
          Hãy cho tôi 1 bức tường phẳng, tôi sẽ làm nên điều bạn mong muốn!
        </p>
      </div>
    </div>
    <div class="list-section pt-80 pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div
              class="
                list-box
                d-flex
                align-items-center
                justify-content-md-center
              "
            >
              <div class="list-icon">
                <i class="fa fa-facebook"></i>
              </div>
              <a href="https://www.facebook.com/Namtran1008" target="_blank"
                ><div class="content">
                  <h3>facebook</h3>
                  <p>Nam Trần</p>
                </div></a
              >
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div
              class="
                list-box
                d-flex
                align-items-center
                justify-content-md-center
              "
            >
              <div class="list-icon">
                <i class="fas fa-phone-volume"></i>
              </div>
              <a href="tel:0911154919">
                <div class="content">
                  <h3>Điện thoại</h3>
                  <p>0911 154 919</p>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="
                list-box
                d-flex
                justify-content-md-center
                align-items-center
              "
            >
              <div class="list-icon">
                <i class="fas fa-sync"></i>
              </div>
              <a href="https://Zalo.me/0911154919" target="_blank">
                <div class="content">
                  <h3>Zalo</h3>
                  <p>0911 154 919</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <title-page class="text-center mb-md-4 mt-5" firstTitle="Vị trí"
      ><i class="fas fa-map-marker-alt"></i
    ></title-page>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.7354098494716!2d108.4326141146005!3d11.923492891549499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317113496a670dcd%3A0x3f2014fe8f4b3cfe!2zMzdlIMSQxrDhu51uZyBUcmnhu4d1IFZp4buHdCBWxrDGoW5nLCBQaMaw4budbmcgMywgVGjDoG5oIHBo4buRIMSQw6AgTOG6oXQsIEzDom0gxJDhu5NuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1648186904140!5m2!1svi!2s"
     style="border: 0; width: 100%; height: 100vh"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";

export default {
  components: { TitlePage },
  computed: {
    infomations() {
      return this.$store.state.infomations;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  margin-top: 50px;
  .form-title {
    margin-bottom: 25px;
    h2 {
      font-size: 25px;
      font-weight: 700;
      line-height: 3.25rem;
    }
    p {
      font-size: 15px;
      line-height: 1.8;
    }
  }
  .list-section {
    background-color: #f5f5f5;
    .list-box {
      overflow: hidden;
      letter-spacing: 0.5px;
      p {
        margin: 0;
        font-size: 1.2rem;
      }
      a {
        color: black;
        text-decoration: none;
      }
      .list-icon i {
        display: block;
        font-size: 24px;
        margin-right: 15px;
        color: #f28123;
        width: 65px;
        height: 65px;
        text-align: center;
        line-height: 60px;
        border: 2px #f28123 dotted;
        border-radius: 999px;
      }
    }
  }
  .pb-80 {
    padding-bottom: 80px;
  }
  .pt-80 {
    padding-top: 80px;
  }
  @media (max-width: 767.9px) {
    .pb-80 {
      padding-bottom: 50px;
    }
    .pt-80 {
      padding-top: 50px;
    }
  }
  @media (max-width: 576.9px) {
    .form-title {
      h2 {
        font-size: 18px;
        line-height: initial;
      }
      p {
        font-size: 13px;
      }
    }
    .list-section {
      .list-box {
        h3 {
          font-size: 18px;
        }
        p {
          font-size: 1rem;
        }
        .list-icon i {
          font-size: 20px;

          width: 45px;
          height: 45px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
