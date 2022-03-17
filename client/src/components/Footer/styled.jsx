import styled from "styled-components"
import { Link } from "react-router-dom"

export const FooterDiv = styled.footer`
  height: 25vh;
  width: 100vw;
  background-color: #e8c1ff;

  position: fixed;
  bottom: 0px;
`

export const SubDiv = styled.div`
  height: 30%;
  width: 95%;
  margin-left: 2.5vw;
  border-bottom: 2px #e0aaff solid;
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const SubDivFinal = styled.div`
  height: 40%;
  width: 95%;
  margin-left: 2.5vw;
  padding-top: 10px;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const TeamName = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  padding: 8px;
  border-radius: 10px;

  &:hover {
    background-color: #e0aaff;
  }
`

export const LinkGithubProject = styled.a`
  text-decoration: none;
  font-size: 35px;
  padding: 8px;
  border-radius: 10px;

  &:hover {
    background-color: #e0aaff;
  }
`

export const FooterOptions = styled.a`
  text-decoration: none;
  font-size: 22px;
  font-weight: 500;
  padding: 3px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 10px;

  &:hover {
    background-color: #e0aaff;
  }
`
