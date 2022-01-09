import styled from 'styled-components';

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
