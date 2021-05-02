import axios from "axios";

export const addAuction = (newAuction) => {
    return axios
      .post("http://localhost:5000/auctions/addAuction", {
        name: newAuction.name,
        price: newAuction.price,
        madeBy: newAuction.madeBy,
        weight: newAuction.weight,
        description: newAuction.description,
        supplier: newAuction.supplier,
      })
      .then((response) => {
        alert("Pridėta")
      });
  };
export const deleteAuction = (id) => {
    return axios
      .post("http://localhost:5000/auctions/deleteAuction", {
        id: id,
      })
      .then((response) => {
      });
  };

  export const updateAuction = (updatedAuction) =>{
    return axios
      .post("http://localhost:5000/auctions/updateAuction", {
        id : updatedAuction.id,
        name: updatedAuction.name,
        price: updatedAuction.price,
        madeBy: updatedAuction.madeBy,
        weight: updatedAuction.weight,
        description: updatedAuction.description,
        supplier: updatedAuction.supplier,
      })
      .then((response) => {
        alert("updated")
      })
      .catch((err) => {
        console.log(err);
      });
  }