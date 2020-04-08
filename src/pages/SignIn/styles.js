import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  min-width: 370px;
  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(#0088ff, #5d46e2);
`;

export const LoginContainer = styled.div`
  max-width: 400px;
  min-width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 300px;
  height: 200px;
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px 20px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Input = styled.input`
  color: #444;
  border: 1px solid #ddd;
  padding: 10px 10px;
  font-size: 16px;
  height: 40px;
  background: #fff;
  border-radius: 4px;
  margin-top: 20px;

  :focus {
    border: 1px double #bbb;
  }
  ::placeholder {
    color: #888;
  }
`;

export const LoginButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 15px 20px;
  background: #1f104f;
  border-radius: 4px;
  margin-top: 20px;

  :hover {
    background: #1f1040;
  }
`;
