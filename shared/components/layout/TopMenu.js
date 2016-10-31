import React from 'react';
import NavLink from './NavLink';


class TopMenu extends React.Component {

  render() {
    return (
      <header>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/issues">Issues</NavLink></li>
          <li><NavLink to="/todos">Todos</NavLink></li>
        </ul>
      </header>
    );
  }
}

export default TopMenu;
