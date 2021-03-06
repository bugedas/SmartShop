import React, { useState, useEffect } from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Core/Menu'
import Button from '@material-ui/core/Button';
import { Link, useParams} from "react-router-dom";
import PayPal from './PayPal';
import axios from "axios";
import {addOrder} from "./OrderFunctions";
var crypto = require("crypto");
const MakeOrder = (props) => {
    
    const [PayForOrder, setPayForOrder] = useState(false)
    const [product,setProduct]=useState([]);
    const { id } = useParams()
    const ord_id = crypto.randomBytes(20).toString('hex');

    useEffect(() => {
        axios
        .post("http://localhost:5000/products/getProductById",{
            id:id
        })
        .then((response) => {
          const data = response.data;
          setProduct(data);
        })
        .catch(() => {
          alert("ERROR");
        });
},[]);

    const submitData = () =>{        
    const newOrder ={
        price: product.Price,
        product_id: product._id,
        order_id: ord_id,
    }
    addOrder(newOrder).then((res)=>{
        alert("ok")
    });
    }


    return (                
        <div>
            {PayForOrder ? (
                <PayPal orderID={ord_id} productName={product.Name} productPrice={product.Price}/>
            ) : (
            <Paper elevation={0}>
                <Menu/>

                <h1>Užsakyti</h1>

                {/* ---------------------------------------------------
                    Gaunam prekę iš backendo arba iš prekės lango, parodom ją čia ir paklausiam ar vartotojas nori ją užsakyti
                -------------------------------------------------------- */}
                    <h1>Prekės ID: {id}</h1>
                    <h2>Prekės pavadinimas: {product.Name}</h2>
                    <h3>Kaina: {product.Price}</h3>
                    <h3>Kilmės šalis: {product.Made_by}</h3>
                    <h3>Svoris: {product.Weight}</h3>
                    <h3>Aprašymas: {product.Description}</h3>
                    <h3>Tiekėjas: {product.Suplier}</h3>
                    <Button onClick={() => {setPayForOrder(true);submitData();}} className='button'>Užsakyti</Button>
                    <Link to="/products" className="btn btn-primary">Atšaukti</Link>                
            </Paper>
            )}
        </div>
    )
}

export default MakeOrder
