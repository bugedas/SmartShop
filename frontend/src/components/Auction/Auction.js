import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AuctionForm from './AuctionForm'
import {deleteAuction} from "./AuctionFunctions";
import '../../css/ProductStyles.css'
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


const Auction = (props) => {

    const classes = useStyles()
    const [isEdit, setIsEdit] = useState(false)
    const [deleted, setDeleted] = useState(false)

    const EditAuction = () =>{
        setIsEdit(!isEdit)
    }

    const DeleteAuction = (id)=>{
        confirmAlert({
            title: 'Ar tikrai norite ištrinti prekę?',
            message: 'Ar tikrai norite ištrinti prekę?',
            buttons: [
              {
                label: 'Taip',
                onClick: () => {
                    setDeleted(true)
                    deleteAuction(id).then((res) => {
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
                    <Link to={"/auction/"+props.id}>
                        <Typography variant="h5" component="h2">
                           Aukcionas: {props.name}
                        </Typography>
                    </Link>
                    <Typography className={classes.pos} color="textSecondary">
                       Dabartinė kaina: {props.price}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {props.about}
                    </Typography>

                    <Typography variant="body2" component="p">
                       Būsena {props.state}
                    </Typography>
                </CardContent>

                <CardActions>
                    <IconButton aria-label="edit" onClick={EditAuction}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="delete" onClick={() =>DeleteAuction(props.id)}>
                        <DeleteIcon />
                    </IconButton>
                </CardActions>

                <div style={{display: (isEdit ? 'block' : 'none')}}>
                    <AuctionForm update={true} id ={props.id}/>
                </div>

            </Card>
        </div>
    )
}

export default Auction
