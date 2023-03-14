/**
 * @description 카운터 컴포넌트
 */

import styled from "styled-components";
import { useState } from "react";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 2em;
    }
    button {
        margin-right: 3px;
        width: 30px;
        height: 30px;
    }
`;
function Counter() {
    // state
    // read-only, update
    // react에서는 변수 선언을 따로 하지 않고 useState를 통해 변수 관리
    // const [변수명, 함수명] = useState<type>(init)
    const [count, setCount] = useState<number>(0);

    // event
    const onIncrease = () => {
        // 3번 호출해도 한번만 적용(read-only 사용 지양)
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);

        // 이전값을 가져와서 적용
        setCount((prevState) => prevState + 1);
        // setCount((prevState) => prevState + 1);
        // setCount((prevState) => prevState + 1);
    };

    const onDecrease = () => {
        setCount((prevState) => prevState - 1);
    };

    // view
    return (
        <Wrap>
            <hr />
            <h1>Counter : {count}</h1>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
            <hr />
        </Wrap>
    );
}

export default Counter;
