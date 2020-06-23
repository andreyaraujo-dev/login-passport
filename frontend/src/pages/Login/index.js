import React from 'react';
import Styled from 'styled-components';

import imgLogin from '../../assets/passport-login-1.png';

export default function Login() {
  return (
    <Container>
      <DivLogin>
        <h1>Welcome back!</h1>
        <h2>Log in and access your account.</h2>

      </DivLogin>
      <DivImg>
        <img src={imgLogin} alt="Passport Login"/>
      </DivImg>
    </Container>
  );
}

const Container = Styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 1.5em;
`;

const DivLogin = Styled.div`
  background: #DFD3EB;
  flex: 1;
  max-width: 30vw;
  height: 100vh;
  padding: 0 40px;
  color: #210747;
`;

const DivImg = Styled.div`
  flex: 1;
  max-width: 90vw;
  height: 100vh;
  padding: 0 20px;
  text-align: center;
`;
