import React from 'react';
import styleBtnMore from './ButtonMore.module.scss';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const ButtonMore  = ({getMoreTickets}) => {
  return (
    <>
     <button className={styleBtnMore.btnMore} onClick={getMoreTickets}>Показать еще 5 билетов!</button>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    data: state.reducerTickets,
  };
};

export default connect(mapStateToProps, actions)(ButtonMore);