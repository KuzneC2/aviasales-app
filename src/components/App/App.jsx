import React from 'react';
import logo from '../../assets/logo.svg';
import FilterNavigate from '../FilterNavigate/FilterNavigate';
import AviasalesTickets from '../AviasalesTickets/AviasalesTickets';

import styleApp from './App.module.scss';


function App() {
  return (
    <>
      <section className={styleApp.main}>
        <img className={styleApp.logo} src={logo} alt="Логотип Aviasales" />

        <div className={styleApp.containerContetn}>
          <FilterNavigate />
          <AviasalesTickets />
        </div>
      </section>
    </>
  );
}

export default App;
