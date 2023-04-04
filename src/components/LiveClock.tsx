import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    padding: 10px;
    h1 {
        font-size: 1.5em;
        margin-bottom: 15px;
    }
`;

/**
 * @description 시계
 */
function LiveClock() {
    // state
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    // useEffect : 특정 조건을 주시하고 있다가 값이 바뀌면 리렌더링 해주는 hook
    // 두번째 배열에 빈 배열 입력 시, 최초 렌더링에만 실행 (javascript 상의 onLoad 함수와 같음)
    // 두번째 배열에 특정 변수 입력 시, 해당 변수 변경 시에 실행 (hook을 사용하는 변수를 넣는걸 권장, 일반 변수 경우는 권장하지 않음)
    // watch
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTime(new Date());
        }, 1000);

        // clean-up : java 의 garbage collector 와 같은 역할, 해당 컴포넌트 렌더링 해제 시 자원 회수(해제)
        return () => {
            clearTimeout(timer);
        };
    }, [currentTime]);

    // view
    return (
        <Wrap>
            <h1>Live Clock</h1>
            <div>{currentTime.toString()}</div>
        </Wrap>
    );
}

export default LiveClock;
