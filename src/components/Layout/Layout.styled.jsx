import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: start;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 5px;
  box-shadow: 0 6px 4px -4px rgba(8, 116, 167, 0.1);

  .pageLink {
    padding: 2px 7px;
    margin-bottom: 5px;
    margin: 10px;
    border-radius: 4px;
    font-size: 20px;
    letter-spacing: 2px;
    transition: 0.3s all linear;
    text-decoration: none;
    font-weight: 500;
    color: #135c86;
    height: 20px;

    &:hover {
      color: #da7e15;
      box-shadow: 0 6px 4px -4px rgba(8, 116, 167, 0.6);
    }
  }
`;
