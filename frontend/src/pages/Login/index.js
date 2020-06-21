import React from 'react';
import Styled from 'styled-components';

const Div = Styled.div`
  background: red;
  text-align: center;
  padding: 20px;
  width: 300px;
  height: 300px;
`;

export default function Login() {
  return (
    <Div>
      <h2>Hello World!</h2>
    </Div>
  );
}