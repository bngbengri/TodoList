import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './list.css';

class List extends Component {
    render(){
        return(
            <div className="">
                <ul className="list">
                    {this.props.items.map((todo,i) => <li className="subList" onClick={() => { this.props.removeItem(i)}} key={i}><TodoItem text={todo}/></li>)}
                </ul>
            </div>
        )
    }

}

export default List;