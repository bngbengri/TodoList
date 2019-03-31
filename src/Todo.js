
import React, { Component } from 'react';
import './list.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTodo:''
        }
        this.addClicked = this.addClicked.bind(this);
    }
    addClicked() {
        this.props.onAddList(this.state.newTodo);
        // event.preventDefault();
        this.setState({
            newTodo:''
        })
    }

    render(){
        return(
            <div className="main">
                <input className="child" type="text" placeholder="Task" value={this.state.newTodo} onChange={(e) => this.setState({newTodo: e.target.value})}/>
                <button className="child" type="submit"onClick={this.addClicked}>Enter</button>
            </div>
        )
    }

}

export default Todo;
