import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  color: #fff;
  font-size: 18px;
  &.active {
    color: #ebd0b7;
  }
`;

export const Div = styled.div`
  margin-right: 50px;
`;
