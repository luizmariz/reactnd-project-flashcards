import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist'; // It's a nice lib that persist Redux state with AsynStorage
import { PersistGate } from 'redux-persist/integration/react'
import { AsyncStorage, ActivityIndicator, } from "react-native";
import { colorPallet } from '../../utils/colors';
import styled, { ThemeProvider } from 'styled-components/native';
import reducer from '../../reducers';
import middleware from '../../middlewares';
import MainNavigator from './MainNavigator';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

const Container = styled.View`
  flex: 1;
  justify-content: center;
`
const LoadingContainer = styled.View``

const renderLoading = () => (
  <Container>
    <ActivityIndicator size={80} color={colorPallet.purple} />
  </Container>
);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={renderLoading()}
          persistor={persistor}
        >
          <ThemeProvider theme={colorPallet}>
            <Container >
              <MainNavigator />
            </Container>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
