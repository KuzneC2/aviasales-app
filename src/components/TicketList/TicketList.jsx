import React, { useEffect } from 'react';
import Ticket from '../Tiсket/Ticket';
import styleTicketList from './TicketList.module.scss';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const TicketList = ({ data, getAllTickets }) => {
  useEffect(() => {
    getAllTickets();
  }, []);

  const filterTicketsArr = (array) => {
    const filteredArray = array.filter((ticket) => {
      if (data.checkAll) {
        return true;
      }
      if (data.checkWithout) {
        return (
          ticket.segments[0].stops.length === 0 ||
          ticket.segments[1].stops.length === 0
        );
      }
      if (data.checkOne) {
        return (
          ticket.segments[0].stops.length === 1 ||
          ticket.segments[1].stops.length === 1
        );
      }
      if (data.checkTwo) {
        return (
          ticket.segments[0].stops.length === 2 ||
          ticket.segments[1].stops.length === 2
        );
      }
      if (data.checkThree) {
        return (
          ticket.segments[0].stops.length === 3 ||
          ticket.segments[1].stops.length === 3
        );
      }
    });

    filteredArray.sort((a, b) => {
      if (data.sortTicket[0] === 'price') {
        return a.price - b.price;
      } else if (data.sortTicket[0] === 'fast') {
        return (
          a.segments[0].duration +
          a.segments[1].duration -
          (b.segments[0].duration + b.segments[1].duration)
        );
      } else if (data.sortTicket[0] === 'option') {
        return b.price - a.price;
      }
    });

    return filteredArray;
  };

  const nullSearch = <p className={styleTicketList.nullSearch}>Рейсов, подходящих под заданные фильтры, не найдено</p>;

  const resultSearch =
    filterTicketsArr(data.tickets).length === 0
      ? nullSearch
      : filterTicketsArr(data.tickets)
          .slice(0, data.ticketsLength)
          .map((ticket, index) => (
            <Ticket
              key={index}
              price={ticket.price}
              carrier={ticket.carrier}
              segments={ticket.segments}
            />
          ));

  return (
    <div className={styleTicketList.ticketList}>
      {resultSearch}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.reducerTickets,
  };
};

export default connect(mapStateToProps, actions)(TicketList);
