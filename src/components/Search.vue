<!-- @format -->

<template>
  <div class="search">
      <div class="search-close" @click="$emit('close')">
          <b-icon icon="x-circle" scale="1.5" aria-hidden="true"></b-icon>
      </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-8 col-sm-10 offset-sm-1 col-12 offset-md-2 offset-lg-3" style="transform: translateY(-30%)">
          <div>
            <div class="mb-5">
              <h2>
                V-Home Đà Lạt
                <span class="d-block mt-3"> Nâng tầm cuộc sống</span>
              </h2>
            </div>
            <div class="search-box">
              <input
                ref="searchInput"

                class="text-center"
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                @keyup="checkInput"
                v-model="input"
              />
              <div class="search-box-actions d-flex">
                <div class="me-2" @click="removeTextInput">
                  <b-icon icon="x" aria-hidden="true"></b-icon>
                </div>
              </div>
              <ul class="px-1 py-2 mt-2 mb-0" v-show="input.length > 0 && searchData.length > 0">
                <li v-for="item in searchData" :key="item.id">
                  <router-link :to="'/san-pham/id=' + item.id + '/' + item.slug" @click.native="$emit('close')">{{ item.name }}</router-link>
                </li>
              </ul>
            </div>
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
      input: "",
      searchData: [],
    };
  },
  methods: {
     
    checkInput() {
      this.searchData = this.$store.state.products;
      let arr = this.searchData.filter((item) =>
        item.name
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/đ/g, "d")
          .replace(/Đ/g, "D")
          .includes(
            this.input
              .toLowerCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .replace(/đ/g, "d")
              .replace(/Đ/g, "D")
          )
      );
      this.searchData = arr;
    },
    removeTextInput() {
      this.input = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(#ffffff, 0.8);
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  z-index: 1000000;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  .search-close {
      position: absolute;
      top: 20px;
      right: 40px;
      color: #051922;
      cursor: pointer;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  h2 {
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    color: #f28123;

    span {
      color: #051922;

      font-size: 1.2rem;
      font-weight: 500;
      opacity: 0.7;
    }
  }
  input {
    flex: 1;
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 0;
    width: 100%;
    background: white;
    font-size: 1.2rem;
    font-weight: 600;
    outline: none;
  }
  .search-box {
    position: relative;
  }
  .search-box-actions {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.5rem;
    div {
      border-radius: 3px;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.3s;
      cursor: pointer;
      &:hover {
        background-color: rgb(233, 233, 233);
      }
    }
  }
  ul {
    position: absolute;
    padding: 2rem;
    padding-top: 0;
    background: white;
    border-radius: 5px;
    list-style: none;
    width: 100%;
    border: 1px solid rgb(0, 0, 0);
    max-height: 400px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fafafa;
    }
    &::-webkit-scrollbar-thumb {
      background: rgb(216, 216, 216);
      border-radius: 5px;
      height: 100px;
    }
    li {
      a {
        padding: 0.5rem 1rem;
        display: block;
        color: inherit;
        text-decoration: none;
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
  @media (max-width : 991.9px) {
      h2 {
          font-size: 2.5rem;
          span {
              font-size: 1.1rem;
          }
      }
       .search-close {
           right: 20px;
       }
  }
  @media (max-width : 576.9px) {
      h2 {
          font-size: 2rem;
          span {
              font-size: 1rem;
          }
      }
       ul {
    padding: 1rem;
    max-height: 200px;
    li {
      a {
        font-size: 1rem;
      }
    }
  }
  input {
      padding: 0.5rem;
      font-size: 1rem;
  }
    
  }
}
</style>
