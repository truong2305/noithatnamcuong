

export const mutations = {
    setLoader(state) {
        state.loader = true
        setTimeout(() => {
            state.loader = false
        },500)
    },
    getProductsHome(state) {
        let shuffled = [...state.products]
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        state.productsHome = shuffled.slice(0,8)
    },
    getConstructionsHome(state) {
        state.constructionsHome = [...state.constructions].slice(0,3)
    },
    getNumberProductCart(state) {
        if(localStorage.getItem("products_cart")) {
            state.getNumberProductCart = JSON.parse(localStorage.getItem("products_cart")).length;
        }
        
    },
    getCateProducts(state, data) {
        state.cateProducts = [...state.products].filter(item => item.cate_id == data)
        state.cateTitle = state.categories.find(item => item.id === data).name
    },
    getCarts(state,data) {
        state.carts = data.reverse()
    },
    getImgs(state,data) {
        state.imgs = data
        state.showPopup = true
    },
    hiddenPopup(state) {
        state.imgs = []
        state.showPopup = false
    },
   
    getProductDetail(state, id) {
       let product = [...state.products].find(item => item.id == id)
        state.productDetail = product
    }
}