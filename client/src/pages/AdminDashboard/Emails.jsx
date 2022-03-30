import * as React from "react"
// import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import { useSelector } from "react-redux"

export default function Emails() {
  const rows = useSelector(state => state.admin.emails);

  return (
    <div>
      <h2>Promotionals Emails</h2>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Subject</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Message</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Segment</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? (
            rows.length > 0 ? (
              rows?.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.subject}
                  </TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.message}</TableCell>
                  <TableCell align="right"><img style={{maxWidth: "150px"}} src={row.image} /></TableCell>
                  <TableCell align="right">{row.count}</TableCell>
                  <TableCell align="right">{row.segment}</TableCell>
                  <TableCell align="right">{row.createdAt?.split("T")[0]}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="right">Aún no ha enviado emails promocionales</TableCell>
              </TableRow>
            )
          ) : (
            <TableRow>
              <TableCell align="right">Loading...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
