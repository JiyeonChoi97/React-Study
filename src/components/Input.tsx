/**
 * @description input 컴포넌트
 */

import styled from "styled-components";
import { ChangeEvent, useState, useEffect } from "react";

// import loginState from "@/global/loginState";
// import { useRecoilState } from "recoil";
import { useLoginState } from "@/global/loginState";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
    input {
        margin-top: 10px;
        padding: 10px;
    }
`;

function Input() {
    // state
    // 함수형 컴포넌트만 hook을 사용할 수 있고 모든 Hook은 컴포넌트 안에 선언되어야 한다.
    // const [inputValue, setInputValue] = useState<string>("");

    // atom으로 선언한 값을 default값으로 넣어준다.
    // const [loginInfo, setLoginInfo] = useRecoilState(loginState);

    // custom hook 사용
    const { login, setLogin, resetLogin } = useLoginState();

    // event
    // ChangeEvent<HTMLInputElement> : 어떤 Tag에 따라 이벤트가 발생했느냐에 따라 e의 값이 달라짐
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setLogin((prevState) => {
            const updateLoginInfo = {
                ...prevState,
                userId: value,
            };
            return updateLoginInfo;
        });
    };

    const onReset = () => {
        resetLogin();
    };

    // watch
    // [] 없이 사용하게 된다면 화면에 변경상황이 생길때마다 호출
    // [] : 화면 진입시 로딩될때 딱 한번 호출(초기화면)
    // [value] : value값이 변경될때마다 호출
    useEffect(() => {
        //init
        console.log(new Date());
    }, [login.userId]);

    // view
    return (
        <Wrap>
            <h1>Input : {login.userId}</h1>
            <input value={login.userId} onChange={onChange} />
            <button onClick={onReset}>RESET</button>
        </Wrap>
    );
}

export default Input;
