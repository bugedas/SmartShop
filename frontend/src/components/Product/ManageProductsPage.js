import React from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Core/Menu'
import ManageProducts from './ManageProducts'


const ManageProductsPage = () => {
    return (
        <div>
            <Paper elevation={0}>
                <Menu/>

                <h1>Prekės</h1>

                <ManageProducts/>

            </Paper>


           
        </div>
    )
}

export default ManageProductsPage
