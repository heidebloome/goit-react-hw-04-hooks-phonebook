import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 35px;

  font-style: inherit;
  font-weight: bold;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme.buttonBackgroundColor};

  border: none;
  border-radius: 4px;

  cursor: pointer;

  transition: border-color 250ms ease-in-out, background-color 250ms ease-in-out,
    transform 250ms ease-in-out;
`;
