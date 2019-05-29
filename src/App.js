import React,  { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header';
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/Layouts/About';
import axios from 'axios';
import './App.css';
import uuid from 'uuid';   // uuid: a package to generate random id's instead of hardcoding them.

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: [
        //  {
        //    id: uuid.v4(),  // uuid: a package to generate random id's instead of hardcoding them.
        //     title: "Learn React",
        //    completed: false
        //  }
       ]
    }
  }

  // Life cycle method: Like ngOnint in angular
  componentDidMount() {
    // Get Request
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")   // ?_limit=10: to limit the todos coming from the api to 10
      .then(
        res => this.setState({todos: res.data})
      ) 

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(
        res => this.setState({
          todos: [...this.state.todos.filter(todo => todo.id !== id)]
        })
      )
  }

  // Add Todo Item
  addTodo = (title) => {
    axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed:false}) // title: title is how its supposed tobe but in ES6 if the key and value are the same yoou can just set it to: title
      .then(
        res => this.setState({
          todos: [...this.state.todos, res.data]
        })
      ) 
      .catch(
        err => console.log(err)
      )
  }
    

  render() {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todo={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
                </React.Fragment>
              )} />
              <Route path="/about" component={About} />              
            </div>
          </div>
        </Router>
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
