import React from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Core/Menu'
import { Link} from "react-router-dom";

const SuccessfulPaymentPage = (props) => {
    return (
        <div>
            <Paper elevation={0}>
                <Menu/>

                <h1>Užsakymas sėkmingai įvykdytas!</h1>
                <h3>Užsakyta prekė {props.productName} už {props.productPrice} eur.</h3>
                <Link to="/" className="btn btn-primary">Grįžti į pagrindinį puslapį</Link>
              
            </Paper>
        </div>
    )
}

export default SuccessfulPaymentPage