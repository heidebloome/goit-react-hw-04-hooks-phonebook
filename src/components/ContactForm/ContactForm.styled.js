import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 190px;
  height: 25px;
  margin-top: 5px;
  padding-left: 10px;

  border: 1px solid black;
  border-radius: 4px;

  transition: border-color 250ms ease-in-out;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: ${props => props.theme.colors.buttonBackgroundColor};
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 35px;
  margin-top: 5px;

  font-size: 15px;
  font-weight: bold;

  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.buttonBackgroundColor};

  border: 1px solid ${props => props.theme.colors.buttonBackgroundColor};
  border-radius: 4px;

  cursor: pointer;

  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out,
    transform 250ms ease-in-out;

  &:hover,
  &:focus-visible {
    border-color: ${props => props.theme.colors.buttonHoverBackgroundColor};
    background-color: ${props => props.theme.colors.buttonHoverBackgroundColor};
  }

  &:active {
    transform: scale(0.9);
  }
`;
