import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';

const Root = () => (
  <div className="wrapper">
    <Header />
    <Sidebar />
  </div>
);

export default Root;