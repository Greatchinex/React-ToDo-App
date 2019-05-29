import React, { Component } from 'react'
import TodoItems from './TodoItems';
// import PropTypes from 'prop-types';

class Todos extends Component {


    render() {
        const todoList = this.props.todo.map(todo => <TodoItems todo={todo} key={todo.id} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />)
        return (
            <div>
                {todoList}
            </div>
        )
    }
}

// Define prop types for class
// Todos.propTypes = {
//     todos: PropTypes.array.isRequired
// }

export default Todos
