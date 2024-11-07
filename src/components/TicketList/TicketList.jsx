import React from 'react';
import Ticket from '../Tiсket/Ticket';
import styleTicketList from './TicketList.module.scss'

const TicketList = () => {
  return (
    <div className={styleTicketList.ticketList}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </div>
  );
};

export default TicketList;
