import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ProductForm from './ProductForm'
import {deleteProduct} from "./PruductFunctions";
import '../css/ProductStyles.css'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


const Product = (props) => {

    const classes = useStyles()
    const [isEdit, setIsEdit] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const onEditClick = () =>{
        setIsEdit(!isEdit)
    }

    const onDeleteClick = (id)=>{
        confirmAlert({
            title: 'Ar tikrai norite ištrinti prekę?',
            message: 'Ar tikrai norite ištrinti prekę?',
            buttons: [
              {
                label: 'Taip',
                onClick: () => {
                    setDeleted(true)
                    deleteProduct(id).then((res) => {
                    });
                }
              },
              {
                label: 'Ne',
                onClick: () => {}
              }
            ]
          });
        /* setDeleted(true)
        deleteProduct(id).then((res) => {
          }); */

    }

    

    return (
        <div>
            
            <Card className='card' style={{display:(deleted ? 'none' : 'block')}}>
                <CardContent>
                    <Link to={"/product/:"+props.id}>
                        <Typography variant="h5" component="h2">
                            {props.name}
                        </Typography>
                    </Link>
                    <Typography className={classes.pos} color="textSecondary">
                        {props.price}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {props.about}
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton aria-label="edit" onClick={onEditClick}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() =>onDeleteClick(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                    
                </CardActions>

                <div style={{display: (isEdit ? 'block' : 'none')}}>
                    <ProductForm update={true} id ={props.id}/>
                </div>

            </Card>

        </div>
    )
}

export default Product
