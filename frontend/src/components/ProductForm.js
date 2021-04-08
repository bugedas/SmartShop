import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import '../css/ProductFormStyles.css'

const ProductForm = () => {
    return (
        <div>
            <form>
                <TextField id="standard-basic" label="Prekės pavadinimas" />
                <TextField id="standard-basic" label="Kaina" />
                <TextField id="standard-basic" label="Kilmės šalis" />
                <TextField id="standard-basic" label="Svoris" />
                <TextField
                    id="standard-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                />
                <TextField id="standard-basic" label="Tiekėjas" />
                <Button className='button'>Spausti</Button>
            </form>

        </div>
    )
}

export default ProductForm
