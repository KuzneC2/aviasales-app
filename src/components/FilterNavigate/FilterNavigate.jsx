import React from 'react';

import styleFilter from './FilterNavigate.module.scss';

const FilterNavigate = () => {
  return (
    <>
      <div className={styleFilter.containerFilter}>
        <h2 className={styleFilter.title}>Количество пересадок</h2>

        <div className={styleFilter.filterBar}>
          <label className={styleFilter.filterItem}>
            <input type="checkbox" />
            <span className={styleFilter.customCheckbox}></span>
            Все
          </label>

          <label className={styleFilter.filterItem}>
            <input className={styleFilter.filterCheck} type="checkbox" />
            <span className={styleFilter.customCheckbox}></span>
            Без пересадок
          </label>

          <label className={styleFilter.filterItem}>
            <input className={styleFilter.filterCheck} type="checkbox" />
            <span className={styleFilter.customCheckbox}></span>
            1 пересадка
          </label>

          <label className={styleFilter.filterItem}>
            <input className={styleFilter.filterCheck} type="checkbox" />
            <span className={styleFilter.customCheckbox}></span>
            2 пересадки
          </label>

          <label className={styleFilter.filterItem}>
            <input className={styleFilter.filterCheck} type="checkbox" />
            <span className={styleFilter.customCheckbox}></span>
            3 пересадки
          </label>
        </div>
      </div>
    </>
  );
};

export default FilterNavigate;
