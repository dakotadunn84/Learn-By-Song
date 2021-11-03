import React from "react";
import ReactPlayer from "react-player";
import { useTable } from "react-table"

function Song2() {

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
    <div className="私奔到月球 Eloping to the Moon">
      <div class="container">
        <div class="row align-items-center my-5">
          <div>
            <ReactPlayer url="https://www.youtube.com/watch?v=IFTZtuXKzFs" />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">私奔到月球 Eloping to the Moon</h1>
            <p>其实妳 是个心狠又手辣 的小偷</p>
            <p>Actually, you are a ruthless thief</p>
            <p>我的心 我的呼吸和名字 都偷走</p>
            <p>Stealing my heart, breath and name away</p>
            <p>你才是 绑架我的凶手</p>
            <p>But you were the one who kidnapped me</p>
            <p>机车后座的我 吹着风 逃离了平庸</p>
            <p>
              On the motorcycle backseat, in the gentle wind, escaping from the
              ordinary
            </p>
            <p>这星球 天天有五十亿人 在错过</p>
            <p>There are fifty million people missing out everyday</p>
            <p>多幸运 有妳一起看星星 在争宠</p>
            <p>How lucky I am to have you stargazing
              with me</p>
            <p>这一刻 不再问为什么</p>
            <p>Don’t ask why in this moment</p>
            <p>不再去猜测人和人 心和心 有什么不同</p>
            <p>Don’t second guess differences
              between people and their hearts</p>
            <p>一二三 牵着手</p>
            <p>One two three,
              holding hands</p>
            <p>四五六 抬起头</p>
            <p>Four five six, raising heads</p>
            <p>七八九
              我们私奔到月球</p>
            <p>Seven eight nine, let’s elope to the moon</p>
            <p>让双脚
              去腾空</p>
            <p>Let our feet jump into the air</p>
            <p>让我们 去感受</p>
            <p>Let us feel
              this moment</p>
            <p>那无忧的真空</p>
            <p>The carefree vacuum</p>
            <p>那月色纯真的感动</p>
            <p>The
              bliss of pure moonlight</p>
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
        </div>
      </div>
    </div>
  );
}

export default Song2;
