import React, { Component } from 'react';

class TodoItem extends Component {
    render(){
        return(
            <div>
                {this.props.text}               
            </div>
        )
    }

}

export default TodoItem;