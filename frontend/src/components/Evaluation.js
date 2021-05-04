import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
    inline: {
      display: 'inline',
    },
  }));

const Evaluation = (props) => {
    const classes = useStyles();

    return (
        <>
            <ListItem alignItems="flex-start">
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Įvertinimas:</Typography>
                    <Rating name="read-only" value={props.rating} readOnly />
                </Box>
                <ListItemText
                primary={props.title}
                secondary={
                    <React.Fragment>
                    <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                    >
                        {props.name}
                    </Typography>
                    <br/>
                    {props.description}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}

export default Evaluation
