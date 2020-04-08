import styled from 'styled-components';

export const Container = styled.div`
  width: 30%;
  padding: 8px 14px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  margin-left: 40px;
  background: #eee;

  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
  color: #0088ff;
  margin-top: 10px;
  border-width: 1px;
  border-bottom-style: solid;
  border-color: #0088ff;
  width: 100%;
  padding: 10px 0;
`;

export const TaskList = styled.div`
  display: flex;
  flex: 1;
  margin-top: 20px;
  flex-direction: column;
  transition: border 0.2s;
  padding: ${props => (props.isDraggingOver ? '3px 3px' : '8px 8px')};
  border: ${props => (props.isDraggingOver ? '5px dashed #0088ff' : '0')};
`;
