/**
 *
 * @description 사이드바 컴포넌트
 * @see http://www.google.com
 */
import styled from "styled-components";
type Props = {
    title: string;
    description: string;
};
const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #a4d1c7;
`;
function Sidebar({ title, description }: Props) {
    return (
        <SidebarContainer>
            <h1>Sidebar</h1>
            <div>{title}</div>
            <div>{description}</div>
        </SidebarContainer>
    );
}

export default Sidebar;
