import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import '../css/MenuStyles.css'

const Menu = () => {
    return (
        <div>
             <Paper elevation={1}>
                <div className='menu'>
                    <MenuItem onClick='#'>Pradžia</MenuItem>
                    <MenuItem onClick='#'>Prekės</MenuItem>
                    <MenuItem onClick='#'>Tiekėjai</MenuItem>
                    <MenuItem onClick='#'>Žemėlapis</MenuItem>
                </div>
            </Paper>

        </div>
    )
}

export default Menu
