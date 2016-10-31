import React, { Component , PropTypes }   from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';
import { getIssues } from '../../actions/issuesActions';
import { connect } from 'react-redux';
import flow from 'lodash/flow';

const mapStateToNewsProps = (state) => {
  return {
    issues: state.issues
  };
};
const mapDispatchToNewsProps = (dispatch) => {
  return {
    onNewsClick: () => {
      dispatch(getIssues())
    }
  };
};

@connect(mapStateToNewsProps, mapDispatchToNewsProps)
// @DragDropContext(HTML5Backend)(App)
// @connect(state => ({ issues: state.issues }))(App)

class App extends Component {

  // static propTypes = {
  //   issues:  PropTypes.any.isRequired,
  // }

  // static needs = [
  //   getIssues
  // ]

  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps: компонент получает новые props. Этод метод не вызывается в момент первого rendera.');
  }

  componentWillMount(){
    this.props.onNewsClick();
    // console.log('componentWillMount: компонент будет примонтирован. В данный момент у нас нет возможности посмотреть DOM элементы. на клиенте и сервере');
  }

  shouldComponentUpdate() {
    // console.log('shouldComponentUpdate: должен ли компонент обновиться?');
    return true;
  }

  componentWillUpdate() {
    // console.log('componentWillUpdate: вызывается прямо перед render, когда новые props и state получены');
    // В этом методе нельзя вызывать setState.
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate: вызывается сразу после render. Не вызывается в момент первого renderа компонента');
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount: вызывается сразу перед тем, как компонент будет удален из DOM.');
  }

  componentDidMount() {
    // console.log('componentDidMount: компонент примонтировался. только на клиенте');
    
    console.log(this.props);
    document.title = "Issues";
    pageTitle.innerHTML = "Issues";
  }

  render() {
    // console.log('render');
    const cats = ['To Do','Estimated','In Progress','In Review','Done'];
    const { issues } = this.props;

    if(issues.length > 0){
      return (
        <div>
          <div className="issueses">
            <div className="issueses__zag">
              {cats.map((cat, i) => {
                return <div className="issueses__zag__i" key={i}>{cat}</div>
              })}
            </div>

            <div className="issueses__list">
              <Container id={1} list={issues.filter((i)=>{return i.type==1})} />
              <Container id={2} list={issues.filter((i)=>{return i.type==2})} />
              <Container id={3} list={issues.filter((i)=>{return i.type==3})} />
              <Container id={4} list={issues.filter((i)=>{return i.type==4})} />
              <Container id={5} list={issues.filter((i)=>{return i.type==5})} />
            </div>
          </div>
          
          <button
            onClick={() => {
              onNewsClick();
            }}>
            Загрузи брат
          </button>
        </div>
      );
    }
    else{
      return (
        <div>issues empty</div>
      )
    }
  }
}


export default DragDropContext(HTML5Backend)(App);
// export default connect(state => ({ issues: state.issues }))(App)

// export default flow(
//   connect(state => ({ issues: state.issues })),
//   DragDropContext(HTML5Backend)
// )(App);