import styled from "styled-components";
import login_join from './login_join.gif';
import login_pw from './login_pw.gif';
import login_email from './login_email.gif';
import login_button from './login_button.gif';
import minimi from './minimi.gif';
import minimi2 from './minimi2.gif';

const LoginContainer = styled.div`
  position : absolute;
  transform : translate(-50%, -50%);
  left: 50%;
  top: 50%;
  max-width:500px;
  background:#F4F4F4;
  box-shadow: 0 10px 20px rgba(0,0,0,0.2), 0 6px 6px rgba(0,0,0,0.2);
  border-radius:3px;
  border: 1px solid black;
  padding:10px;
`

const Table = styled.table`
`
const Td = styled.td`
  vertical-align: middle;
  img { 
    padding: 6px;
  }
`

const Center = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  span {
    font-weight: bolder;
    font-size:1.3rem;
    padding:12px;
  }
`

const Login = () => {
  //TODO : GRID로 대체.
  return (
    <LoginContainer>
      <Center>

        <span>로그인하기</span>
        {/* <img src={minimi}></img> */}
        {/* <img src={minimi}></img> */}
      </Center>
      <Table cellPadding={0} cellSpacing={0}> 
        <tbody>
          <tr>
            <Td width="42">
              <img src={login_email}></img>
            </Td>
            <Td width="93">
              <input></input>
            </Td>
            <Td rowSpan={2} width="51">
              <img className="login" src={login_button}></img>
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
      <hr/>
      <Center>
        <img src={login_join}></img>
      </Center>
    </LoginContainer>
  )
}

export default Login;