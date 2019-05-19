import React, { Component } from 'react';
import { string, func, bool } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { colorPallet } from '../../utils/colors';
import { MaterialIcons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const StyledButton = styled.View`
  border-width: 3;
  border-color: ${props => props.theme.purple};
  width: 70%;
  opacity: ${props => props.isDisabled
    ? 0.4
    : 1
  };
  padding-right: 10%;
  padding-left: 10%;
  background-color: ${props => props.isSelected ? props.theme.purple : '#ffffff'};
`
const Row = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 50;
`
const ButtonText = styled.Text`
  color: ${props => props.isSelected ? '#ffffff' : props.theme.purple };
  font-size: 16;
  font-weight: bold;
`

class Button extends Component {
  state = { isSelected: false }

  handleToggleBtn = () => {
    this.setState(prev => ({
      isSelected: !prev.isSelected
    }));
  }

  render() {
    const { text, iconName, onClick, disabled } = this.props;
    const { isSelected } = this.state;

    return (
      <StyledButton
        isSelected={isSelected}
        isDisabled={disabled}
      >
        <TouchableWithoutFeedback
          onPressIn={this.handleToggleBtn}
          onPressOut={this.handleToggleBtn}
          onPress={onClick}
          delayPressOut={80}
          disabled={disabled}
        >
          <Row>
            { iconName &&
              <MaterialIcons
                name={iconName}
                color={isSelected
                  ? '#ffffff'
                  : colorPallet.purple
                }
                size={30}
              />
            }
            <ButtonText isSelected={isSelected}>{text.toUpperCase()}</ButtonText>
          </Row>
        </TouchableWithoutFeedback>
      </StyledButton>
    );
  }
}

Button.propTypes = {
  text: string.isRequired,
  onClick: func.isRequired,
  iconName: string,
  disabled: bool
};

export default Button;