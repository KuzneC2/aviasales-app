import React from 'react';
import styleAvia from './AviasalesTickets.module.scss'

import Tabs from '../Tabs/Tabs';
import TicketList from '../TicketList/TicketList';
import ButtonMore from '../ButtonMore/ButtonMore';

const AviasalesTickets = () => {
  return (
    <>
      <div className={styleAvia.ticketList}>
        <Tabs />
        <TicketList />
        <ButtonMore />
      </div>
    </>
  );
};

export default AviasalesTickets;
