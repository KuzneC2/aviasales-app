const initialState = {
  checkAll: true,
  checkWithout: true,
  checkOne: true,
  checkTwo: true,
  checkThree: true,
  sortTicket: ['price'],
  tickets: [],
  error: false,
  stop: false,
  ticketsLength: 5,
};

const reducerTickets = (state = initialState, action) => {
  const allFalse = {
    ...state,
    checkAll: false,
    checkWithout: false,
    checkOne: false,
    checkTwo: false,
    checkThree: false,
  };
  const allTrue = {
    ...state,
    checkAll: true,
    checkWithout: true,
    checkOne: true,
    checkTwo: true,
    checkThree: true,
  };
  switch (action.type) {
    case 'TOGGLE_CHECK':
      if (!state.checkAll && !state[action.payload]) {
        let res = 0;
        if (state.checkOne) {
          res++;
        }
        if (state.checkTwo) {
          res++;
        }
        if (state.checkThree) {
          res++;
        }
        if (state.checkWithout) {
          res++;
        }
        if (res >= 3) {
          return {
            ...state,
            [action.payload]: !state[action.payload],
            checkAll: true,
          };
        }
      }
      if (state.checkAll && state[action.payload]) {
        return {
          ...state,
          [action.payload]: !state[action.payload],
          checkAll: false,
        };
      } else {
        return { ...state, [action.payload]: !state[action.payload] };
      }

    case 'TOGGLE_ALL':
      return state.checkAll ? allFalse : allTrue;

    case 'TOGGLE_SORT':
      if ([action.payload] == 'price') {
        return { ...state, sortTicket: [action.payload], ticketsLength: 5 };
      }
      if ([action.payload] == 'fast') {
        return { ...state, sortTicket: [action.payload], ticketsLength: 5 };
      }
      if ([action.payload] == 'option') {
        return { ...state, sortTicket: [action.payload], ticketsLength: 5 };
      }

    case 'SUCCESS_FETCH_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        error: false,
      };

    case 'STOP_SUCCESS_FETCH_TICKETS':
      return {
        ...state,
        stop: action.payload.stop,
        tickets: [...state.tickets, ...action.payload.tickets],
      };

    case 'ERROR_FETCH_TICKETS':
      return { ...state, error: true };

    case 'GET_MORE_TICKETS':
      return { ...state, ticketsLength: state.ticketsLength + 5 };
    default:
      return state;
  }
};

export default reducerTickets;
