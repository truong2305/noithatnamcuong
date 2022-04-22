<template>
    <div class="cart mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
              <table class="cart-table">
                <thead class="cart-table-head">
                  <tr class="table-head-row">
                    <th></th>
                    <th>Thời gian</th>
                    <th>
                      Tên
                    </th>
                    <th>
                      Địa chỉ
                    </th>
                    <th>
                      Sđt
                    </th>
                    <th>Tên SP</th>
                    
                    <th>Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="table-body-row" v-for="item in carts" :key="item.id">
                    <td>
                      <button class="product-seen" :class="{'has-seen' : item.seen}" @click="seenCart(item)">
                        <i class="far fa-check-circle"></i>
                      </button>
                      <button class="product-remove " @click="removeCart(item.id)">
                        <i class="far fa-window-close"></i>
                      </button>
                    </td>
                    <td> <span v-html="formatDate(item.created_at)"></span></td>

                  
                    <td>{{ item.name }}
                    </td>
                    <td>{{ item.addr }}</td>
                    <td>{{ item.sdt }}</td>
                    <td class="text-start"><span v-html="formatItem(item.content)"></span></td>
                    <td><span v-html="formatPrice(item.content)"></span></td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
      
    </div>
</template>

<script>
export default {
  data() {
    return {
 carts : []
    }
  },
  methods: {
    formatVnd(price) {
     return price.toLocaleString('vi', {style : 'currency', currency : 'VND'});
    },
    async removeCart(id) {
      if(confirm('Xóa vĩnh viễn đơn hàng này ?')) {
        await this.$store.dispatch('removeCart', id)
      }
    },
    seenCart(item) {
      if(!item.seen) {
          this.$store.dispatch('seenCart', item.id)
        alert('Đã xem qua đơn hàng này')
      }
        
    },
    formatDate(time) {
     let a = new Date(time)
     return `<p>${a.getDate() + ' - th' + (a.getMonth() + 1) + ' - ' + a.getFullYear()} </p><p>${a.getHours()+ 'h : ' + a.getMinutes()+'p'}</p>`
    },
    formatItem(item) {
    let a = JSON.parse(item)
    let htmlText = ''
    a.map( item => htmlText += `<p>- Tên : ${item.name}, sl : ${item.number} ${item.unit}, mẫu : ${item.sample}</p>`)
    return htmlText
  },
  formatPrice(item) {
    let a = JSON.parse(item)
    let htmlText = ''
    a.map( item => htmlText += `<p>${this.formatVnd(item.number*item.price)}</p>`)
    return htmlText
  }
  },
  
  created() {
    this.$http.get('').then(res => {
      return res.json()
    }).then(res => {
      for(let key in res) {
        this.carts.unshift(res[key])
      }
    })
  }
};
</script>

<style lang="scss" scoped>
.cart {
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
  tr.table-head-row th {
    padding: 15px;
    font-weight: 500;
    text-align: center;
  }
  tbody tr td {
    border: 1px solid #efefef;
    padding: 20px 5px;
    color: #051922;
    text-align: center;
  }
  .product-remove {
    color: red;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
  }
 
  .product-seen {
    color: #ddd;
    font-size: 1.2rem;
    background: transparent;
    border: none;
    outline: none;
  }
   .has-seen {
    color:  #28a745;
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
