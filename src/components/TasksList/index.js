import React, { useState, useEffect } from 'react';

import { MdArrowDownward, MdArrowUpward } from 'react-icons/md';
import {
  Container,
  Header,
  Title,
  List,
  Task,
  OrderButton,
  Select,
  Right,
  Option,
  Error,
} from './styles';

export default function TasksList({ data }) {
  const [up, setUp] = useState(true);
  const [columnsOrder, setColumnsOrder] = useState([]);
  const [selected, setSelected] = useState('all,#fff');

  useEffect(() => {
    setColumnsOrder(
      up
        ? Array.from(data.columnsOrder).map(item => item)
        : Array.from(data.columnsOrder).reverse(item => item)
    );
  }, [data.columnsOrder, up]);

  return (
    <Container>
      <Header>
        <Title>Todas as Atividades</Title>
        <Right>
          <Select value={selected} onChange={e => setSelected(e.target.value)}>
            <Option value="all,#fff">Todas</Option>
            <Option value="column-1,#ddd">Para fazer</Option>
            <Option value="column-2,#ffff00aa">Em progresso</Option>
            <Option value="column-3,#00ff5555">Concluídas</Option>
          </Select>
          <OrderButton onClick={() => setUp(!up)}>
            {up ? <MdArrowUpward size={45} /> : <MdArrowDownward size={45} />}
          </OrderButton>
        </Right>
      </Header>
      <List>
        <Items columnsOrder={columnsOrder} selected={selected} data={data} />
      </List>
    </Container>
  );
}

function Items({ columnsOrder, selected, data }) {
  const tela = columnsOrder
    .filter(
      item =>
        item === selected.split(',')[0] || selected.split(',')[0] === 'all'
    )
    .map(columnId => {
      const column = data.columns[columnId];
      const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

      return tasks.map(task => (
        <Task key={task.id} color={column.colorLine}>
          {task.description}
        </Task>
      ));
    });
  return tela[0] && tela[0].length === 0 ? (
    <Error>
      <span>Nenhum item encontrado</span>
    </Error>
  ) : (
    tela
  );
}
