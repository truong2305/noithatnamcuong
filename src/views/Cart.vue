<!-- @format -->

<template>
  <div class="cart">
    <div class="alert-submit p-3" :class="{ 'show-popup': !close }">
      <div class="text-center">
        Cảm ơn bạn đã tin tưởng sản phẩm của chúng tôi
        <span class="d-block"
          >chúng tôi sẽ sớm liên lạc lại cho bạn &#127809;</span
        >
        <button class="mt-4" @click="close = true">oke</button>
      </div>
    </div>
    <title-page class="text-center" firstTitle="Đặt" lastTitle="Hàng" />
    <div class="cart-section mt-150 mb-150">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            <div class="cart-table-wrap">
              <table class="cart-table">
                <thead class="cart-table-head">
                  <tr class="table-head-row">
                    <th class="product-remove"></th>
                    <th class="product-image d-none d-md-table-cell">
                      Hình ảnh
                    </th>
                    <th class="product-name">Mã SP</th>
                    <th class="product-price">Giá tiền</th>
                    <th class="product-quantity">Số lượng</th>
                    <th class="product-total d-none d-md-table-cell">Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="table-body-row"
                    v-for="item in products"
                    :key="item.id"
                  >
                    <td class="product-remove">
                      <button @click="removeProduct(item.id)">
                        <i class="far fa-window-close"></i>
                      </button>
                    </td>
                    <td class="product-image d-none d-md-table-cell">
                      <img :src="require('../assets/' + item.img)" alt="" />
                    </td>
                    <td class="product-name">
                      {{ item.product_code }}
                      <div>Mẫu {{ item.sample }}</div>
                    </td>
                    <td class="product-price">
                      {{ item.price }}
                      <span class="d-block">đ / {{ item.unit }}</span>
                    </td>
                    <td class="product-quantity">
                      <input
                        type="number"
                        @keyup="updateNumber($event, item.id)"
                        @change="updateNumber($event, item.id)"
                        :value="item.number"
                      />
                    </td>
                    <td class="product-total d-none d-md-table-cell">
                      {{ totalPrice(item) }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="btn-btn mt-5">
              <router-link to="/san-pham">Sản phẩm</router-link>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0">
            <form
              action=""
              @submit.prevent="submitForm"
              @keyup="checkSubmitForm"
            >
              <h3>Thông tin</h3>
              <div class="p-3">
                <div class="d-flex justify-content-between align-items-center">
                  <label for="name"><strong>Họ tên</strong></label>
                  <input type="text" id="name" v-model="name" />
                </div>
                <div
                  class="d-flex justify-content-between my-3 align-items-center"
                >
                  <label for="sdt"><strong>Số đt</strong></label>
                  <input type="text" id="sdt" v-model="sdt" maxlength="11" />
                </div>
                <div class="d-flex justify-content-between align-items-center">
                  <label for="addr"><strong>Địa chỉ</strong></label>
                  <input type="text" id="addr" v-model="addr" />
                </div>
              </div>
              <div class="px-3">
                <small
                  >*Quý khách vui lòng điền đầy đủ thông tin &#128149;</small
                >
              </div>
              <div class="text-center my-3">
                <button :class="{ active: submit }">Gửi</button>
              </div>
            </form>
            <div class="mt-4 text-more">
              <router-link style="color: red; font-size: 1.2rem" to="/lien-he"
                >Quý khách muốn được tư vấn thêm ?</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitlePage from "../components/TitlePage.vue";
export default {
  components: { TitlePage },
  data() {
    return {
      products: [],
      name: "",
      sdt: "",
      addr: "",
      submit: false,
      close: true,
    };
  },
  methods: {
    checkSubmitForm() {
      if (
        this.name.trim().length < 2 ||
        isNaN(this.sdt) ||
        !isNaN(this.name) ||
        !isNaN(this.addr) ||
        this.sdt.trim().length < 10 ||
        this.sdt.trim().length > 11 ||
        this.addr.trim().length < 5
      ) {
        this.submit = false;
      } else {
        this.submit = true;
      }
    },
    submitForm() {
      if (this.submit) {
        let newContent = JSON.parse(localStorage.getItem("products_cart"));
        let arr = [];
        newContent.map((item) =>
          arr.push({
            name: item.name,
            number: item.number,
            unit: item.unit,
            price: item.price,
            sample: item.sample,
          })
        );
        let params = {
          name: this.name,
          sdt: this.sdt,
          addr: this.addr,
          content: JSON.stringify(arr),
          seen: 0,
          created_at : new Date()
        };
        this.$http
          .post(
            "",
            params
          )
          .then(() => {
            this.close = false;
            (this.name = ""), (this.sdt = "");
            this.addr = "";
          });
      }
    },
    removeProduct(id) {
      let product_index = this.products.findIndex((item) => item.id === id);
      this.products.splice(product_index, 1);
      localStorage.setItem("products_cart", JSON.stringify(this.products));
      this.$store.commit("getNumberProductCart");
    },
    updateNumber(e, id) {
      let product_index = this.products.findIndex((item) => item.id === id);
      this.products[product_index].number = e.target.value;
      localStorage.setItem("products_cart", JSON.stringify(this.products));
    },
    totalPrice(item) {
      return (item.price * item.number).toLocaleString("vi", {
        style: "currency",
        currency: "VND",
      });
    },
    getProductCart() {
      this.products = JSON.parse(localStorage.getItem("products_cart"));
    },
  },
  created() {
    setTimeout(() => {
      this.getProductCart();
    }, 300);
  },
};
</script>

<style lang="scss" scoped>
.alert-submit {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(rgb(255, 255, 255), 0.8);
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 600;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s;
  button {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    border: none !important;
    padding: 15px 25px;
    transition: 0.3s;
    border-radius: 30px;
    background-color: #f28123;
    color: #051922;
    &:hover {
      background-color: #051922;
      color: #f28123;
    }
  }
  @media (max-width: 767.9px) {
    font-size: 1.2rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
  }
}
.btn-btn {
  a {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 15px;
    border: none !important;
    padding: 15px 25px;
    transition: 0.3s;
    border-radius: 30px;
    background-color: #f28123;
    color: #051922;
    text-decoration: none;
    &:hover {
      background-color: #051922;
      color: #f28123;
    }
  }
}
.show-popup {
  opacity: 1;
  visibility: visible;
}
.cart {
  margin: 120px 0;
  table.cart-table {
    border: 1px solid #f9f9f9;
    width: 100%;
  }
  table {
    border-collapse: collapse;
  }
  thead.cart-table-head tr {
    background-color: #efefef;
  }
  .table-head-row {
    border: 1px solid #efefef;
  }
  tr.table-head-row th {
    padding: 15px;
    font-weight: 500;
    text-align: center;
  }
  .cart-table-wrap tbody tr td {
    border: 1px solid #efefef;
    padding: 20px 5px;
    color: #051922;
    text-align: center;
  }
  td.product-remove button {
    color: #051922;
    background: transparent;
    border: none;
    outline: none;
  }
  input[type="number"] {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 100px;
    margin-bottom: 0;
  }
  .product-image {
    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }
  form {
    border: 1px solid #ddd;
    h3 {
      background: #efefef;
      text-align: center;
      height: 56px;
      line-height: 56px;
      font-size: 1rem;
      font-weight: 500;
    }
    input {
      flex: 1;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 10px;
      margin-bottom: 0;
    }
    label {
      width: 70px;
    }
    button {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 15px;
      border: none !important;
      padding: 15px 25px;
      transition: 0.3s;
      border-radius: 30px;
      cursor: inherit;
    }
    .active {
      cursor: pointer;
      background-color: #f28123;
      color: #051922;
      &:hover {
        background-color: #051922;
        color: #f28123;
      }
    }
  }
}
@media (max-width: 767.9px) {
  .cart {
    margin: 50px 0;
  }
}
@media (max-width: 576.9px) {
  .cart {
    font-size: 0.85rem;
    .text-more a {
      font-size: 0.95rem !important;
    }
  }
}
</style>
