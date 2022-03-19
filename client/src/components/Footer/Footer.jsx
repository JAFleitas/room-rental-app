/*
import {
  FooterDiv,
  SubDiv,
  SubDivFinal,
  TeamName,
  LinkGithubProject,
  FooterOptions,
} from "./styled"
import { BsGithub } from "react-icons/bs"

export default function Footer() {
  return (
    <FooterDiv>
      <SubDiv>
        <FooterOptions href="#">About Rental App</FooterOptions>
      </SubDiv>
      <SubDiv>
        <FooterOptions href="#">Try Hosting</FooterOptions>
      </SubDiv>
      <SubDivFinal>
      //  Aca podriamos poner un Link a una subpagina con la info de todos los integrantes 
        <TeamName to="/about-us">© Rental App Team</TeamName>
        <LinkGithubProject
          href="https://github.com/JAFleitas/room-rental-app"
          target="_blank">
          <BsGithub />
        </LinkGithubProject>
      </SubDivFinal>
    </FooterDiv>
  )
} */
import { Link } from "react-router-dom"
import {
  Container,
  SubWrapper,
  Wrapper,
  Card,
  CardTitle,
  CardLink,
  LinkGithubProject,
} from "./styled"

export default function Footer() {
  return (
    <Container>
      <SubWrapper>
        <Wrapper>
          <Card>
            <CardTitle>ABOUT US</CardTitle>
            <CardLink>Story</CardLink>
            <CardLink>Clients</CardLink>
            <CardLink>Testimonial</CardLink>
            <Link to={"/about-us"}>
              <CardLink>Our Team</CardLink>
            </Link>
          </Card>
          <Card>
            <CardTitle>SERVICES</CardTitle>
            <CardLink>Marketing</CardLink>
            <CardLink>Consulting</CardLink>
            <CardLink>Development</CardLink>
            <CardLink>Design</CardLink>
          </Card>
          
          <Card>
            <CardTitle>SOCIAL</CardTitle>
            <CardLink>Facebook</CardLink>
            <CardLink>Instagram</CardLink>
            <CardLink>
              <LinkGithubProject href="https://github.com/JAFleitas/room-rental-app">
                Github
              </LinkGithubProject>
            </CardLink>
            <CardLink>Twitter</CardLink>
          </Card>
        </Wrapper>
      </SubWrapper>
    </Container>
  )
}
