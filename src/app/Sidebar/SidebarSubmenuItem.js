import React from 'react';

const SidebarSubmenuItem = ({ link, text }) => (
  <li>
    <a href={link || '#'}>{text}</a>
  </li>
);

SidebarSubmenuItem.propTypes = {
  link: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
};

export default SidebarSubmenuItem;
