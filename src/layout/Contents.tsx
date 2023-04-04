/**
 *
 * @description Content 컴포넌트
 * @see http://www.google.com
 */
import styled from "styled-components";

import Counter from "@/components/Counter";
import Input from "@/components/Input";
import Calculator from "@/components/Calculator";
import Popup from "@/components/Popup";
import LiveClock from "@/components/LiveClock";
import TodoList from "@/components/ToDoList";

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
            {/* <Counter /> */}
            {/* <Input /> */}
            {/* <Calculator /> */}
            <Popup content="팝업 내용" btnTitle="버튼 내용" />
            <hr />
            <LiveClock />
            <hr />
            <TodoList />
        </ContentsContainer>
    );
}

export default Contents;
