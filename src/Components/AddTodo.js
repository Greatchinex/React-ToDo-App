import React, { Component } from 'react'

class AddTodo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            title: ""
        }
    }

    // Change state on user input
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // On click of submit button
    submit = (e) => {
        this.props.addTodo(this.state.title);
        this.setState({
            title: "",
        })
        e.preventDefault();
    }
    

    render() {
        return (
            <form style={{display: "flex"}} onSubmit={this.submit}>
                <input type="text" name="title" placeholder="Add Todo Item"  onChange={this.change} style={{flex: "10", padding: "5px"}} value={this.state.title} />
                <input type="submit" value="submit" className="btn" style={{flex: "1"}} />
            </form>
        )
    }
}

export default AddTodo
