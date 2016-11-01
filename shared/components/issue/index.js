import React, { Component }   from 'react';
import { connect } from 'react-redux';
import { getIssue } from '../../actions/issueActions';

const mapStateToNewsProps = (state) => {
  return {
    issue: state.issue
  };
};
const mapDispatchToNewsProps = (dispatch) => {
  return {
    getIssue: (id) => {
      dispatch(getIssue(id))
    }
  };
};

@connect(mapStateToNewsProps, mapDispatchToNewsProps)

class Issue extends Component {
  constructor(props) {
    super(props);
    this.displayName = 'Issue';
  }

  componentWillMount(){
    // if(this.props.issues.length === 0){
      this.props.getIssue(this.props.routeParams.id);
    // }
    // console.log('componentWillMount: компонент будет примонтирован. В данный момент у нас нет возможности посмотреть DOM элементы. на клиенте и сервере');
  }

  componentDidMount() {
    document.title = "Issue";
    pageTitle.innerHTML = "Issue";
  }
  render() {
    const {issue} = this.props;
    console.log(this.props.issue);
    console.log('render');
    return (
      <div>
        <div className="issue__machine">{issue.machine_name}</div>
        <div className="issue__name">{issue.name}</div>
        <div className="issue__inset">
          <div className="issue__inset__name">
            <div>Details</div>
          </div>
          <div className="issue__inset__body">
            <div>
              <div className="issue__inset__iName">Type</div>
              <div className="issue__inset__iValue">{issue.type}</div>
            </div>
          </div>
        </div>
        <div className="issue__inset">
          <div className="issue__inset__name">
            <div>Description</div>
          </div>
          <div className="issue__inset__body">
            <div>
              <div className="issue__inset__iName">Type</div>
              <div className="issue__inset__iValue">{issue.type}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Issue;
