import React, { Component } from 'react';
import { string } from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { purple } from '../../utils/colors';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const StyledButton = styled.View`
  border-width: 3;
  border-color: ${purple};
  width: 60%;
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 4;

  background-color: ${props => props.isSelected ? purple : '#ffffff'};
`
const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ButtonText = styled.Text`
  color: ${props => props.isSelected ? '#ffffff' : purple };
  font-size: 16;
  font-weight: bold;
  padding-left: 20;
`

class Button extends Component {
  state = { isSelected: false }

  handleToggleBtn = () => {
    this.setState(prev => ({
      isSelected: !prev.isSelected
    }));
  }

  render() {
    const { text, iconName } = this.props;
    const { isSelected } = this.state;

    return (
      <StyledButton isSelected={isSelected}>
        <TouchableOpacity onPress={this.handleToggleBtn}>
          <Row>
            <Ionicons
              name={iconName}
              color={isSelected
                ? '#ffffff'
                : purple
              }
              size={30}
            />
            <ButtonText isSelected={isSelected}>{text.toUpperCase()}</ButtonText>
          </Row>
        </TouchableOpacity>
      </StyledButton>
    );
  }
}

Button.propTypes = {
  text: string.isRequired,
  iconName: string
}

export default Button;