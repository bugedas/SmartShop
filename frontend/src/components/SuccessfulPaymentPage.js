import React from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from './Menu'
import { Link} from "react-router-dom";

const SuccessfulPaymentPage = () => {
    return (
        <div>
            <Paper elevation={0}>
                <Menu/>

                <h1>Užsakymas sėkmingai apmokėtas!</h1>
                <Link to="/" className="btn btn-primary">Grįžti į pagrindinį puslapį</Link>
              
            </Paper>
        </div>
    )
}

export default SuccessfulPaymentPage