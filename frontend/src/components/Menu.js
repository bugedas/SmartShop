import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import '../css/MenuStyles.css'
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div>
             <Paper elevation={1}>
                <div className='menu'>
                <Link to="/">
                    <MenuItem onClick='#'>Pradžia</MenuItem>
                </Link>
                <Link to="/products">
                    <MenuItem onClick='#'>Prekės</MenuItem>
                </Link>
                <Link to="/auctions">
                    <MenuItem onClick='#'>Aukcionai</MenuItem>
                </Link>
                <Link to="/recommended">
                    <MenuItem onClick='#'>Rekomenduojamos Prekės</MenuItem>
                </Link>
                    <MenuItem onClick='#'>Žemėlapis</MenuItem>
                </div>
            </Paper>

        </div>
    )
}

export default Menu
