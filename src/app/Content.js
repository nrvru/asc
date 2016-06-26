import React from 'react';

const Content = () => (
  <div className="content-wrapper">
    <section className="content-header">
      <h1>
        Заголовок
        <small>Описание</small>
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" />
            Главная страница
          </a>
        </li>
        <li className="active">Активная страница</li>
      </ol>
    </section>


    <section className="content">
      <p>Контент</p>
    </section>
  </div>
);

export default Content;
