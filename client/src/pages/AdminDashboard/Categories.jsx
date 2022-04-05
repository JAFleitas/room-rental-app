import * as React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import TablePagination from "@mui/material/TablePagination"
import { useSelector } from "react-redux"
import { RiSortAsc } from "react-icons/ri"
import styles from "./styles.module.css"
import CircularProgress from "@mui/material/CircularProgress"
import FormCategories from "./FormCategories"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

export default function Categories() {
  const rows = useSelector(state => state.categories)
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [sort, setSort] = React.useState({ sortBy: "name", order: "asc" })
  const [currentRows, setCurrentRows] = React.useState(rows)
  const [showForm, setShowForm] = React.useState(false)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleChangeSort = value => {
    let newSort

    if (sort.sortBy === value) {
      newSort = { ...sort, order: sort.order === "asc" ? "dsc" : "asc" }
    } else {
      newSort = { ...sort, sortBy: value }
    }

    setSort(newSort)

    if (rows && rows.length) {
      // console.log({ rows })
      let sorterRows =
        newSort.order === "asc"
          ? rows.sort((a, b) =>
              (a[newSort.sortBy] + "").localeCompare(b[newSort.sortBy] + ""),
            )
          : rows.sort((a, b) =>
              (b[newSort.sortBy] + "").localeCompare(a[newSort.sortBy] + ""),
            )

      setCurrentRows(sorterRows)
    }
  }

  React.useEffect(() => {
    if (rows) {
      let sorterRows =
        sort.order === "asc"
          ? rows.sort((a, b) =>
              (a[sort.sortBy] + "").localeCompare(b[sort.sortBy] + ""),
            )
          : rows.sort((a, b) =>
              (b[sort.sortBy] + "").localeCompare(a[sort.sortBy] + ""),
            )
      setCurrentRows(sorterRows)
    }
  }, [rows])

  return (
    <div style={{ margin: "1rem" }}>
      <h2 className={styles.title}>Property Categories</h2>
      {/* Aquí iria un form para crear categorías */}
      <button
        style={{
          backgroundColor: "#64075cdd",
          color: "white",
          padding: "5px",
          borderRadius: "7px",
          margin: "1rem",
        }}
        onClick={() => setShowForm(!showForm)}>
        {showForm ? "Close form" : "Add category"}
      </button>
      <FormCategories show={showForm} />
      <Paper
        sx={{ width: "95%", overflow: "hidden", maxWidth: 500, mx: "auto" }}>
        <TableContainer sx={{ maxWidth: 500 }}>
          <Table sx={{ maxWidth: 500 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "95%",
                      justifyContent: "space-between",
                    }}
                    onClick={() => handleChangeSort("id")}>
                    ID
                    <span style={{ display: "inline", padding: "5px" }}>
                      <RiSortAsc />
                    </span>
                  </button>
                </StyledTableCell>
                <StyledTableCell>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "95%",
                      justifyContent: "space-between",
                    }}
                    onClick={() => handleChangeSort("name")}>
                    Name{" "}
                    <span style={{ display: "inline", padding: "5px" }}>
                      <RiSortAsc />
                    </span>
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {currentRows ? (
                currentRows?.length > 0 ? (
                  currentRows
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage,
                    )
                    ?.map(row => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell>
                          {row.id.substring(0, 5)}
                        </StyledTableCell>
                        <StyledTableCell>{row.name}</StyledTableCell>
                      </StyledTableRow>
                    ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={"7"}>
                      Aún no tiene categorías cargadas
                    </StyledTableCell>
                  </StyledTableRow>
                )
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={"7"}>
                    <div style={{ display: "flex" }}>
                      <CircularProgress />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[3, 5, 10, 25]}
          component="div"
          count={rows?.length || 1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
