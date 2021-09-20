import React from 'react'

export default class AddTodo extends React.Component {
 state = {
     title: ''
 }

addTask = (e) => {
    this.setState({ title: e.target.value });
  
}  
onSubmit = (e) => {
  e.preventdefault();
  this.props.addTodo(this.state.title);
  this.setState({ title: ''});
}

render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    className="text-input" 
                    placeholder="Add a task.."
                    value={this.state.title}
                    onChange={this.addTask}
                    />
                <input type="submit" value="Submit" className="btn"/>
            </form>
        )
    }
}