/**
 *
 * @description Footer 컴포넌트
 * @see http://www.google.com
 */
import styled from "styled-components";
// import loginState from "@/global/loginState";
// import { useRecoilState } from "recoil";
import { useLoginState } from "@/global/loginState";

type Props = {
    title: string;
    description: string;
};
const FooterContainer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #ffce46;
`;

function Footer({ title, description }: Props) {
    // global State
    // const [loginInfo] = useRecoilState(loginState);

    // custom Hook
    const { login, setLogin } = useLoginState();

    return (
        <FooterContainer>
            <h2>
                {title} {login.userId}
            </h2>
        </FooterContainer>
    );
}

export default Footer;
