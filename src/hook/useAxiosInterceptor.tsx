import { useEffect } from "react";
import client from "@/plugin/client";

/**
 * @description 비동기 인터셉터 훅
 */
function useAxiosInterceptor() {
    useEffect(() => {
        // 요청
        const requestInterceptor = client.interceptors.request.use(
            (config) => {
                console.log("비동기 요청");

                return config;
            },
            (error) => {
                console.log("비동기 요청 에러");

                // 비동기 통신 강제 종료
                Promise.reject(error);
            }
        );

        // 응답
        const responseInterceptor = client.interceptors.response.use(
            (config) => {
                console.log("비동기 응답");

                return config;
            },
            (error) => {
                console.log("비동기 응답 에러");

                // 비동기 통신 강제 종료
                Promise.reject(error);
            }
        );

        // clean-up 함수를 통해 메모리 회수
        return () => {
            client.interceptors.request.eject(requestInterceptor);
            client.interceptors.request.eject(responseInterceptor);
        };
    }, []);
}

export default useAxiosInterceptor;
