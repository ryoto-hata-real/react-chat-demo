import React from "react";
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        width: '100%',
        borderColor: '#1cbac8',
        color: '#1cbac8',
        fontWeight: 'bold',
        marginBottom: '8px',
        '&:hover': {
            backgroundColor: '#1cbac8',
            color: '#fff'
        }
    }
})

const Answer = (props) => {
    const classes = useStyles()

    return (
            <Button className={classes.button} variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
                {props.content}
            </Button>
    )
}
export default Answer