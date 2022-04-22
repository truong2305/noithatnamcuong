<!-- @format -->

<template>
  <div class="container">
  
    <div class="row justify-content-center">
        <h4 class="text-center mb-4">Ban điều hành</h4>
      <div class="col-lg-3 col-md-6">
        <div class="single-team-item">
          <div class="team-bg team-bg-1"></div>
          <h4>Nam Trần <span>Chủ tịch</span></h4>
          <ul class="social-link-team">
            <li>
              <a href="https://www.facebook.com/nam.tran.56232938" target="_blank"><i class="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="tel:0911154919" ><i class="fa fa-phone"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mt-3 mt-md-0">
        <div class="single-team-item">
          <div class="team-bg team-bg-2"></div>
          <h4>Thu Hằng <span>Thư ký</span></h4>
          <ul class="social-link-team">
            <li>
              <a href="https://www.facebook.com/baotran.tran.718689" target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="tel:0911154919" ><i class="fa fa-phone"></i></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 mt-3 mt-lg-0">
        <div class="single-team-item">
          <div class="team-bg team-bg-3"></div>
          <h4>Cường Seven <span>Giám đốc</span></h4>
          <ul class="social-link-team">
            <li>
              <a href="https://www.facebook.com/profile.php?id=100027358021781" target="_blank"
                ><i class="fab fa-facebook-f"></i
              ></a>
            </li>
            <li>
              <a href="tel:0911154919" ><i class="fa fa-phone"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
      <div class="row">
      <div class="col-lg-8 col-12 offset-lg-2 mt-5">
        <p class="text-center">
          Cùng đội ngũ hơn 20 nhân viên có trình độ cao, phong cách phục vụ chuyên nghiệp và tận tâm sẽ mang đến cho
          khách hàng sự hài lòng khi lựa chọn sản phẩm, sử dụng dịch vụ của V-home.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
  h4 {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;

    span {
      font-size: 70%;
      display: block;
      margin-top: 10px;
      opacity: 0.7;
    }
  }
  p {
      font-size: 1.2rem;
  }
.single-team-item {
  position: relative;
 
  .team-bg {
    height: 400px;
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    background-color: #ddd;
  }
  .team-bg-1 {
    background-image: url(../../assets/nam.jpg);
  }
  .team-bg-2 {
    background-image: url(../../assets/hang.jpg);
  }
  .team-bg-3 {
    background-image: url(../../assets/cuong.jpg);
  }
 
  ul.social-link-team {
    position: absolute;
    bottom: 80px;
    left: 0;
    right: 0;
    margin: 0;
    padding: 0;
    list-style: none;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  ul.social-link-team li a {
    color: #fff;
    background-color: #f28123;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    display: block;
    margin: 5px;
    transition: 0.3s;
    &:hover {
      background: black;
      color: #f28123;
    }
  }
}
@media (max-width:767.9px) {
  p {
      font-size: 0.9rem;
  }
}
</style>
