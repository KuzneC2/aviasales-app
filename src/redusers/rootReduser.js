import { combineReducers } from "redux";
import reducerTickets from './reducerTickets';

const rootReduser = combineReducers({
    reducerTickets,
})

export default rootReduser