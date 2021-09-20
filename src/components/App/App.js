import React from 'react'
import Todos from '../Todos/Todos';
import Header from '../Header/Header';
import AddTodo from '../Todos/AddTodo';
import './App.css';

const appName = 'Todo';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        completed: false
      },
      {
        id: 2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        completed: true
      },
      {
        id: 3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        completed: false
      },
      {
        id: 4,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        completed: false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})

  }

  delTodo = (id) => {
    // delete. in fact just using a filter to get a new array without the todo having the id being deleted
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id!==id)]})
  }
  render() {
    return (
    <div className="container">
      <div className="App">
        <Header />
        <AddTodo />
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    </div>
  );  
}
}
export default App;
