import React from 'react';
import styleAvia from './AviasalesTickets.module.scss';

import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketList/TicketList';
import ButtonMore from '../ButtonMore/ButtonMore';

const AviasalesTickets = ({ stateData, toggleSort }) => {
  return (
    <>
      <div className={styleAvia.ticketList}>
        <Tabs toggleSort={toggleSort} stateData={stateData}/>
        <TicketList />
        <ButtonMore />
      </div>
    </>
  );
};

export default AviasalesTickets;
