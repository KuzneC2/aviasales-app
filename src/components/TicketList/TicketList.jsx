import React, { useEffect } from 'react';
import Ticket from '../Tiсket/Ticket';
import styleTicketList from './TicketList.module.scss';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const TicketList = ({ data, fetchSearchId, fetchTickets, getAllTickets }) => {
  

  useEffect(() => {
    // if(!data.stop || data.tickets.length == 0){
      getAllTickets()
    // }
  }, []);
  return (
    <div className={styleTicketList.ticketList}>
      {data.tickets.map((ticket, index) => (
        <Ticket
          key={index}
          price={ticket.price}
          carrier={ticket.carrier}
          segments={ticket.segments}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.reducerTickets,
  };
};

export default connect(mapStateToProps, actions)(TicketList);
