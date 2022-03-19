import styled from "styled-components"
/* import { Link } from "react-router-dom"

export const FooterDiv = styled.footer`
  height: 25vh;
  width: 100%;
  background-color: #e8c1ff;
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
` */
export const LinkGithubProject = styled.a`
  text-decoration: none;
`

export const Container = styled.div`
  color: #e9e0e0ee;
  background-color: #0f1111;
  padding-top: 15px;
  padding-bottom: 15px;
`

export const SubWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(210px, 1000px);
  justify-content: center;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, auto));
`

export const Card = styled.ul`
  display: flex;
  flex-direction: column;
  justify-self: end;
  margin: 20px;
  width: 130px;
`
export const CardTitle = styled.h1`
  margin-bottom: 10px;
`
export const CardLink = styled.li`
  list-style-type: none;
  cursor: pointer;
  padding: 5px;
  transition: all 0.5s ease;
  :hover {
    padding-left: 15px;
    color: #e9e0e0ee;
  }
`
