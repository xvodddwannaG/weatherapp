import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Weather from './components/Weather/Weather';
import { store } from './redux/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
