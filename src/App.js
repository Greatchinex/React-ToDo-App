import React,  { Component } from 'react';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: [
         {
           id: 1,
           title: "Learn React",
           completed: false
         },
         {
          id: 2,
          title: "Make a Todo App",
          completed: true
        },
        {
          id: 3,
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
    

  render() {
      return (
        <div className="App">
          <Todos todo={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
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
