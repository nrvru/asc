import React, { Component } from 'react';

class SidebarMenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpened: false };
  }

  handleClick() {
    if (this.props.children) {
      this.setState({ isOpened: !this.state.isOpened });
    }
  }

  render() {
    const { link, text, icon, children } = this.props;
    const { isOpened } = this.state;
    return (
      <li className={isOpened ? 'treeview active' : 'treeview'}>
        <a href={link || '#'} onClick={() => this.handleClick()}>
          {icon}
          {text}
          {children &&
            <i className="fa fa-angle-left pull-right" />
          }
        </a>

        <ul className="treeview-menu">
          {children}
        </ul>
      </li>
    );
  }
}

SidebarMenuItem.propTypes = {
  link: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  icon: React.PropTypes.node,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default SidebarMenuItem;
