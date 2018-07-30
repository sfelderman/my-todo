import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/icons/Delete';
import { IconButton, ListItemSecondaryAction } from '@material-ui/core';

const ListContainer = ({todos, onTodoToggled, onTodoDeleted}) => {
  return (
    <div className='ListContainer'>
      <List>
        {todos.map((todo) =>
          <ListItem
            key={todo.id}
            button
            onClick={() => onTodoToggled(todo)}
          >
            <CheckBox checked={todo.checked} />
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction onClick={() => onTodoDeleted(todo)}>
              <IconButton aria-label="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )}
      </List>
    </div>
    );
};

ListContainer.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoToggled: PropTypes.func.isRequired,
  onTodoDeleted: PropTypes.func.isRequired
};

export default ListContainer;