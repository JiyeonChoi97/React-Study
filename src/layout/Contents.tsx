/**
 *
 * @description Content 컴포넌트
 * @see http://www.google.com
 */
import styled from "styled-components";
type Props = {
    title: string;
    description?: number;
};

const ContentsContainer = styled.main`
    height: 100%;
    background-color: #ffffff;
`;
function Contents({ title, description }: Props) {
    return (
        <ContentsContainer>
            <h1>{title}</h1>
            <div>{description}</div>
        </ContentsContainer>
    );
}

export default Contents;
