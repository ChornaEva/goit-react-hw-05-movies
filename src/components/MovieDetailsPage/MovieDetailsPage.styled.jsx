import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: start;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 6px 4px -4px rgba(8, 116, 167, 0.1);
`;
export const MovieDetailsImg = styled.img`
  display: flex;
  flex-direction: start;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0 6px 4px -4px rgba(8, 116, 167, 0.1);
  max-width: 100%;
  width: 500px;
  height: 500px;
  border-radius: 14px;
`;

export const MovieDetailsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
export const MovieDetailsItem = styled.li`
  margin-right: 10px;
  font-size: 17px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 7px;
  padding: 5px;

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

export const MovieDetailsHeader = styled.h1`
  color: #135c86;
  margin-left: 10px;
`;

export const MovieDetailsHeading = styled.h2`
  color: #135c86;
  margin-left: 10px;
`;
export const MovieDetailsText = styled.p`
  margin: 0;
  margin-left: 10px;
  padding: 3px;
`;
