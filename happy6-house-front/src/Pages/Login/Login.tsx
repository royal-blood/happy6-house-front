import React, { useCallback, useState } from "react"
import Lottie from "react-lottie"
import Styled from "./styles"
import lottie_login_animi from '../../login.json';
import InputGroup from "../../Atomic/InputGroup";
import Button from "../../Atomic/Button";

const Login = () => {

    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: lottie_login_animi,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
        }
    }
    // TODO: width를 어떻게 계산할건지? 
    // TODO : { } 이거 매번 새엇ㅇ하지 않도록 외부로 정의할것?
    const onCompleted = useCallback( () => {
        alert('abc');
    }, []);

    const [isLoading, setLoading] = useState(false);
    const [isStopped, setStop] = useState(true);

    // react-query활용하기.
    const onClicked = useCallback( () => {
        setLoading(true);
        setTimeout( () => {
            setStop(false);
        }, 2000);
    }, []);

    return (
        <Styled.FullHeightWrapper>
            <Styled.BodyWrapper>
                <Styled.LottieWrapper>
                    <Lottie 
                        isStopped={isStopped}
                        options={defaultOptions}
                        isClickToPauseDisabled={true}
                        height={200} 
                        width={200}
                        eventListeners={[{eventName : 'complete' , callback : onCompleted}]}
                    />
                </Styled.LottieWrapper>
                <InputGroup id="id" text="아이디" isRequired={true}/>
                <InputGroup type={"password"} id="password" text="비밀번호" isRequired={true}/>
                <div style={{margin:'20px'}}></div>
                <Button text="로그인하기" isLoading={isLoading} onClicked={onClicked}/> 
            </Styled.BodyWrapper>
        </Styled.FullHeightWrapper>
    )
}

export default Login;