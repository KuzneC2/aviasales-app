import React from 'react';
import styleFilter from './FilterNavigate.module.scss';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const FilterNavigate = ({ stateData, toggleAll, toggleCheck }) => {
  return (
    <>
      <div className={styleFilter.containerFilter}>
        <h2 className={styleFilter.title}>Количество пересадок</h2>

        <div className={styleFilter.filterBar}>
          <label className={styleFilter.filterItem}>
            <input
              type="checkbox"
              checked={stateData.checkAll}
              onChange={() => toggleAll()}
            />
            <span className={styleFilter.customCheckbox}></span>
            Все
          </label>

          <label className={styleFilter.filterItem}>
            <input
              className={styleFilter.filterCheck}
              type="checkbox"
              checked={stateData.checkWithout}
              onChange={() => toggleCheck('checkWithout')}
            />
            <span className={styleFilter.customCheckbox}></span>
            Без пересадок
          </label>

          <label className={styleFilter.filterItem}>
            <input
              className={styleFilter.filterCheck}
              type="checkbox"
              checked={stateData.checkOne}
              onChange={() => toggleCheck('checkOne')}
            />
            <span className={styleFilter.customCheckbox}></span>1 пересадка
          </label>

          <label className={styleFilter.filterItem}>
            <input
              className={styleFilter.filterCheck}
              type="checkbox"
              checked={stateData.checkTwo}
              onChange={() => toggleCheck('checkTwo')}
            />
            <span className={styleFilter.customCheckbox}></span>2 пересадки
          </label>

          <label className={styleFilter.filterItem}>
            <input
              className={styleFilter.filterCheck}
              type="checkbox"
              checked={stateData.checkThree}
              onChange={() => toggleCheck('checkThree')}
            />
            <span className={styleFilter.customCheckbox}></span>3 пересадки
          </label>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    stateData: state.reducerTickets,
  };
}; 

export default connect(mapStateToProps, actions)(FilterNavigate);
