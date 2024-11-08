import React from 'react';
import logo from '../../assets/logo.svg';
import FilterNavigate from '../FilterNavigate/FilterNavigate';
import AviasalesTickets from '../AviasalesTickets/AviasalesTickets';

import styleApp from './App.module.scss';

function App({stateData, toggleAll, toggleCheck, toggleSort}) {
  return (
    <>
      <section className={styleApp.main}>
        <img className={styleApp.logo} src={logo} alt="Логотип Aviasales" />

        <div className={styleApp.containerContetn}>
          <FilterNavigate
            stateData={stateData}
            toggleAll={toggleAll}
            toggleCheck={toggleCheck}
          />
          <AviasalesTickets
          stateData={stateData}
          toggleSort={toggleSort}
          />
        </div>
      </section>
    </>
  );
}

export default App;
