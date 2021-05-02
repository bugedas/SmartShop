import React from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from '../Menu'
import ManageAuctions from './ManageAuctions'

const ManageAuctionsPage = () => {
    return (
        <div>
            
            <Paper elevation={0}>
                <Menu/>

                <h1>Aukcionai</h1>

                <ManageAuctions/>

            </Paper>

        </div>
    )
}

export default ManageAuctionsPage
