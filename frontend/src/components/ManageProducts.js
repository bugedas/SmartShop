import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Product from './Product'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import ProductForm from './ProductForm'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'
import '../css/ManageProductsStyle.css'
import axios from "axios";
const ManageProducts = () => {

    const [products,setProducts]=useState([]);

    useEffect(() => { 

            axios
            .post("http://localhost:5000/products/getProduct")
            .then((response) => {
              const data = response.data;
              setProducts(data);
            })
            .catch(() => {
              alert("ERROR");
            });


    });

    

    const [isAddClicked, setIsAddClicked] = useState(false)

    const onAddClick = () =>{
        setIsAddClicked(true)
    }   
    const onAddClose= () =>{
        setIsAddClicked(false)
    }   

    return (
        <div>
            <Paper className='paper' elevation={3} style={{display: 'flex', flexDirection:'column'}}>

                <div className='centerAddNew'>
                    <Button style={{float: 'left'}}
                        variant="contained"
                        color="primary"
                        className='addNew'
                        endIcon={<AddIcon/>}
                        onClick={onAddClick}
                    >
                        Add New
                    </Button>

                    <div style={{maxWidth:'300px', display: (isAddClicked ? 'block' : 'none')}}>
                        <IconButton aria-label="close" onClick={onAddClose}>
                            <CloseIcon />
                        </IconButton>
                        <ProductForm/>
                    </div>
                </div>
                
                <div style={{display: 'flex', flexDirection:'row', padding: '50px', flexFlow: 'row wrap'}}>

                {products.map(product=> (

                  <Product name={product.Name} price={product.Price} about={product.Description} id={product._id}/>
                ))}          



                </div>
            </Paper>
        </div>
    )
}

export default ManageProducts
