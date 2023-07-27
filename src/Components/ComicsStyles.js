import styled from 'styled-components';

export const ComicsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const ComicsHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ComicsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ComicsListItem = styled.li`
  margin-bottom: 10px;
`;

export const ComicsLink = styled.a`
  display: block;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
