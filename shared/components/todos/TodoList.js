import React, { PropTypes } from 'react';
import Todo from './Todo';
import { bindActionCreators } from 'redux';

import * as TodoActions       from '../../actions/todoActions';
// import getVisibleTodos from '../containers/VisibleTodoList';
import { connect }            from 'react-redux';
@connect((state) => {
	console.log(state);
  return {
		todos: state.todos
	};
})

class TodoList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  static propTypes = {
    todos:    PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    TodoActions.getTodos
  ]

  render() {
  	const { todos, dispatch } = this.props;
    return (
    	<ul>
				{todos.map(todo => 
					<Todo
						key={todo.id}
						{...todo}
						{...bindActionCreators(TodoActions, dispatch)}
						onClick={() => onTodoClick(todo.id)}
					/>
				)}
			</ul>
    )
  }
}

export default TodoList;