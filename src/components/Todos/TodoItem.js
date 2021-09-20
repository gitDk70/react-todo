import React from 'react'
import './Todos.css'

export class TodoItem extends React.Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
   
    
    render() {
        const { id, title } = this.props.todo;
        return (
            // <div className="items-container">
            <div style={this.getStyle()} className="items-container"> 
                
                <p>
                    <input type="checkbox" className="checkbox" onChange={this.props.markComplete.bind(this,id)}/>{' '}
                    {title}
                    <button className="del-button" onClick={this.props.delTodo.bind(this,id)}>x</button>
                </p>
            </div>
        )
    }
}

export default TodoItem