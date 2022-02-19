import styled from 'styled-components';

export const FilterInput = styled.input`
  display: flex;
  max-height: 20px;
  max-width: 300px;
  margin-left: 10px;
  padding-right: 14px;
  padding-left: 14px;
  padding-top: 8px;
  padding-bottom: 6px;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 1px -1px 3px 0 rgba(8, 116, 167, 0.1),
    -1px -1px 3px 0 rgba(8, 116, 167, 0.1), 1px 1px 3px 0 rgba(8, 116, 167, 0.1),
    -1px 1px 3px 0 rgba(8, 116, 167, 0.1);
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-bottom: 6px;
  margin: 10px;
  margin-left: 5px;

  .searchFilmsLink {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-decoration: none;
    color: #135c86;
    margin: 5px;
    padding: 0;
    &:hover {
      color: #135c86;
      text-decoration: underline;
    }
  }
`;

export const InputButton = styled.button`
  border-radius: 4px;
  border: none;
  width: 120px;
  height: 35px;
  text-transform: capitalize;
  margin-left: 10px;
  padding: 0;
  background-color: #579bc2;
  color: white;
  &:hover {
    background-color: #da7e15;
  }
`;
export const SearchFilmsList = styled.ol`
  justify-content: start;
  list-style: none;
  padding: 0;
  padding-bottom: 10px;
  padding-top: 5px;
  margin: 0;
`;
export const SearchFilmsItem = styled.li`
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
  .searchFilmsLink {
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

export const InputForm = styled.form`
  display: flex;
`;
