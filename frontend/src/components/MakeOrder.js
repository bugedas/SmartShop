import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from './Menu'
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import PayPal from './PayPal';

const MakeOrder = () => {
    
    const [checkout, setCheckOut] = useState(false)

    return (                
        <div>
            {checkout ? (
                <PayPal />
            ) : (
            <Paper elevation={0}>
                <Menu/>

                <h1>Užsakyti</h1>

                {/* ---------------------------------------------------
                    Gaunam prekę iš backendo arba iš prekės lango, parodom ją čia ir paklausiam ar vartotojas nori ją užsakyti
                -------------------------------------------------------- */}
                    <h1>Prekės ID:</h1>
                    <h2>Prekės pavadinimas</h2>
                    <h3>Kaina</h3>
                    <h3>Kilmės šalis</h3>
                    <h3>Svoris</h3>
                    <h3>Aprašymas</h3>
                    <h3>Tiekėjas</h3>                    
                    <Button onClick={() => {setCheckOut(true);}} className='button'>Užsakyti</Button>
                    <Link to="/products" className="btn btn-primary">Atšaukti</Link>                
            </Paper>
            )}
        </div>
    )
}

export default MakeOrder
