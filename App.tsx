import React from 'react';
import RootApp from './src/rootApp';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

export default App;
