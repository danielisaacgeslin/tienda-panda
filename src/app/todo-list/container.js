import React from 'react';
import { connect } from 'react-redux';

import { default as todoListActions } from './actions';
import { TodoInput } from './todo-input';

require("./style.scss");

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.props.fetchTodos();
    }

    render() {
        return (
            <div className="todo-list container">
                <div className="row">
                    <div class="col-xs-12">
                        <TodoInput
                            newTodo={this.props.newTodo}
                            updateNewTodo={this.props.updateNewTodo.bind(this)}
                            addTodo={this.props.addTodo.bind(this)}>
                        </TodoInput>
                        <ol className="todo-list__list">
                            {this.props.todos.map((todo, i) => (<li key={i}>{todo.text}</li>))}
                        </ol>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { todos: state.todos, newTodo: state.newTodo };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: () => dispatch(todoListActions.fetchTodos()),
        addTodo: text => dispatch(todoListActions.addTodo(text)),
        updateNewTodo: text => dispatch(todoListActions.updateNewTodo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);