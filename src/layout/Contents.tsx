/**
 *
 * @description Content 컴포넌트
 * @see http://www.google.com
 */
import styled from "styled-components";

import Counter from "@/components/Counter";
import Input from "@/components/Input";

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
            {/* <h2>{title}</h2> */}
            {/* <h2>{description}</h2> */}
            <Counter />
            <Input />
        </ContentsContainer>
    );
}

export default Contents;
