import React, { useState } from 'react';
import { Container, Button } from '@chakra-ui/react';
import { useTable } from 'react-table';
import './table.css';


const DPTable = () => {
  const COLUMNS = [
    {
      Header: 'A',
      accessor: 'id',
    },
    {
      Header: 'B',
      accessor: 'first_name',
    },
    {
      Header: 'C',
      accessor: 'last_name',
    },
    {
      Header: 'D',
      accessor: 'date_of_birth',
    },
  ];
  const DUMMY_DATA = [
    {
      id: 'X',
      first_name: 'Dorey',
      last_name: 'Rumbellow',
      date_of_birth: '2020-09-08T18:11:46Z',
    },
    {
      id: 'C',
      first_name: 'Isaac',
      last_name: 'Crow',
      date_of_birth: '2020-09-26T18:23:21Z',
    },
    {
      id: 'D',
      first_name: 'Korella',
      last_name: "O'Hannen",
      date_of_birth: '2020-05-26T13:49:10Z',
    },
    {
      id: 'X',
      first_name: 'Ellette',
      last_name: 'Skotcher',
      date_of_birth: '2020-03-23T19:48:21Z',
    },
  ];
  // const columns = React.useMemo(() => COLUMNS, []);
  // const data = React.useMemo(() => DUMMY_DATA, []);

  const [tableInstance, setTableInstance] = useState();
  const GenerateTable = () => {
    const table = useTable({
      columns: COLUMNS,
      data: DUMMY_DATA,
    });
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } = table;

    setTableInstance({
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    });
  };

  return (
    <Container maxW="95%">
      {tableInstance && (
        <table {...tableInstance.getTableProps()}>
          <thead>
            {tableInstance.headerGroups.map(headerGroup => (
              <tr {...tableInstance.headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...tableInstance.column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...tableInstance.getTableBodyProps()}>
            {tableInstance.rows.map(row => {
              tableInstance.prepareRow(row);
              return (
                <tr {...tableInstance.row.getRowProps()}>
                  {row.cells.map(cell => (
                    <td {...tableInstance.cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Button onClick={GenerateTable}>Calcular</Button>
    </Container>
  );
};

export default DPTable;
