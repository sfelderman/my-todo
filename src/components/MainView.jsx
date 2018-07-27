import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckBox from '@material-ui/core/Checkbox'
import {toggleTodo} from '../actions/todos'
// import styles from './ListContainer.css';

const MainView = ({}) => {

}

const mapStateToProps = (state) => {
    return {
    //   todos: state.todos
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onCreateTodo(todo) {
        dispatch(toggleTodo(todo.id))
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)
(MainView);