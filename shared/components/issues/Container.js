import React, { Component } from 'react';
import update from 'react/lib/update';
import Issue from './Issue';
import { DropTarget } from 'react-dnd';

import { connect } from 'react-redux';

// const mapStateToNewsProps = (state) => {
//   return {
//     issues: state.issues
//   };
// };
// const mapDispatchToNewsProps = (dispatch) => {
//   return {
//     changeType: () => {
//       dispatch(changeType())
//     }
//   };
// };
// @connect(mapStateToNewsProps, mapDispatchToNewsProps)

class Container extends Component {

	constructor(props) {
		super(props);		
		this.state = { issueses: props.list };
	}

	pushIssue(issue) {
		this.props.changeType(issue);
		// console.log(this.props);
		console.log('push');
		// console.log(issue);
		this.setState(update(this.state, {
			issueses: {
				$push: [ {...issue, type: this.props.id}]
			}
		}));
	}

	removeIssue(index) {	
		// console.log('remove');	
		// console.log(index);	
		this.setState(update(this.state, {
			issueses: {
				$splice: [
					[index, 1]
				]
			}
		}));
	}

	moveIssue(dragIndex, hoverIndex) {
		console.log('move');
		const { issueses } = this.state;		
		const dragIssue = issueses[dragIndex];

		this.setState(update(this.state, {
			issueses: {
				$splice: [
					[dragIndex, 1],
					[hoverIndex, 0, dragIssue]
				]
			}
		}));
	}

	render() {
		// console.log('render container');
		const { issueses } = this.state;
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const style = {};

		const backgroundColor = isActive ? '#e6e6e6' : '#f5f5f5';

		return connectDropTarget(
			<div style={{...style, backgroundColor}} className="issueses__col">
				{issueses.map((issue, i) => {
					return (
						<Issue 
							key={issue.id}
							index={i}
							listId={this.props.id}
							issue={issue}														
							removeIssue={this.removeIssue.bind(this)}
							moveIssue={this.moveIssue.bind(this)} />
					);
				})}
			</div>
		);
  }
}

const issueTarget = {
	drop(props, monitor, component ) {
		console.log(props);
		const { id } = props;
		const sourceObj = monitor.getItem();		
		if ( id !== sourceObj.listId ) component.pushIssue(sourceObj.issue);
		return {
			listId: id
		};
	}
}

export default DropTarget("ISSUE", issueTarget, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver(),
	canDrop: monitor.canDrop()
}))(Container);