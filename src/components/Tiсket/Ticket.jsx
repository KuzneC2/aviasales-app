import React from 'react';
import companyLogo from '../../assets/S7 Logo.svg';

import styleTicket from './Ticket.module.scss';

const Ticket = () => {
  return (
    <>
      <div className={styleTicket.container}>
        <div className={styleTicket.titleInfo}>
          <h3 className={styleTicket.price}>13400</h3>
          <img className={styleTicket.logo} src={companyLogo} alt="Логотип авиакомпании" />
        </div>

        <div className={styleTicket.airInfo}>
          
          <div className={styleTicket.infoBox}>
          
            <h4 className={styleTicket.title}>MOW – HKT</h4>
            <p className={styleTicket.description}>10:45 – 08:00</p>
            <h4 className={styleTicket.title}>MOW – HKT</h4>
            <p className={styleTicket.description}>11:20 – 00:50</p>
          
          </div>
          
          <div className={styleTicket.infoBox}>
          
            <h4 className={styleTicket.title}>В пути</h4>
            <p className={styleTicket.description}>21ч 15м</p>
            <h4 className={styleTicket.title}>В пути</h4>
            <p className={styleTicket.description}>13ч 30м</p>
          
          </div>
          
          <div className={styleTicket.infoBox}>
          
            <h4 className={styleTicket.title}>2 пересадки</h4>
            <p className={styleTicket.description}>HKG, JNB</p>
            <h4 className={styleTicket.title}>1 пересадка</h4>
            <p className={styleTicket.description}>HKG</p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
