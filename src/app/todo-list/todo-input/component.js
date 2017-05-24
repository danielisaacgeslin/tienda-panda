import React from 'react';

require("./style.scss");

export default class TodoInput extends React.Component {
    constructor(props) {
        super(props);
    }

    onAddTodo() {
        this.props.addTodo(this.refs.input.value);
    }

    updateNewTodo(event) {
        this.props.updateNewTodo(event.target.value);
    }

    render() {
        return (
            <div className="todo-input">
                <input
                    className="todo-input__input"
                    type="text"
                    ref="input"
                    value={this.props.newTodo}
                    onChange={this.updateNewTodo.bind(this)} />
                <button
                    onClick={this.onAddTodo.bind(this)}
                    className="todo-input__button btn btn-success">
                    ADD
                </button>
            </div>
        );
    }
}
