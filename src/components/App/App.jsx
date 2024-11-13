import React from 'react';
import logo from '../../assets/logo.svg';
import plane from '../../assets/plane.gif';
import FilterNavigate from '../FilterNavigate/FilterNavigate';
import AviasalesTickets from '../AviasalesTickets/AviasalesTickets';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import styleApp from './App.module.scss';

function App({ data }) {
  const loader = !data.stop ? <img className={styleApp.loader} src={plane} alt="загрузка" /> : null;
  return (
    <>
      <section className={styleApp.main}>
        <img className={styleApp.logo} src={logo} alt="Логотип Aviasales" />
        {loader}
        <div className={styleApp.containerContetn}>
          <FilterNavigate />
          <AviasalesTickets />
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.reducerTickets,
  };
};

export default connect(mapStateToProps, actions)(App);
