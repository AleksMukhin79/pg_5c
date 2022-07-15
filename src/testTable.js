import * as React from 'react'

import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

const columns = [
  { id: '1', field: 'id', label: 'Код', minWidth: 100 },
  { id: '2', field: 'deps_name', label: 'Участок', minWidth: 170 },
  { id: '3', field: 'createdAt', label: 'Дата', minWidth: 170, align: 'right', },
  { id: '4', field: 'coordinates', label: 'Координаты', minWidth: 170, align: 'right', },
  { id: '5', field: 'violator', label: 'Ф.И.О.', minWidth: 170, align: 'right', },]



export default function StickyHeadTable(props) {

  //const tableData = rows.reduce((acc, item) => [...acc, {...item, deps_name: item.deps.name}], [])

  const [rows, setItems] = React.useState([]);

  const tableData = rows.reduce((acc, item) => {
    const data = { ...item, deps_name: item.deps.name, deps_id: item.deps.id }
    return [...acc, data]
  }, [])


  React.useEffect(() => {
    fetch('http://localhost:4444/violations/')
      .then((res) => {
        return res.json();
      }).then(json => {
        setItems(json)
      })
  }, []
  )

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  const navigate = useNavigate();
  const onClickRow = () => {
    navigate("/Violation");
  }

  if (rows.length) {
    console.log(tableData)
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData
              .filter((row) =>
                (row.id + row.deps_name)
                  .toString()
                  .toLowerCase()
                  .includes(props.toString().toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow onClick={() => onClickRow()} hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.field]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
