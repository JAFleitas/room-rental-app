import * as React from "react"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material"
import RentalCard from "./RentalCard"
export default function AllRentalCard() {
  return (
    <Grid container spacing={2}>
        <Grid item >
            <RentalCard
            />
        </Grid>
        <Grid item >
            <RentalCard
            />
        </Grid>
        <Grid item >
            <RentalCard
            />
        </Grid>
        <Grid item >
            <RentalCard
            />
        </Grid>
    </Grid>

    
  )
}
