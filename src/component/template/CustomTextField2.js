import React from 'react';
import {FormControl, TextField} from '@material-ui/core';
import './Template.css'

const CustomTextField2 = ({register, errors, name, label, required, disabled}) =>{
    const [state, setState] = React.useState({
        name: '',
    })

    const handleChange = (event) => {
        setState({...state, [event.target.id]: event.target.value})
    }
    return (
        <FormControl className={required ? "required_input" : "input"}>
            <TextField
                onChange={handleChange}
                id={name}
                name={name}
                label={label}
                variant="outlined"
                disabled={disabled ? true: false}
                inputRef={
                    register({
                        required: true,
                        minLength: 1,
                    })}
                error={errors ? true : false}

                helperText={
                    errors ? errors.type === "required"
                        ? "필수항목 입니다." :
                        // "min length is 2 characters" :
                        null :
                        null }
            />
        </FormControl>
    );
}

export default CustomTextField2;
