// /** @format */

// import {Base_url} from "../main";
// import axios from "axios";

// export const actions = {
//   async addProduct({commit}, data) {
//     await axios.post(`${Base_url}/api/addProduct`, data).then((response) => {
//       commit("getProducts", response.data);
//     });
//   },
//   async getProducts({commit}) {
//     await axios.get(`${Base_url}/api/getProducts`).then((response) => {
//       commit("getProducts", response.data);
//     });
//   },
//   async updateInfo({commit}, data) {
//     await axios.post(`${Base_url}/api/updateInfomations`, data).then((response) => {
//       commit("getInfomations", response.data);
//     });
//   },
//  
//   async getCarts({commit}) {
//     await  axios.get(`${Base_url}/api/getCarts`).then((response) => {
//       commit("getCarts", response.data);
//     });
//   },
//   async removeCart({commit}, data) {
//     await axios.delete(`${Base_url}/api/removeCart/${data}`).then((response) => {
//       commit("getCarts", response.data);
//     })
//   },
//   seenCart({commit}, data) {
//     axios.post(`${Base_url}/api/seenCart/${data}`).then((response) => {
//       commit("getCarts", response.data);
//     })
//   },
//   removeProduct({commit}, data) {
//     axios.delete(`${Base_url}/api/removeProduct/${data}`).then((response) => {
//       commit("getProducts", response.data);
//     })
//   },
//   addConstruction(dt, data) {
//     axios.post(`${Base_url}/api/addConstruction`, data)
//   },
// };
