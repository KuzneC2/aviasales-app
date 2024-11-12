import React from 'react';

import styleTabs from './Tabs.module.scss';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const Tabs = ({ stateData, toggleSort }) => {
  const lowPriceTicket =
    stateData.sortTicket == 'price'
      ? `${styleTabs.tabButton} ${styleTabs.active}`
      : styleTabs.tabButton;

  const fastTicket =
    stateData.sortTicket == 'fast'
      ? `${styleTabs.tabButton} ${styleTabs.active}`
      : styleTabs.tabButton;

  const optionalTicket =
    stateData.sortTicket == 'option'
      ? `${styleTabs.tabButton} ${styleTabs.active}`
      : styleTabs.tabButton;

  const handleTab = (payload) => {
    toggleSort(payload);
    console.log(stateData.sortTicket)
  };
  return (
    <>
      <nav className={styleTabs.tabBar}>
        <button className={lowPriceTicket} onClick={() => handleTab('price')}>
          Самый дешевый
        </button>
        <button className={fastTicket} onClick={() => handleTab('fast')}>
          Самый быстрый
        </button>
        <button className={optionalTicket} onClick={() => handleTab('option')}>
          Оптимальный
        </button>
      </nav>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    stateData: state.reducerTickets,
  };
};

export default connect(mapStateToProps, actions)(Tabs);
