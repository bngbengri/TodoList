import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems : []
    };
    this.addList = this.addList.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addList(newTodo) {
    this.setState({
      listItems :this.state.listItems.concat([newTodo])
    });   
  }

  removeTodo(index) {
    const listItems = this.state.listItems.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    this.setState({ listItems })
  }

  render() {
    return (
      <div>
        <Todo onAddList={this.addList}/>
        <List items={this.state.listItems} removeItem={this.removeTodo}/>
      </div>
    );
  }
}

export default App;
