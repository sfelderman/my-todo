import React from 'react';
import {connect} from 'react-redux';
import {addTodo, toggleTodo} from '../actions/todos'
import PropTypes from 'prop-types';
import TodoBar from './TodoBar';
import TodoList from './ListContainer';

class TodoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ''
        }

        this.onKeyPress = this.onKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({inputValue: e.target.value})
    }

    onKeyPress(ev) {
        if (ev.key === 'Enter') {
            const value = this.state.inputValue;
          if (value.length) {
            this.props.onCreateTodo(value.trim());
            ev.preventDefault();
            this.setState({inputValue: ''});
          }
        }
    };

    render() {
        const {todos, onTodoToggled} = this.props;
        const {inputValue} = this.state;

        return (
            <React.Fragment>
                <TodoBar inputValue={inputValue} onKeyPress={this.onKeyPress} handleChange={this.handleChange}/>
                <TodoList todos={todos} onTodoToggled={onTodoToggled}/>
            </React.Fragment>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
      onCreateTodo(todo) {
        dispatch(addTodo(todo));
      },
      onTodoToggled(todo) {
        dispatch(toggleTodo(todo.id))
      }
    }
};

TodoContainer.propTypes = {
    onCreateTodo: PropTypes.func.isRequired,
    onTodoToggled: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)
(TodoContainer);