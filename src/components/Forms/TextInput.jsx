import React from 'react'
import TextField from '@mui/material/TextField';

const TextInput = (props) => {
    return(
        <TextField
            margin={"dense"}
            id={props.id}
            label={props.label}
            multiline={props.multiline}
            rows={props.rows}
            onChange={props.onChange}
            type={props.type}
            fullWidth={true}
            value={props.value}
        />
    )
}

export default TextInput
