import styled, { css } from 'styled-components';

export const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  margin-bottom: 20px;
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.theme.spacing(props.mt)};
    `};
`;
