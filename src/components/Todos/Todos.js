import React from 'react'
import TodoItem from './TodoItem';

class Todos extends React.Component {
 
  render() {
    return this.props.todos.map((todo) => (
        // <h3>{ todo.title }</h3>
        <TodoItem key={todo.id} todo = {todo} markComplete = {this.props.markComplete} delTodo={this.props.delTodo}/>
    ))
    
  }
}
export default Todos;
