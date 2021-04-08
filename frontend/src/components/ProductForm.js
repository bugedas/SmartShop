import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import '../css/ProductFormStyles.css'

const ProductForm = () => {
    return (
        <div className='form'>
            <form>
                <TextField className='textField' label="Prekės pavadinimas" />
                <TextField className='textField' label="Kaina" />
                <TextField className='textField' label="Kilmės šalis" />
                <TextField className='textField' label="Svoris" />
                <TextField
                    className='textField'
                    label="Aprašymas"
                    multiline
                />
                <TextField className='textField' label="Tiekėjas" />
                <Button className='button'>Spausti</Button>
            </form>

        </div>
    )
}

export default ProductForm
