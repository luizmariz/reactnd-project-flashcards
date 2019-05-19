import React from 'react';
import { string, func } from 'prop-types';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: column;
  width: 70%;
`

const InputLabel = styled.Text`
  color: #454545;
  font-size: 16;
  font-weight: bold;
  margin-bottom: 4;
`

const StyledInput = styled.TextInput`
  border-width: 3;
  border-color:  #454545;
  font-size: 19;
  font-weight: normal;
  padding-top: 8;
  padding-bottom: 8;
  padding-left: 10;
  padding-right: 10;
  height: 50;
`

const Input = ({label, value, onChange, style}) => {
  return(
    <Container style={style}>
      <InputLabel>{label.toLowerCase()}</InputLabel>
      <StyledInput
        value={value}
        onChangeText={onChange}
      />
    </Container>
  );
};

Input.propTypes = {
  label: string.isRequired,
  value: string.isRequired,
  onChange: func.isRequired
};

export default Input;