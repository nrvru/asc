import React from 'react';

const Sidebar = () => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu">
        <li className="header">Меню</li>
        <li>
          <a href="">
            Проведение соревнований
          </a>
        </li>
        <li className="treeview">
          <a href="#">
            <i className="fa fa-archive" />
            <span>Справочники</span>
            <i className="fa fa-angle-left pull-right" />
          </a>
          <ul className="treeview-menu">
            <li>Соревнования</li>
            <li>Люди</li>
            <li>Организации</li>
          </ul>
        </li>
      </ul>
    </section>
  </aside>
);

export default Sidebar;
