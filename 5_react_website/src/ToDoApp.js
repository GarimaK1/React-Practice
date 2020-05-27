import React, { Component } from 'react';

export default class ToDoApp extends Component {
    state = {
        item: '',
        todoArray: []
    };

    handleChange = (e) => {
        // Refer: https://stackoverflow.com/questions/49500255/warning-this-synthetic-event-is-reused-for-performance-reasons-happening-with/52223990
        // e.persist();
        // OR
        // const { name, value } = e.target;
        // this.setState(state => ({
        //     [name]: value
        // }), () => console.log(this.state));
        // OR
        this.setState({
            [e.target.name]: e.target.value
        });;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('here', this.state);
        this.setState(state => ({
            item: "",
            todoArray: [...state.todoArray, { id: Date.now(), item: state.item }]
        }),
            // Adding callback function to view state immediately after state change
            () => console.log(this.state));
    }

    render() {
        return (
            <div style={{ margin: '2rem' }}>
                <h4>ToDo Application</h4>
                <p>What do you want to do?</p>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="item" placeholder="Todo Item" value={this.state.item} onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
                <h6>Display List</h6>
                <ToDoList todos={this.state.todoArray} />
            </div>
        );
    }
}

class ToDoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(element => (
                    <li key={element.id}>
                        {element.item}
                    </li>))}
            </ul>
        )
    }
}


