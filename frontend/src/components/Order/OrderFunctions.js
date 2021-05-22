import axios from "axios";

export const addOrder = (newProduct) => {
    return axios
      .post("http://localhost:5000/orders/addOrder", {
        price: newProduct.price,
        product_id: newProduct.product_id,
        order_id: newProduct.order_id
      })
      .then((response) => {
        alert("Pridėta")
      });
  };

export const updateOrder = (updatedOrder) =>{
    return axios
      .post("http://localhost:5000/orders/updateOrder", {
        order_id : updatedOrder.order_id,
        price : updatedOrder.price,
        state : updatedOrder.state,
      })
      .then((response) => {
        alert("updated")
      })
      .catch((err) => {
        console.log(err);
      });
  };