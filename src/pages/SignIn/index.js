import React from 'react';

import {
  Container,
  LoginContainer,
  Image,
  LoginForm,
  Input,
  LoginButton,
} from './styles';
import Logo from '../../assets/logo.png';
import history from '../../services/history';

export default function SignIn() {
  function handleSubmit() {
    localStorage.setItem('@manager/auth', true);
    history.push('/');
  }

  return (
    <Container>
      <LoginContainer>
        <Image src={Logo} alt="logo" />
        <LoginForm>
          <Input placeholder="Seu email" type="email" />
          <Input placeholder="Sua senha" type="password" />
        </LoginForm>
        <LoginButton onClick={handleSubmit}>Login</LoginButton>
      </LoginContainer>
    </Container>
  );
}
