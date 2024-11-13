export const toggleCheck = (payload) => ({
  type: 'TOGGLE_CHECK',
  payload: payload,
});

export const toggleAll = () => ({ type: 'TOGGLE_ALL' });

export const toggleSort = (payload) => ({
  type: 'TOGGLE_SORT',
  payload: payload,
});

export const getMoreTickets = () => ({
  type: 'GET_MORE_TICKETS'
})

const ticketsApi = 'https://aviasales-test-api.kata.academy/tickets';
const searchIdApi = 'https://aviasales-test-api.kata.academy/search';

// получение search id
export const fetchSearchId = () => {
  return async (dispatch) => {
    try {
      const result = await fetch(searchIdApi);
      const data = await result.json();
      return data;
    } catch (err) {
      dispatch({ type: 'ERROR_FETCH_TICKETS', payload: err.message });
    }
  };
};

// получение всех всех билетов
export const getAllTickets = () => {
  return async (dispatch) => {
    try {
      const search = await dispatch(fetchSearchId());
      let indicate = false;

      while (!indicate) {
        try {
          const res = await fetch(
            `${ticketsApi}?searchId=${search.searchId}`,
          ).then((res) => res.json());
          if (!res.stop) {
            dispatch({ type: 'SUCCESS_FETCH_TICKETS', payload: res });
          } else {
            indicate = true;
            dispatch({ type: 'STOP_SUCCESS_FETCH_TICKETS', payload: res });
          }
        } catch (err) {
          continue;
        }
      }
    } catch (err) {
      dispatch({ type: 'ERROR_FETCH_TICKETS', payload: err.message });
    }
  };
};
