import React, { Component } from 'react';
import { Footer } from '../../shared/styled';
import { array, func } from 'prop-types';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../shared/Button';

const Text = styled.Text`
  font-size: 31;
  font-style: italic;
`
const TextContainer = styled.View`
  flex: 0.8;
  padding-top: 60;
  padding-left: 35;
  padding-right: 35;
`

const QuestCounter = styled.Text`
  margin-left: 35;
  color: #454545;
  font-size: 20;
  opacity: 0.6;
`
const ButtonWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const IncorrectBtn = styled(Button)`
  margin-top: 13;
  margin-bottom: 60;
`

class Questions extends Component {
  state = {
    showAnswer: false,
    questCounter: 1,
    correct: 0
  };

  showAnswer = () => {
    this.setState(prev => ({showAnswer: true}));
  }

  handleLastQuest = isCorrect => {
    const { questCounter, correct } = this.state;
    const { cards, onFinishQuestions } = this.props;

    // It's important to check if it's the last question before setState
    if (questCounter === cards.length) {
      onFinishQuestions(correct + isCorrect);

      this.setState(prev => ({
        showAnswer: false,
        correct: 0,
        questCounter: 1
      }));

      return true;
    } else
      return false;
  }

  handleCorrect = () => {
    if (!this.handleLastQuest(true)) {
      this.setState(prev => ({
        correct: prev.correct+1,
        questCounter: prev.questCounter+1,
        showAnswer: false
      }));
    }
  }

  handleIncorrect = () => {
    if (!this.handleLastQuest(false)) {
      this.setState(prev => ({
        questCounter: prev.questCounter+1,
        showAnswer: false
      }));
    }
  }

  render(){
    const { showAnswer, questCounter } = this.state;
    const { cards } = this.props;

    return(
      <View>
        <QuestCounter>{questCounter}/{cards.length}</QuestCounter>
        <TextContainer>
          <Text>
            { showAnswer
              ? cards[questCounter-1].answer
              : cards[questCounter-1].question
            }
          </Text>
        </TextContainer>
        <Footer>

          { !showAnswer
            ? <Button
                text='show answer'
                onClick={this.showAnswer}
              />
            : <ButtonWrapper>
                <Button
                  text='correct'
                  color='green'
                  onClick={this.handleCorrect}
                />

                <IncorrectBtn
                  text='incorrect'
                  color='red'
                  onClick={this.handleIncorrect}
                />
              </ButtonWrapper>
          }

        </Footer>
      </View>
    );
  }
}

Questions.propType = {
  cards: array.isRequired,
  onFinishQuestions: func.isRequired
}

export default Questions;