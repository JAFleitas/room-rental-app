import * as React from "react"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import { Box } from "@mui/system"

export const CustomizedButton = styled(Button)`
  background: rgb(59, 7, 55);
  background: linear-gradient(
    90deg,
    rgba(59, 7, 55, 1) 0%,
    rgba(100, 7, 92, 1) 100%
  );
  width: 30px;
  color: white;
  @media (max-width: 500px) {
    border: 1px solid black;
    width: 150px;
  }
`
export const CustomizedDiv = styled(Box)`
  background: rgb(59, 7, 55);
  background: linear-gradient(
    90deg,
    rgba(59, 7, 55, 1) 0%,
    rgba(100, 7, 92, 1) 100%
  );
  color: white;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`
