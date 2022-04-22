<template>
  <div class="mobile " :class="{'active' : open}">
      <div class="mobile-container">
          <div class="icon-close" @click="$emit('close2')">
              <i class="fas fa-times"></i>
          </div>
          <h2>V-home Đà Lạt</h2>
          <hr>
         <nav>
              <ul>
                  <li>
                  <router-link @click.native="$emit('close2')" to="/">Trang chủ</router-link>
              </li>
              <li>
                  <router-link @click.native="$emit('close2')" to="/gioi-thieu">Giới thiệu</router-link>
              </li>
              <li>
                  <router-link @click.native="$emit('close2')" to="cong-trinh">Công trình</router-link>
              </li>
              <li>
                  <router-link @click.native="$emit('close2')" to="san-pham">Sản phẩm</router-link>
              </li>
              <li>
                  <router-link @click.native="$emit('close2')" to="lien-he">Liên hệ</router-link>
              </li>
          </ul>
         </nav>
      </div>
  </div>
</template>

<script>
export default {
props : ['open']
}
</script>
<style lang="scss" scoped>
.mobile {
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 1000000;
    background: rgba(black, 0.5);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s;

    &-container {
        width: 300px;
        height: 100%;
        position: absolute;
        background: #051922;
        right: 0;
        top: 0;
        padding: 3rem 2rem;
        transform: translateX(50%);
        transition: 0.3s;
        .icon-close {
            position: absolute;
            right: 15px;
            top: 15px;
            color: white;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h2 {
            margin: 2rem 0;
             color: #f28123;
             text-align: center;
             font-weight: 800;
             
        }
        hr {
            background: white;
        }
        ul {
            list-style: none;
            margin-bottom: 0;
            padding-left: 0;
            li {
                margin: 2rem 0;
                text-align: center;
                a {
                    padding: 1rem;
                    text-decoration: none;
                    color: white;
                    font-size: 1.2rem;
                    font-weight: 600;
                }
            }
        }
    }
}
.active {
    visibility: visible;
    opacity: 1;
    .mobile-container {
        transform: translateX(0);
    }
}
</style>