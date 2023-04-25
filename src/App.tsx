import styled from "styled-components";

import Header from "@/layout/Header";
import Contents from "@/layout/Contents";
import Footer from "@/layout/Footer";
import Sidebar from "@/layout/Sidebar";
import GlobalStyle from "@/style/GlobalStyle";
import useAxiosInterceptor from "./hook/useAxiosInterceptor";

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 240px;
`;

function App() {
    // script

    // hook
    useAxiosInterceptor();

    // view
    return (
        <>
            <GlobalStyle />
            <AppContainer>
                <Header title="Jiyeon" description="React Header" />
                <Sidebar title="Sidebar" description="Layout" />
                <Contents title="Contents" description={100} />
                <Footer title="Footer" description="Layout" />
            </AppContainer>
        </>
    );
}

export default App;
