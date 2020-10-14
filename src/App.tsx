import * as React from 'react'
import { Provider } from 'react-redux';
import Weather from './components/Weather/Weather';
import { store } from './redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
  );
}

export default App;
