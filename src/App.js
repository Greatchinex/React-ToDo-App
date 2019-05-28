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
    

  render() {
      return (
        <div className="App">
          <Todos todo={this.state.todos} />
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
