import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;

export const Title = styled.Text`
  font-size: 45;
  font-weight: 300;
  margin-bottom: 30;
  color: #454545;
`
export const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`
export const FlatListContainer = styled.View`
  flex: 0.7;
`
export const NoContent = styled.Text`
  color: #454545;
  font-size: 20;
  width: 200;
  text-align: center;
  opacity: 0.2;
  margin-top: 100;
`

export const Footer = styled.View`
  width: ${width};
  flex: 0.3;
  justify-content: center;
  align-items: center;
`