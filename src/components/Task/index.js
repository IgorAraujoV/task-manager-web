import React from 'react';

import { Draggable } from 'react-beautiful-dnd';
import { Container } from './styles';

export default function Task({ task, index, color }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          color={color}
        >
          {task.description}
        </Container>
      )}
    </Draggable>
  );
}
