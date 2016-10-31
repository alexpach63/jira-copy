import React from 'react';
import Footer from './Footer';
import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';


class Todos extends React.Component {
	componentDidMount() {
    document.title = "Todos";
    pageTitle.innerHTML = "Todos";
  }
	render() {
		return(
		  <div>
		    <AddTodo />
		    <hr />
		    <VisibleTodoList />
		    <hr />
		    <Footer />
		  </div>
	  );
	}
}

export default Todos;