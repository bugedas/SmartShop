import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Core/Menu'
import axios from "axios";
import Product from './Product'



const Recommended = () => {
  const [products,setProducts]=useState([]);
  
  useEffect(() => { 

    axios
    .post("http://localhost:5000/products/RecommendedProducts")
    .then((response) => {
      const data = response.data;
      console.log("da",data)
      setProducts(data);
    })
    .catch(() => {
      alert("ERROR");
    });
  
  },[]);



    return (
        <div>
            <Paper elevation={0}>
                <Menu/>

                <h1>Rekomenduojamos Prekės</h1>

                {products.sort((a, b) => a.evaluation[0].Rating - b.evaluation[0].Rating).filter(p=> p.order[0].Count > 3 && p.evaluation[0].Count>3).slice(0,5).map(p=>(
                   <Product name={p.Name} price={p.Price} about={p.Description} id={p._id}/>
                  ))}

            </Paper>
        </div>
    )
}

export default Recommended
