import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  padding: 20px;
`;

export const ListItem = styled.li`
  margin: 10px;
  flex-basis: calc((100% - 2 * 15px) / 1);
  padding: 5px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;
