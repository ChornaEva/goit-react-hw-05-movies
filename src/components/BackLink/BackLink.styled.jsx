import styled from 'styled-components';

export const BackLinkButton = styled.button`
  display: flex;
  align-items: center;

  border: none;
  text-transform: capitalize;
  text-decoration: underline;
  margin-left: 20px;
  margin-bottom: 10px;
  background-color: transparent;
  color: #579bc2;
  font-weight: 700;
  font-size: 16px;

  &:hover {
    color: #da7e15;
  }
`;
