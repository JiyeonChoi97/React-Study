// 파일명에 State 명시할 경우에는 전역 변수를 관리한다.
import { atom, useRecoilState, useResetRecoilState } from "recoil";

type LoginInfo = {
    userId: string;
    userPw: string;
};

// 변수 이름과 key이름은 통일시키는게 좋다. 일괄적으로 사용할 수 있다는 장점
// atom
const loginState = atom<LoginInfo>({
    //key는 유일한 아이디가됨
    key: "loginState",
    default: {
        userId: "",
        userPw: "",
    },
});

// Custom Hook(use를 앞에 붙여서 만든다.)
function useLoginState() {
    // loginState에서 State를 뺀 이름으로 변수 사용 추천
    const [login, setLogin] = useRecoilState(loginState);
    const resetLogin = useResetRecoilState(loginState); // 초기화

    return {
        login,
        setLogin,
        resetLogin,
    };
}

export { useLoginState };
