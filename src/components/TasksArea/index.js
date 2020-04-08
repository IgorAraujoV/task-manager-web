import React from 'react';

import { DragDropContext } from 'react-beautiful-dnd';

import Column from '../Column';

function TaskArea({ data, setData }) {
  function onDragEnd(result) {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);

      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newData);
      return;
    }

    const sourceTaskIds = Array.from(start.taskIds);
    const destTaskIds = Array.from(finish.taskIds);

    sourceTaskIds.splice(source.index, 1);
    destTaskIds.splice(destination.index, 0, draggableId);

    const newSourceColumn = {
      ...start,
      taskIds: sourceTaskIds,
    };
    const newDestColumn = {
      ...finish,
      taskIds: destTaskIds,
    };
    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestColumn.id]: newDestColumn,
      },
    };
    setData(newData);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnsOrder.map(columnId => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(taskId => data.tasks[taskId]);

        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
}

export default TaskArea;
