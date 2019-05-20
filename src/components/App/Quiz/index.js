import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from '../../shared/styled';
import { getPercentage } from '../../../utils/helpers'
import Questions from './Questions';
import Result from './Result';


class Quiz extends Component {
  state = {
    showResult: false,
    correctPercentage: 0
  }

  handleResult = hits => {
    this.setState(prev => ({
      correctPercentage: getPercentage(hits, this.props.cards.length),
      showResult: true
    }));
  }

  handleRestart = () => {
    this.setState(prev => ({
      showResult: false
    }));
  }

  render() {
    const { cards, navigation } = this.props;
    const { showResult, correctPercentage } = this.state;

    return (
      <Container>
        { showResult
          ? <Result
              percentage={correctPercentage}
              navigation={navigation}
              onRestart={this.handleRestart}
            />
          : <Questions
              cards={cards}
              onFinishQuestions={this.handleResult}
            />
        }
      </Container>
    );
  }
}

function mapStateToProps ({decks}, props) {
  const name = props.navigation.getParam('deck', '');

  return {
    cards: decks[name].cards
  }
}
export default connect(mapStateToProps)(Quiz);

