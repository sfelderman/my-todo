import React from 'react';
import PropTypes from 'prop-types';
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

TodoBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TodoBar;