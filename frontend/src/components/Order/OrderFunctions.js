import axios from "axios";

export const addOrder = (newProduct) => {
    return axios
      .post("http://localhost:5000/orders/addOrder", {
        price: newProduct.price,
        product_id: newProduct.product_id,
      })
      .then((response) => {
        alert("Pridėta")
      });
  };