import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import UserDisplay from './components/UserDisplay';

function App() {
  return (
    <div className="App">
      <h1>Redux Toolkit Example</h1>
      <UserDisplay />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);