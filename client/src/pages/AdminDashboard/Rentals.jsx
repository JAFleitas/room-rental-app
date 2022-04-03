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
import { useNavigate } from "react-router-dom"
import styles from "./styles.module.css"
import CircularProgress from "@mui/material/CircularProgress"

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

export default function Rentals() {
  const rows = useSelector(state => state.propertyRentals)
  const navigate = useNavigate()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [sort, setSort] = React.useState({ sortBy: "type", order: "asc" })
  const [currentRows, setCurrentRows] = React.useState(rows)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleSortNestedProps = (prop1, prop2 = null, direction = 'asc') => (e1, e2) => {
    const a = prop2 ? e1[prop1][prop2] : e1[prop1],
        b = prop2 ? e2[prop1][prop2] : e2[prop1],
        sortOrder = direction === "asc" ? 1 : -1
    return (a < b) ? -sortOrder : (a > b) ? sortOrder : 0;
}

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleChangeSort = value => {
    var newSort

    if (sort.sortBy === value) {
      newSort = { ...sort, order: sort.order === "asc" ? "dsc" : "asc" }
    } else {
      newSort = { ...sort, sortBy: value }
    }

    setSort(newSort)

    if(rows && rows.length && value === "user.name"){
      // console.log(rows);

      let sorterRows = rows.sort(handleSortNestedProps("user", "name", newSort.order));

      setCurrentRows(sorterRows)
    } else if(rows && rows.length && value === "property.name"){
      // console.log(rows);

      let sorterRows = rows.sort(handleSortNestedProps("property", "name", newSort.order));

      setCurrentRows(sorterRows)
    } else if(rows && rows.length && value === "property.location"){
      // console.log(rows);

      let sorterRows = rows.sort(handleSortNestedProps("property", "location", newSort.order));

      setCurrentRows(sorterRows)
    }
    else if (rows && rows.length && rows[0].user.name) {
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
      <h2 className={styles.title}>Rentals</h2>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Photo</StyledTableCell>
                <StyledTableCell>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "95%",
                      justifyContent: "space-between",
                    }}
                    onClick={() => handleChangeSort("user.name")}>
                    Lessor Name{" "}
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
                    onClick={() => handleChangeSort("property.name")}>
                    Property Name{" "}
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
                    onClick={() => handleChangeSort("property.location")}>
                    Location{" "}
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
                    onClick={() => handleChangeSort("start_date")}>
                    Start Date{" "}
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
                    onClick={() => handleChangeSort("final_date")}>
                    Final Date{" "}
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
                    onClick={() => handleChangeSort("final_price")}>
                    Final Price{" "}
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
                    onClick={() => handleChangeSort("status")}>
                    Status{" "}
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
                          <img
                            style={{ width: "55px", borderRadius: "50%" }}
                            src={row.property.image[0]}
                            alt={row.property.name}
                          />
                        </StyledTableCell>
                        <StyledTableCell>{row.user.name}</StyledTableCell>
                        <StyledTableCell>{row.property.name}</StyledTableCell>
                        <StyledTableCell>
                          {row.property.location}
                        </StyledTableCell>
                        <StyledTableCell>{row.start_date}</StyledTableCell>
                        <StyledTableCell>{row.final_date}</StyledTableCell>
                        <StyledTableCell>{row.final_price}</StyledTableCell>
                        <StyledTableCell>{row.status}</StyledTableCell>
                      </StyledTableRow>
                    ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={"8"}>
                      You don't have rental history yet
                    </StyledTableCell>
                  </StyledTableRow>
                )
              ) : (
                <StyledTableRow>
                  <StyledTableCell colSpan={"8"}>
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