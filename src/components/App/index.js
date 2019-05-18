import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styled from 'styled-components/native';
import reducer from '../../reducers';
import middleware from '../../middlewares';
import MainNavigator from './MainNavigator';

const store = createStore(reducer, middleware);

const Container = styled.View`
  flex: 1;
`
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container >
          <MainNavigator />
        </Container>
      </Provider>
    );
  }
}

export default App;
