import React from "react"
import {
  ContainerDiv,
  TeamMate,
  Name,
  LinkedIn,
  GitHub,
  TeamMateImage,
} from "./styled"
import { BsLinkedin, BsGithub } from "react-icons/bs"
import ThiagoImage from "../../assets/Thiago_Image.png"

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
    </ContainerDiv>
  )
}
