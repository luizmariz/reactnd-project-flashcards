import React from 'react';
import { number, any, func } from 'prop-types';
import { View } from 'react-native';
import { Footer } from '../../shared/styled';
import styled from 'styled-components/native';
import Button from '../../shared/Button';

const ResultContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex: 0.8;
  padding-top: 10;
  padding-left: 35;
  padding-right: 35;
`
const ResultText = styled.Text`
  font-size: 80;
  font-style: italic;
`
const Text = styled.Text`
  font-size: 31;
  font-style: italic;
  color: ${props => props.theme.purple};
`
const BackBtn = styled(Button)`
  margin-top: 13;
  margin-bottom: 60;
`

const Result = ({percentage, navigation, onRestart}) => {
  return(
    <View>
      <ResultContainer>
        <ResultText>{percentage}%</ResultText>
        <Text>of hit</Text>
      </ResultContainer>
      <Footer>
        <Button
          text='restart'
          color='#454545'
          onClick={onRestart}
        />

        <BackBtn
          text='back to deck'
          color='#454545'
          onClick={() => navigation.navigate('Cards')}
        />
      </Footer>
    </View>
  );
}

Result.propTypes = {
  percentage: number.isRequired,
  onRestart: func.isRequired,
  navigation: any.isRequired,
}

export default Result;