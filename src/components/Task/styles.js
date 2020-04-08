import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 8px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px 0 ${props => props.color},
    0 10px 10px 0 ${props => props.color};
  border-radius: 4px;
  margin-bottom: 30px;
  background: ${props => (props.isDragging ? '#0088ff22' : '#fff')};
`;
