import React from 'react';
import {connect} from 'react-redux';
import TodoContainer from './TodoContainer';
// import PropTypes from 'prop-types';

const MainView = () => {
  return (
    <TodoContainer/>
  );
};

const mapStateToProps = (state) => {
    return {
    //   todos: state.todos
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
      // onCreateTodo(todo) {
      //   dispatch(toggleTodo(todo.id));
      // }
    };
  };

MainView.propTypes = {
  // todos: PropTypes.array.isRequired,
  // onTodoToggled: PropTypes.func.isRequired,
  // onTodoDeleted: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)
(MainView);