import React from 'react';

const SidebarHeader = ({ text }) => (
  <li className="header">{text}</li>
);

SidebarHeader.propTypes = {
  text: React.PropTypes.string.isRequired,
};

export default SidebarHeader;
