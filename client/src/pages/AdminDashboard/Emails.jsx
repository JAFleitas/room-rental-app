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

export default function Emails() {
  const rows = useSelector(state => state.admin.emails)
  const navigate = useNavigate()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(5)
  const [sort, setSort] = React.useState({ sortBy: "title", order: "dsc" })
  const [currentRows, setCurrentRows] = React.useState(rows)

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
      <h2 className={styles.title}>Promotionals Emails</h2>
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
          Send email
        </button>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
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
                    onClick={() => handleChangeSort("subject")}>
                    Subject{" "}
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
                    onClick={() => handleChangeSort("title")}>
                    Title{" "}
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
                    onClick={() => handleChangeSort("message")}>
                    Message{" "}
                    <span style={{ display: "inline", padding: "5px" }}>
                      <RiSortAsc />
                    </span>
                  </button>
                </StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "95%",
                      justifyContent: "space-between",
                    }}
                    onClick={() => handleChangeSort("count")}>
                    Count{" "}
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
                    onClick={() => handleChangeSort("segment")}>
                    Segment{" "}
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
                    onClick={() => handleChangeSort("date")}>
                    Date{" "}
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
                          {row.subject}
                          <button
                            style={{
                              backgroundColor: "#64075cdd",
                              color: "white",
                              padding: "5px",
                              borderRadius: "7px",
                              marginTop: "5px",
                              display: "block",
                            }}
                            onClick={() => navigate(`resend/${row.id}`)}>
                            Resend
                          </button>
                        </StyledTableCell>
                        <StyledTableCell>{row.title}</StyledTableCell>
                        <StyledTableCell>
                          {row.message?.length > 170
                            ? row.message.substring(0, 70) +
                              "..." +
                              row.message.substring(row.message.length - 10)
                            : row.message}
                        </StyledTableCell>
                        <StyledTableCell>
                          <img style={{ maxWidth: "130px" }} src={row.image} />
                        </StyledTableCell>
                        <StyledTableCell>{row.count}</StyledTableCell>
                        <StyledTableCell>{row.segment}</StyledTableCell>
                        <StyledTableCell>
                          {row.createdAt?.split("T")[0]}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={"7"}>
                      Aún no ha enviado emails promocionales
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
