<!-- @format -->

<template>
      
  <div class="feature">
      <div class="feature-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="featured-text">
            <title-page firstTitle="Tiện" lastTitle="Ích"/>
            <div class="row">
              <div class="col-lg-6 col-md-6 mb-4 mb-md-5">
                <div class="list-box d-flex">
                  <div class="list-icon">
                    <i class="fas fa-shipping-fast"></i>
                  </div>
                  <div class="content">
                    <h3>Vận chuyển tận nhà</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                <div class="list-box d-flex">
                  <div class="list-icon">
                    <i class="fas fa-money-bill-alt"></i>
                  </div>
                  <div class="content">
                    <h3>Giá rẻ</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 mb-5 mb-md-5">
                <div class="list-box d-flex">
                  <div class="list-icon">
                    <i class="fas fa-briefcase"></i>
                  </div>
                  <div class="content">
                    <h3>Chuyên nghiệp</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6">
                <div class="list-box d-flex">
                  <div class="list-icon">
                    <i class="fas fa-sync-alt"></i>
                  </div>
                  <div class="content">
                    <h3>Bảo trì</h3>
                    <p>
                      sit voluptatem accusantium dolore mque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import TitlePage from './TitlePage.vue';
export default {
  components: { TitlePage },};
</script>

<style lang="scss" scoped>
.feature-bg {
  position: relative;
  .list-box {
    overflow: hidden;
    letter-spacing: 0.5px;
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
  &:after {
    background-image: url(../assets/ss2.png);
    position: absolute;
    right: 0;
    top: 0;
    width: 40%;
    height: 100%;
    content: "";
    background-size: cover;
    background-position: center;
    border-top-left-radius: 5px;
    -webkit-box-shadow: 0 0 20px #cacaca;
    box-shadow: 0 0 20px #cacaca;
    border-bottom-left-radius: 5px;
    @media (max-width: 991.9px) {
      display: none;
    }
}
.list-box .content h3 {
    display: block;
    line-height: 22px;
    font-size: 18px;
    font-weight: 800;
    margin-bottom: 4px;
}
}
.feature {
  background:  #f5f5f5;
  padding: 120px 0;
  @media (max-width:767.9px) {
    padding: 50px 0;
  }
}
</style>
