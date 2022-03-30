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

export default function Users() {
  const rows = useSelector(state => state.admin.users)
  const navigate = useNavigate()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(3)
  const [sort, setSort] = React.useState({ sortBy: "type", order: "asc" })
  const [currentRows, setCurrentRows] = React.useState(rows)

  const handleChangePage = (_, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleChangeSort = value => {
    let newSort;

    if (sort.sortBy === value) {
      newSort = { ...sort, order: sort.order === "asc" ? "dsc" : "asc" };
    }else{
      newSort = { ...sort, sortBy: value };
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

  return (
    <div style={{ margin: "1rem" }}>
      <h2>Users</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}>
        <button
          style={{
            backgroundColor: "#64075cdd",
            color: "white",
            padding: "5px",
            borderRadius: "7px",
            margin: "1rem",
          }}
          onClick={() => navigate("create")}>
          Create subadmin
        </button>
      </div>
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
                    onClick={() => handleChangeSort("name")}>
                    Name{" "}
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
                    onClick={() => handleChangeSort("lastname")}>
                    Lastname{" "}
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
                    onClick={() => handleChangeSort("country")}>
                    Country{" "}
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
                    onClick={() => handleChangeSort("email")}>
                    Email{" "}
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
                    onClick={() => handleChangeSort("type")}>
                    Privileges{" "}
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
                    onClick={() => handleChangeSort("blocked")}>
                    Blocked{" "}
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
                    onClick={() => handleChangeSort("createdAt")}>
                    Desde{" "}
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
                            src={row.photo}
                            alt={row.name}
                          />
                          <button
                            style={{
                              backgroundColor: "#64075cdd",
                              color: "white",
                              padding: "5px",
                              borderRadius: "7px",
                              marginTop: "5px",
                            }}
                            onClick={() => navigate(`resend/${row.id}`)}>
                            Resend
                          </button>
                        </StyledTableCell>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell>{row.lastname}</StyledTableCell>
                        <StyledTableCell>{row.country}</StyledTableCell>
                        <StyledTableCell>{row.email}</StyledTableCell>
                        <StyledTableCell>{row.type}</StyledTableCell>
                        <StyledTableCell>
                          {row.blocked ? "T" : "F"}
                        </StyledTableCell>
                        <StyledTableCell>{row.createdAt.split("T")[0]}</StyledTableCell>
                      </StyledTableRow>
                    ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell>
                      Aún no tiene usuarios
                    </StyledTableCell>
                  </StyledTableRow>
                )
              ) : (
                <StyledTableRow>
                  <StyledTableCell>Loading...</StyledTableCell>
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
