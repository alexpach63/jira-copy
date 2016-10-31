import React from 'react';
import TopMenu from './topmenu';
import Sidebar from './sidebar';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <TopMenu /> 
        <Sidebar />
        <div className="cWrap">
          <div className="cHeader">
            <h1 id="pageTitle">Kanban board</h1>
          </div>
          <div className="cContent">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
