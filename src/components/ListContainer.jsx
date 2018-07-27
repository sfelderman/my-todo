import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckBox from '@material-ui/core/Checkbox'

const TodoList = ({todos, onTodoToggled}) => {
  return (
    <div className='TodoList'>
      <List>
        {todos.map((todo) =>
          <ListItem
            key={todo.id}
            button
            onClick={() => onTodoToggled(todo)}
          >
          <CheckBox checked={todo.checked} />
          <ListItemText primary={todo.text} />
          </ListItem>
        )}
      </List>
    </div>
    );
};

export default TodoList;