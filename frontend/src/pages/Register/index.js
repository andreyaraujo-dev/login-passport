import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

import './style.css';
import imgGrande from '../../assets/passport-login-2.png';

export default function Register() {
  return (
    <Container>
      <DivLogin>
        <h1>Create your account to</h1>
        <h2>access the system.</h2>
        <FormLogin>
          <label htmlFor="name">Name</label>
          <InputText name="name" id="name"></InputText>
          <label htmlFor="email">E-mail</label>
          <InputText name="email" id="email"></InputText>
          <label htmlFor="username">Username</label>
          <InputText name="username" id="username"></InputText>
          <label htmlFor="password">Password</label>
          <InputText name="password" id="password"></InputText>
          <ButtonLogin>Create account</ButtonLogin>
        </FormLogin>
        <div className="div-link-register">
          <Link to="/" className="link-register"><small>Already have an account? Sign in.</small></Link>
        </div>
        <ConteudoRodape>Created and developed by Jacksson Andrey.</ConteudoRodape>
      </DivLogin>
      <DivImg>
        <img src={imgGrande} alt="Passport Login"/>
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
  box-sizing: boder-box;
  h2 {
    margin-top: 5px;
  }
  h1 {
    margin-top: 100px;
    margin-bottom: 5px;
  }
  small {
    font-size: 16px;
    text-align: center;
    text-decoration: none;
  }
`;

const DivImg = Styled.div`
  flex: 1;
  max-width: 90vw;
  height: 100vh;
  padding: 0 20px;
  text-align: center;
  img {
    height: 90vh;
    max-width: 90vw;
  }
`;

const FormLogin = Styled.form`
  max-width: 90%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const InputText = Styled.input`
  width: 100%;
  padding: 20px 40px;
  border-radius: 8px;
  outline: none;
  border: 1px solid #CECECE;
  margin-bottom: 10px;
`;

const ButtonLogin = Styled.button`
  width: 100%;
  height: 60px;
  background-color: #210747;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  color: #FFFFFF;
  border: 0;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(90%);
  }
`;

const ConteudoRodape = Styled.div`
  flex: 1;
  text-align: center;
  color: #210747;
  font-size: 16px;
  margin-top: 15vh;
`;