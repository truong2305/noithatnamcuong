<!-- @format -->

<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <title-page class="text-center" firstTitle="Đăng" lastTitle="Nhập" />
          <p class="text-center">
            Chức năng đăng nhập chỉ dành cho admin, khách hàng khi mua sản phẩm
            <span class="d-block">không cần đăng nhập vào trang này</span>
          </p>
          <form action="" class="col-4 offset-4 mt-5"  @submit.prevent="login">
            <div>
              <input type="text"  placeholder="adminname" autocomplete="off" v-model="name" maxlength="20"/>
            </div>
            <div class="mt-4">
              <input type="password" placeholder="password" autocomplete="off" v-model="pass" maxlength="30"/>
            </div>
            <div class="mt-3" style="color : red">
                {{ err }}
            </div>
            <div class="mt-5">
              <button>Đăng nhập</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "./TitlePage.vue";
export default {
  components: {TitlePage},
  data() {
      return {
          err : '',
          name : '',
          pass : ''
      }
  },
  methods: {
     async  login() {
        //  let params = {
        //      name : this.name,
        //      pass : this.pass
        //  }
         if(this.name.trim() < 1 || this.pass.trim() < 1) {
            this.err = 'Nhập kí tự'
         }
        //  else {
        //       await axios.post(`${Base_url}/api/signIn`, params).then(res => {
        //       if(res.data.code === 200) {
        //           this.err = ''
        //           window.localStorage.setItem("token", res.data.token);
        //           this.$router.push({path : '/admin2211'})
        //       } if(res.data.code === 401) {
        //           this.err = res.data.error
        //       }
        //   })
        //  }
         
      }
  }
};
</script>

<style lang="scss" scoped>
.login {
  margin: 120px 0;
  p {
    font-size: 18px;
    font-weight: 500;
  }
  form {
    input {
      width: 100%;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 3px;
    }
    button {
      background-color: #f28123;
      color: #051922;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 15px;
      border: none !important;
      cursor: pointer;
      padding: 15px 25px;
      transition: 0.3s;
      border-radius: 30px;
      &:hover {
        background-color: #051922;
        color: #f28123;
      }
    }
  }
}
</style>
