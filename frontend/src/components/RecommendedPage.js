import React from 'react'
import Paper from '@material-ui/core/Paper'
import Menu from './Menu'

const Recommended = () => {
    return (
        <div>
            <Paper elevation={0}>
                <Menu/>

                <h1>Rekomenduojamos Prekės</h1>

                {/* ---------------------------------------------------
                    Prasukam cikla pro rekomenduojamas prekes
                    Reikia is backo gaut rekomenduojamu prekiu list'a
                -------------------------------------------------------- */}


                {/* {products.map(product=> (
                    <Product name={product.Name} price={product.Price} about={product.Description} id={product._id}/>
                ))}    */}

            </Paper>
        </div>
    )
}

export default Recommended
