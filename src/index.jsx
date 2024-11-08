import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App/App';

import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

const store = createStore(reducer);
const { dispatch } = store;

store.subscribe(() => {
  console.log(store.getState());
});


const { toggleAll, toggleCheck, toggleSort } = bindActionCreators(actions, dispatch);


const root = ReactDOM.createRoot(document.getElementById('root'));
const update = () => {

  root.render(
    <React.StrictMode>
      <App
        stateData={store.getState()}
        toggleAll={toggleAll}
        toggleCheck={toggleCheck}
        toggleSort={toggleSort}
      />
    </React.StrictMode>,
  );
};
update()

store.subscribe(update)