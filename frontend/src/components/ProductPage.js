import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from './Menu'
import EvaluationForm from './EvaluationForm'
import Evaluation from './Evaluation'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import axios from "axios";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '100ch',
      backgroundColor: theme.palette.background.paper,
      margin: 'auto',
    },
    ProductWrapper: {
      paddingBottom: '30px',
      paddingTop: '30px',
      maxWidth: '700px',
      margin: 'auto',
    },
    ProductInfoWrap: {
      textAlign: 'left',
    },
  }));

const ProductPage = (props) => {
    const classes = useStyles();
    const [product,setProduct]=useState([]);

     useEffect(() => { 
            axios
            .post("http://localhost:5000/products/getProductById",{
                id:props.match.params.id
            })
            .then((response) => {
              const data = response.data;
              setProduct(data);
            })
            .catch(() => {
              alert("ERROR");
            });
    });

    return (
        <div>
            <Paper elevation={0}>
                <Menu/>
                <Paper elevation={1}>
                  <div className={classes.ProductWrapper}>
                      <h1>Prekės ID: {props.match.params.id}</h1>
                      <h2>Prekės pavadinimas: {product.Name}</h2>
                      <h3>Kaina: {product.Price}</h3>
                      <h3>Kilmės šalis: {product.Made_by} </h3>
                      <h3>Svoris: {product.Weight}</h3>
                      <h3>Aprašymas: {product.Description}s</h3>
                      <h3>Tiekėjas: {product.Suplier} </h3>

                    <div>
                        <Link to="/MakeOrder" className="btn btn-primary">Užsakyti</Link>
                    </div>
                  </div>

                </Paper>
                <EvaluationForm productId={props.match.params.id} bought={true}/>

                <Paper elevation={2}>
                  <List className={classes.root}>
                      {/* Pakeisti kad suktu cikla per visus to produkto komentarus */}
                      <Evaluation rating={3} title="Komentaro pavadinimas" name="Vardas" description="Komentaras apie preke"/>
                      <Evaluation rating={1} title="Labai ilgas komentaro pavadinimas, nes reikia suzinot kaip atrodo" name="Vardas Pavarde" description="Kitoks ir gerokai ilgesnis komentaras apie preke tam, kad pasiziuretume kaip atrodo ilgas komentaras"/>
                  </List>
                </Paper>
            </Paper>
        </div>
    )
}

export default ProductPage
