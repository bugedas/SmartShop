import React, {useState, useEffect} from 'react'
import Paper from '@material-ui/core/Paper'
import Auction from './Auction'
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import AuctionForm from './AuctionForm'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'
import '../../css/ManageProductsStyle.css'
import axios from "axios";


const ManageAuctions = () => {


    const [auctions,setAuctions]=useState([]);

    useEffect(() => { 
             axios
             .post("http://localhost:5000/auctions/getAuctions")
            .then((response) => {
               const data = response.data;
               setAuctions(data);
             })
             .catch(() => {
              alert("ERROR");
             });
    })


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
                        <AuctionForm/>
                    </div>
                </div>
                
                <div style={{display: 'flex', flexDirection:'row', padding: '50px', flexFlow: 'row wrap'}}>
                    {auctions.map(auction=> (
                        <Auction name={auction.Name} price={auction.Price} about={auction.Description} id={auction._id} state={auction.State}/>
                    ))}
                </div>
            </Paper>

        </div>
    )
}

export default ManageAuctions
