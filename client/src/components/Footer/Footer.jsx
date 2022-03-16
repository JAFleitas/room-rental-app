import React from "react"
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
        {/* Aca podriamos poner un Link a una subpagina con la info de todos los integrantes */}
        <TeamName href="#">© Rental App Team</TeamName>
        <LinkGithubProject
          href="https://github.com/JAFleitas/room-rental-app"
          target="_blank">
          <BsGithub />
        </LinkGithubProject>
      </SubDivFinal>
    </FooterDiv>
  )
}
