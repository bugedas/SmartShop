import React, {useState} from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Menu'

const AuctionPage = (props) => {

    // GET PRODUCT BY ID - 
    //----------------------------
    //id = props.match.params.id
    //----------------------------

    //const [products,setProducts]=useState([]);

    /* useEffect(() => { 

            axios
            .post("http://localhost:5000/products/getProduct")
            .then((response) => {
              const data = response.data;
              setProducts(data);
            })
            .catch(() => {
              alert("ERROR");
            });


    }); */


    return (
        <div>
            
            <Paper elevation={0}>
                <Menu/>
                <Paper elevation={1}>

                    <h1>Prekės ID: {props.match.params.id}</h1>
                    <h2>Prekės pavadinimas</h2>
                    <h3>Kaina</h3>
                    <h3>Kilmės šalis</h3>
                    <h3>Svoris</h3>
                    <h3>Aprašymas</h3>
                    <h3>Tiekėjas</h3>

                </Paper>
            </Paper>

        </div>
    )
}

export default AuctionPage
