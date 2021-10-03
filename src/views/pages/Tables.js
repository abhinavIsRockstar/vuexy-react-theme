import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react'

import { useTable, usePagination,  useGlobalFilter,useFilters } from 'react-table'
import GlobalFilter from '../../components/@vuexy/globalFilter/GlobalFilter';
import {ColumnFilter} from '../../components/@vuexy/columnFilter.js/ColumnFilter';

function Tables() {
  const [tableRowData, settableRowData] = useState([])  
  
  useEffect(() => {
    userData();
  },[])

  const userData = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const item = await data.json();
    console.log(item,'item');
    settableRowData(item)

  }

   console.log(userData,'userData');
   console.log(tableRowData,'tablerowdata')

  // here data1 was the described data

    // const data1 = React.useMemo(
    //     () => [
    //       {
    //         col1: 'Hello',
    //         col2: 'World',
    //         col3: "hello",
    //         col4: "React",
    //         col5: "java",
    //         col6: "python"
    //       },

    //       {
    //         col1: 'react',
    //         col2: 'World',
    //         col3: "hello",
    //         col4: "React",
    //         col5: "java",
    //         col6: "python"
    //       },

    //       {
    //         col1: 'html',
    //         col2: 'World',
    //         col3: "hello",
    //         col4: "React",
    //         col5: "java",
    //         col6: "python"
    //       },

    //       {
    //         col1: 'css',
    //         col2: 'World',
    //         col3: "hello",
    //         col4: "React",
    //         col5: "java",
    //         col6: "python"
    //       },
    //     ],
    //     []
    //   )

    //   console.log(data1,'data1')
// dynamic code of row table data
    
  const data = React.useMemo(
      ()=>
      tableRowData.map(
      (item) => (
      {
        
          col1: item.id,
          col2: item.email,
          col3: item.name,          
          col5: item.username,
          col4: item.phone,
          col6: item.website,
        
      }
    )),[tableRowData])

    
    
    console.log(data,'data')
   

      const columns = React.useMemo(
        () => [
          {
            Header: 'ID',
            accessor: 'col1', // accessor is the "key" in the data
            Filter : ColumnFilter,
          },
          {
            Header: 'EMAIL',
            accessor: 'col2',
            Filter : ColumnFilter,
          },
          {
            Header: 'NAME',
            accessor: 'col3', // accessor is the "key" in the data
            Filter : ColumnFilter,
          },
          {
            Header: 'USERNAME',
            accessor: 'col5', // accessor is the "key" in the data
            Filter : ColumnFilter,
          },
          {
            Header: 'PHONE',
            accessor: 'col4',
            Filter : ColumnFilter,
          },

          {
            Header: 'WEBSITE',
            accessor: 'col6',
            Filter : ColumnFilter,
          },
        ],
        []
      )
// dynamic column header data

    // const columns = (tableRowData.map((item) => (
    //   {
    //     Header: 'ID',
    //     accessor: 'col1', // accessor is the "key" in the data
    //   }
    // )))
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        setGlobalFilter,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize,globalFilter },
      } = useTable(
        { 
        columns,
        data,
        initialState: { pageIndex: 0 ,pageSize: 5}
        },
        useFilters,
        useGlobalFilter,         
              
        usePagination, 
       )

        console.log(pageSize,'pageIndex')

      return (
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
        {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage
            },
            null,
            2
          )}
        </code>
      </pre> */}
        <table {...getTableProps()} style={{ border: 'solid 1px gray' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px Aqua',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                   
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row,i) => {
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
                          background: 'whitesmoke',
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

        <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      </>
      )
}

export default Tables
