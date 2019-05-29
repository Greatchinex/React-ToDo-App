import React,  { Component } from 'react';
import Header from './Components/Layouts/Header';
import Todos from './Components/Todos';
import './App.css';
import AddTodo from './Components/AddTodo';
import uuid from 'uuid';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: [
         {
           id: uuid.v4(),  // uuid: a package to generate random id's instead of hardcoding them.
            title: "Learn React",
           completed: false
         },
         {
          id: uuid.v4(),
          title: "Make a Todo App",
          completed: true
        },
        {
          id: uuid.v4(),
          title: "Get a Developer Job",
          completed: false
        }
       ]
    }
  }

  // toggle if todo is completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  // Delete Todo Items
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  // Add Todo Item
  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title, // title: title is how its supposed tobe but in ES6 if the key and value are the same yoou can just set it to: title
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }
    

  render() {
      return (
        <div className="App">
          <div className="container">
            <Header />
            <AddTodo addTodo={this.addTodo} />
            <Todos todo={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
          </div>
        </div>
      )
  }
}








// function App() {
//   return (
//     <div className="App">
//       <Todos />
//     </div>
//   );
// }

export default App;
