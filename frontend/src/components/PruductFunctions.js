import axios from "axios";

export const addProduct = (newProduct) => {
    return axios
      .post("http://localhost:5000/products/addProduct", {
        name: newProduct.name,
        price: newProduct.price,
        madeBy: newProduct.madeBy,
        weight: newProduct.weight,
        description: newProduct.description,
        supplier: newProduct.supplier,
      })
      .then((response) => {
        alert("Pridėta")
      });
  };
export const deleteProduct = (id) => {
    return axios
      .post("http://localhost:5000/products/deleteProduct", {
        id: id,
      })
      .then((response) => {
      });
  };

  export const updateProduct = (updatedProduct) =>{
    return axios
      .post("http://localhost:5000/products/updateProduct", {
        id : updatedProduct.id,
        name: updatedProduct.name,
        price: updatedProduct.price,
        madeBy: updatedProduct.madeBy,
        weight: updatedProduct.weight,
        description: updatedProduct.description,
        supplier: updatedProduct.supplier,
      })
      .then((response) => {
        alert("updated")
      })
      .catch((err) => {
        console.log(err);
      });
  }