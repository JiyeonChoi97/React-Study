/**
 *
 * @description Footer 컴포넌트
 * @see http://www.google.com
 */
import styled from "styled-components";
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
    return (
        <FooterContainer>
            <h2>
                {title} {description}
            </h2>
        </FooterContainer>
    );
}

export default Footer;
