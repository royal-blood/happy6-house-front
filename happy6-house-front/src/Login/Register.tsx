import React from 'react';
import styled from 'styled-components';
import l_ok from './l_ok.gif';
import login_pw from './login_pw.gif';
import login_email from './login_email.gif';

const RegisterContainer = styled.div`
  display:flex;
  padding:10px;
  background:white;
  border-radius:3px;
  border: 1px solid black;
  flex-direction:column;
  transform: translate(-50%, -50%);
  position:absolute;
  left:50%;
  top:50%;
  justfiy-content:center;
  align-items:center;

  background:#F4F4F4;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.2);

  .header {
    font-weight:bolder;
    font-size:1.4em;
    padding:5px;
  }

  .subheader {
    font-size:0.8rem;
    padding:5px;
  }

  & > img {
    margin-top:5px;
  }
`
const Table = styled.table`
`
const Td = styled.td`
  vertical-align: middle;
  img { 
    padding: 6px;
  }
`

const Register = () => {
  return (
    <RegisterContainer>
      <div className="header">회원가입</div>
      <div className="subheader">이메일과 비밀번호를 입력해주세요.</div>

      <Table cellPadding={0} cellSpacing={0}> 
        <tbody>
          <tr>
            <Td width="42">
              <img src={login_email}></img>
            </Td>
            <Td width="93">
              <input></input>
            </Td>
          </tr>
          <tr>
            <Td width="42">
              <img src={login_pw}></img>
            </Td>
            <Td width="93">
              <input></input>
            </Td>
          </tr>
        </tbody>
      </Table>
      <img src={l_ok}></img>
    </RegisterContainer>
  )
}

export default Register;