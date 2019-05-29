import React, { Component } from 'react'
// import PropTypes from 'prop-types';

class TodoItems extends Component {

    // Css Inline styles
    getStyle = () => {
        return {
            background: "#f4f4f4",
            padding: "0.7em",
            borderBottom: "1px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none" 
        }
    }

    

    render() {
        const {id, title} = this.props.todo; // Destructuring

        return ( 
            <div style={this.getStyle()}>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {" "}   {/* {" "}: To add a space between the checkbox and the items. this.props.markcomplete is using a prop as a method */}
                {title}
                <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)} >X</button>
            </div>
        )
    }
}

const btnStyle = {
    background: "#ff4081",
    color: "white",
    border: "none",
    borderRadius: "50%",
    padding: "5px 9px",
    float: "right",
    cursor: "pointer"
}

// Define prop types for class
// TodoItems.propTypes = {
//     todos: PropTypes.object.isRequired
// }

export default TodoItems
