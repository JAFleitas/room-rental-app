import React from "react"
import {
  ContainerDiv,
  TeamMate,
  Name,
  LinkedIn,
  GitHub,
  TeamMateImage,
  LastTeamMate,
} from "./styled"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import ThiagoImage from "../../assets/Thiago.jpg"
import Gonzalo from "../../assets/Gonzalo.jpg"
import Facundo from "../../assets/Facundo.jpg"
import Bertha from "../../assets/Bertha.jpg"
import Luis from "../../assets/Luis.jpg"
import Nicolas from "../../assets/Nicolas.jpg"
import Viviana from "../../assets/Viviana.jpg"

export default function AboutUs() {
  return (
    <ContainerDiv>
      <TeamMate>
        <TeamMateImage src={ThiagoImage} />
        <Name>Thiago D'Alessandro</Name>
        <LinkedIn
          href="https://www.linkedin.com/in/thiagodalessandro/"
          target="_blank">
          <BsLinkedin />
        </LinkedIn>
        <GitHub href="https://github.com/Thdalessa" target="_blank">
          <BsGithub />
        </GitHub>
      </TeamMate>
      <TeamMate>
        <TeamMateImage src={Gonzalo} />
        <Name>Gonzalo Fleitas</Name>
        <LinkedIn
          href="https://www.linkedin.com/in/fleitas-gonzalo/"
          target="_blank">
          <BsLinkedin />
        </LinkedIn>
        <GitHub href="https://github.com/JAFleitas/" target="_blank">
          <BsGithub />
        </GitHub>
      </TeamMate>
      <TeamMate>
        <TeamMateImage src={Facundo} />
        <Name>Facundo Sanchez</Name>
        <LinkedIn
          href="https://www.linkedin.com/in/facundo-sanchez-375492219/"
          target="_blank">
          <BsLinkedin />
        </LinkedIn>
        <GitHub href="https://github.com/facundo9963" target="_blank">
          <BsGithub />
        </GitHub>
      </TeamMate>

      <TeamMate>
        <TeamMateImage src={Luis} />
        <Name>Luis Peláez</Name>
        <LinkedIn
          href="https://www.linkedin.com/in/luis-pelaez-vargas/"
          target="_blank">
          <BsLinkedin />
        </LinkedIn>
        <GitHub
          href="https://www.linkedin.com/in/luis-pelaez-vargas/"
          target="_blank">
          <BsGithub />
        </GitHub>
      </TeamMate>
      <TeamMate>
        <TeamMateImage src={Nicolas} />
        <Name>Nicolas Blaksley</Name>
        <LinkedIn
          href="https://www.linkedin.com/in/nicolasblaksley-dev/"
          target="_blank">
          <BsLinkedin />
        </LinkedIn>
        <GitHub href="https://github.com/blaksleyn" target="_blank">
          <BsGithub />
        </GitHub>
      </TeamMate>
      <TeamMate>
        <TeamMateImage src={Viviana} />
        <Name>Viviana Calva</Name>
        <LinkedIn
          href="https://www.linkedin.com/in/viviana-calva/"
          target="_blank">
          <BsLinkedin />
        </LinkedIn>
        <GitHub href="https://github.com/Codaya007" target="_blank">
          <BsGithub />
        </GitHub>
      </TeamMate>
      <LastTeamMate>
        <TeamMateImage src={Bertha} />
        <Name>Bertha Alicia Ramirez Mora</Name>
        <LinkedIn
          href="https://www.linkedin.com/in/bertha-alicia-ramirez-mora-9645911a3/ "
          target="_blank">
          <BsLinkedin />
        </LinkedIn>
        <GitHub href="https://github.com/alibertiux" target="_blank">
          <BsGithub />
        </GitHub>
      </LastTeamMate>
    </ContainerDiv>
  )
}
