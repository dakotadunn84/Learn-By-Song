import React from 'react';
import logo from './monkey.png';
import ReactPlayer from "react-player"
import { useTable } from "react-table"
import './App.css';

function App() {

  const data = React.useMemo(
    () => [
      {
        col1: '其',
        col2: '实',
        col3: '妳',
        col4: '是',
        col5: '个',
        col6: '心',
        col7: '狠',
        col8: '又',
        col9: '手',
        col10: '辣',
        col11: '的',
        col12: '小',
        col13: '偷'
      },
      {
        col1: 'qi',
        col2: 'shi',
        col3: 'ni',
        col4: 'shi',
        col5: 'ge',
        col6: 'xin',
        col7: 'hen',
        col8: 'you',
        col9: 'shou',
        col10: 'la',
        col11: 'de',
        col12: 'xiao',
        col13: 'tou'
      },
      {
        col1: 'no direct translation',
        col2: 'honest',
        col3: 'you',
        col4: 'are',
        col5: 'a',
        col6: 'heart	ruthless',
        col7: 'ruthless',
        col8: 'and/again',
        col9: 'hand',
        col10: 'spicy',
        col11: '\'s (possesive)',
        col12: 'little',
        col13: 'steal',
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'col2',
      },
      {
        Header: 'Column 3',
        accessor: 'col3',
      },
      {
        Header: 'Column 4',
        accessor: 'col4',
      },
      {
        Header: 'Column 5',
        accessor: 'col5',
      },
      {
        Header: 'Column 6',
        accessor: 'col6',
      },
      {
        Header: 'Column 7',
        accessor: 'col7',
      },
      {
        Header: 'Column 8',
        accessor: 'col8',
      },
      {
        Header: 'Column 9',
        accessor: 'col9',
      },
      {
        Header: 'Column 10',
        accessor: 'col10',
      },
      {
        Header: 'Column 11',
        accessor: 'col11',
      },
      {
        Header: 'Column 12',
        accessor: 'col12',
      },
      {
        Header: 'Column 13',
        accessor: 'col13',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (


    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn Mandarin from the lyrics of popular songs at karaoke.
        </p>
        <div>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=IFTZtuXKzFs"
          />
        </div>
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'CornflowerBlue',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
