import React, {useState} from 'react'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {addProductEvaluation} from "./PruductFunctions";
import { Link } from "react-router-dom";

const EvaluationForm = (props) => {

    const [value, setValue] = useState(2);
    const [description,setDescription] = useState("");

    const submitEvaluation = () =>{
        if( description.length <= 3){
            alert("Aprašymas turi būti ilgesnis nei 3 simboliai!")
        }
        else{
            const newEvaluation ={
                rating: value,
                comment: description,
                id: props.productId,
            }

            addProductEvaluation(newEvaluation).then((res)=>{
                window.location.reload();
            });


            
        }
    }

    return (
        <div>
            {props.bought ? (
                <>
                    
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Įvertinkite</Typography>
                        <Rating name="simple-controlled" value={value} onChange={(event, newValue) => 
                            {setValue(newValue);
                        }} />
                    </Box>

                    <TextField
                        className='textField'
                        label="Pridėti komentarą"
                        value={description} 
                        onChange={e => setDescription(e.target.value)}
                        multiline
                    />

                    <Button className='button' onClick={submitEvaluation}>Vertinti</Button>

                    <Link to={"/MakeOrder/"+props.productId} className="btn btn-primary">Užsakyti</Link>    
                </>
            )
            :(
                <>
                
                </>
            )}
        </div>
    )
}

export default EvaluationForm
