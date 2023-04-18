/**
 *
 * @description 헤더 컴포넌트
 * @see http://www.google.com
 */

import styled from "styled-components";
// import loginState from "@/global/loginState";
// import { useRecoilState } from "recoil";
import { useLoginState } from "@/global/loginState";

// type, 오타, 필수여부 체크(필수가 아닐 경우 '?'사용)
type Props = {
    title: string;
    description?: string;
};

const HeaderContainer = styled.header`
    width: 100%;
    height: 120px;
    background-color: #a6f78b;
`;

function Header({ title, description }: Props) {
    // global State
    // const [loginInfo] = useRecoilState(loginState);

    // custom hook
    const { login, setLogin } = useLoginState();

    // view
    return (
        <HeaderContainer>
            <h2>{title}</h2>
            <h2>{login.userId}</h2>
        </HeaderContainer>
    );
}

// 한가지 컴포넌트만 export할 시에는 export default
export default Header;

// 여러개 메서드를 외부로 export로 할때에는 아래처럼 사용
// 컴퍼넌트를 export할떄는 권장하지 않음
// export { Header }
