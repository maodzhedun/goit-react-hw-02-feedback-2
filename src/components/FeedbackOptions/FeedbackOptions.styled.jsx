import styled from '@emotion/styled';

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 24px;

  border-radius: 6px;
  border: none;

  font-weight: 600;
  font-size: 20px;

  background-color: #ebebae;
  &:hover{
    scale: 1.1;
  }

  &::first-letter{
    text-transform: uppercase;
  }

  &:first-of-type{
    background-color: green;
  }

  &:nth-of-type(2){
    background-color: yellow;
  }

  &:last-of-type{
    background-color: red;
  }
`;
