import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
  margin-bottom: 25px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 25px;
  color: #0088ff;
  font-weight: bold;
`;

export const List = styled.ul`
  list-style: none;
  padding: 15px;
`;

export const Task = styled.li`
  border: 3px dashed ${props => props.color};
  padding: 15px 10px;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const OrderButton = styled.button`
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Select = styled.select`
  border: 1px solid #ddd;
  background: ${props => props.value.split(',')[1]};
  padding: 5px;
  font-size: 18px;
  margin-right: 15px;
  border-radius: 4px;
`;

export const Option = styled.option`
  background: #fff;
  padding: 5px 2px;
  font-size: 15px;
`;

export const Error = styled.li`
  width: 100%;
  background: #ff8787;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;
  color: #fff;
  border-radius: 5px;

  span {
    font-size: 16px;
    text-align: center;
  }
`;
