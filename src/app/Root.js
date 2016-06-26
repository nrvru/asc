import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'admin-lte/dist/css/AdminLTE.min.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';
import '../styles.css';

const Root = () => (
  <div className="wrapper">
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  </div>
);

export default Root;
