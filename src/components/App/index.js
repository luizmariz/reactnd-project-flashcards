import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator, } from "react-native";
import { colorPallet } from '../../utils/colors';
import styled, { ThemeProvider } from 'styled-components/native';
import { store, persistor } from './setupStore';
import MainNavigator from './MainNavigator';

const Container = styled.View`
  flex: 1;
  justify-content: center;
`
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