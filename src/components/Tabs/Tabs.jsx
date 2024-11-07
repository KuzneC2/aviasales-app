import React from 'react';

import styleTabs from './Tabs.module.scss';

const Tabs = () => {
  return (
    <>
      <nav className={styleTabs.tabBar}>
        <button className={`${styleTabs.tabButton} ${styleTabs.active}`}>Самый дешевый</button>
        <button className={styleTabs.tabButton}>Самый быстрый</button>
        <button className={styleTabs.tabButton}>Оптимальный</button>
      </nav>
    </>
  );
};

export default Tabs;
