import styled from "styled-components";
import { Outlet } from "react-router-dom";
/**
 *
 * @description Content 컴포넌트
 * @see http://www.google.com
 */

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
            {/* 부모 path로부터 children path로 명시한 컴포넌트들을 Outlet에서 컴포넌트를 렌더링 한다. */}
            {/* Outlet은 렌더링 되기 위한 껍데기인데 모두 적용되는건 아니고 children path에만 적용된다. */}
            <Outlet />
        </ContentsContainer>
    );
}

export default Contents;
