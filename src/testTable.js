import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'

const columns = [
  { id: 'code', label: 'Код', minWidth: 100 },
  { id: 'name', label: 'Участок', minWidth: 170 },
  {
    id: 'date',
    label: 'Дата',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'coordinates',
    label: 'Координаты',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'fio',
    label: 'Ф.И.О.',
    minWidth: 170,
    align: 'right',
    //format: (value) => value.toFixed(2),
  },
]

function createData(code, name, date, coordinates, fio) {
  return { code, name, date, coordinates, fio }
}

const rows = [
  createData(
    101,
    'Сборочно-сварочный участок по изготовлению корпусов парогенераторов',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(
    102,
    'Сборочно-сварочный участок по изготовлению днищ и обечаек',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(
    103,
    'Сборочно-сварочный участок по изготовлению системы опор',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(
    104,
    'Сборочно-сварочный участок набивки и внутрикорпусных устройств',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(
    105,
    'Участок вакуумных и гидравлических испытаний парогенераторов',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(106, 'Участок гибки труб', '30.06.2022', '123-456', 'Иванов И.И.'),
  createData(107, 'Участок гибки труб', '30.06.2022', '123-456', 'Иванов И.И.'),
  createData(
    108,
    'Механический участок расточных станков',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(
    109,
    'Механический участок карусельных станков',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(
    110,
    'Механический участок средних станков',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
  createData(
    111,
    'Сборочно-сварочный участок по изготовлению обечаек парогенераторов',
    '30.06.2022',
    '123-456',
    'Петров П.П.'
  ),
]

export default function StickyHeadTable(props) {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
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
            {console.log(props)}
            {rows
              .filter((row) =>
                (row.name + row.code)
                  .toString()
                  .toLowerCase()
                  .includes(props.toString().toLowerCase())
              )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
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
