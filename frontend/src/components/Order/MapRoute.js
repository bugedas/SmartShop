import React from 'react'
import Menu from '../Core/Menu'
import Paper from '@material-ui/core/Paper'
import MapBoxMap from './MapBoxMap'

const MapRoute = () => {
    return (
        <div>
            
            <Paper elevation={0}>

                <Menu/>
                <MapBoxMap/>
                

            </Paper>
        </div>
    )
}

export default MapRoute
