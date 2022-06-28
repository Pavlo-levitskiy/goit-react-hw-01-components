import styled from 'styled-components';

export const Table = styled.table`
  padding: 15px;
  width: 350px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  .table-head {
    text-transform: uppercase;
    background-color: rgb(118, 154, 238);
  }
  .even {
    background-color: rgb(202, 238, 255);
  }
  .odd {
    background-color: rgb(240, 243, 245);
  }
  th,
  td {
    padding: 15px;
  }
`;
