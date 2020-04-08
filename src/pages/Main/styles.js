import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const Sidebar = styled.div`
  width: ${props => (props.visible ? '288px' : '100px')};
  background: linear-gradient(#0088ff, #5d46e2);
  z-index: 1;
  transition: width 0.5s;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const SidebarHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: 0;
  padding-right: ${props => (props.visible ? '4px' : '0')};
  justify-content: ${props => (props.visible ? 'flex-end' : 'center')};
`;

export const SidebarIcon = styled.button`
  padding: 1px;
  margin-top: 4px;
  height: 50px;
  width: 50px;
  background: none;
`;

export const SiderBarList = styled.ul`
  width: 100%;
  background: none;
  display: flex;
  position: sticky;
  top: 200px;
  flex-direction: column;
`;

export const SidebarItem = styled.li`
  background: ${props => (props.selected ? '#5d46e2' : 'none')};
  padding: ${props => (props.visible ? '10px 0 10px 20px' : '10px 0')};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${props => (props.visible ? 'flex-start' : 'center')};
  cursor: pointer;

  :hover {
    background: #5d46e2;
  }
`;

export const SidebarItemText = styled.label`
  color: #fff;
  font-size: 18px;
  margin-left: 15px;
  font-weight: bold;
`;
export const Logout = styled.button`
  background: none;
  padding: ${props => (props.visible ? '10px 0 10px 20px' : '10px 0')};
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  top: calc(100vh - 70px);
  bottom: 20px;
  justify-content: ${props => (props.visible ? 'flex-start' : 'center')};
  cursor: pointer;
  :hover {
    background: #0088ff;
  }
`;

export const MainPage = styled.main`
  display: flex;
  min-height: 100vh;
  flex: 1;
  padding: 20px 40px 20px 0;
  background: ${props => (props.listVisible ? '#fff' : '#aaa')};
`;
