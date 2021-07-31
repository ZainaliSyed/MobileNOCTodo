import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import RootApp from './src';
import store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" hidden />
      <RootApp />
    </Provider>
  );
};

export default App;
