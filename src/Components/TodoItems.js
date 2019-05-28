import React, { Component } from 'react'
// import PropTypes from 'prop-types';

class TodoItems extends Component {

    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "0.7em",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none" 
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.todo.title}
            </div>
        )
    }
}

// Define prop types for class
// TodoItems.propTypes = {
//     todos: PropTypes.object.isRequired
// }

export default TodoItems
