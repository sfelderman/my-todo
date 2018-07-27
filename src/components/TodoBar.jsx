import React from 'react';
import { TextField } from '../../node_modules/@material-ui/core';

const TodoBar = ({inputValue, onKeyPress, handleChange}) => {
    return (
        <TextField 
            autoFocus 
            value={inputValue} 
            label='Create a new todo' 
            type='text' 
            onKeyPress={onKeyPress}
            onChange={handleChange}
        />
    );
};

export default TodoBar;