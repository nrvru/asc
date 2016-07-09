import React from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarMenuItem from './SidebarMenuItem';
import SidebarSubmenuItem from './SidebarSubmenuItem';

const Sidebar = () => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <ul className="sidebar-menu">
        <SidebarHeader text="ГЛАВНОЕ МЕНЮ" />
        <SidebarMenuItem text="Панель управления" />
        <SidebarMenuItem text="Проведение соревнований" />
        <SidebarMenuItem text="Справочники" icon={(<i className="fa fa-archive" />)}>
          <SidebarSubmenuItem text="Соревнования" />
          <SidebarSubmenuItem text="Люди" />
          <SidebarSubmenuItem text="Организации" />
        </SidebarMenuItem>
      </ul>
    </section>
  </aside>
);

export default Sidebar;
