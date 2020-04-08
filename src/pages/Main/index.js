import React, { useState } from 'react';

import { MdMenu, MdList, MdClose, MdHome, MdArrowBack } from 'react-icons/md';
import history from '../../services/history';

import TasksArea from '../../components/TasksArea';
import TasksList from '../../components/TasksList';
import initialData from '../../initial-data';

import {
  Container,
  Sidebar,
  SidebarHeader,
  SidebarIcon,
  SiderBarList,
  SidebarItem,
  SidebarItemText,
  MainPage,
  Logout,
} from './styles';

export default function Main() {
  const [visible, setVisible] = useState(false);
  const [listVisible, setListVisible] = useState(false);
  const [data, setData] = useState(initialData);

  function handleLogout() {
    localStorage.removeItem('@manager/auth');
    history.push('/login');
  }

  return (
    <Container>
      <Sidebar visible={visible}>
        <SidebarHeader visible={visible}>
          <SidebarIcon onClick={() => setVisible(!visible)}>
            {visible ? (
              <MdClose size={40} color="#fff" />
            ) : (
              <MdMenu size={40} color="#FFF" />
            )}
          </SidebarIcon>
        </SidebarHeader>
        <SiderBarList>
          <SidebarItem
            selected={!listVisible}
            onClick={() => setListVisible(false)}
            visible={visible}
          >
            <MdHome size={50} color="#fff" />
            {visible && <SidebarItemText>Início</SidebarItemText>}
          </SidebarItem>
          <SidebarItem
            selected={listVisible}
            onClick={() => setListVisible(true)}
            visible={visible}
          >
            <MdList size={50} color="#fff" />
            {visible && <SidebarItemText>Todas as Atividades</SidebarItemText>}
          </SidebarItem>
        </SiderBarList>
        <Logout visible={visible} onClick={handleLogout}>
          <MdArrowBack size={50} color="#fff" />
          {visible && <SidebarItemText>Sair</SidebarItemText>}
        </Logout>
      </Sidebar>
      <MainPage listVisible={listVisible}>
        {listVisible ? (
          <TasksList data={data} />
        ) : (
          <TasksArea data={data} setData={setData} />
        )}
      </MainPage>
    </Container>
  );
}
