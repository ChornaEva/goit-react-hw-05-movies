import styled from 'styled-components';

export const TrendingFilmsList = styled.ol`
  justify-content: start;
  list-style: none;
  padding: 0;
  padding-bottom: 10px;
  padding-top: 5px;
  margin: 0;
`;
export const TrendingFilmsItem = styled.li`
  padding: 7px 20px;
  margin-bottom: 10px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  letter-spacing: 2px;
  transition: 0.3s all linear;
  height: 30px;
  max-width: 400px;

  &:hover {
    border-left: 15px solid #da7e15;
    box-shadow: 0 6px 4px -4px rgba(8, 116, 167, 0.1),
      0 6px 4px -4px rgba(8, 116, 167, 0.1),
      0 6px 4px -4px rgba(8, 116, 167, 0.1),
      0 6px 4px -4px rgba(8, 116, 167, 0.1);
  }
  .trendingFilmsLink {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-decoration: none;
    color: #135c86;
    margin: 5px;
    padding: 0;
    &:hover {
      color: #da7e15;
      text-decoration: underline;
    }
  }
`;
export const TrendingFilmsHeader = styled.h1`
  color: #135c86;
  margin-left: 10px;
`;
