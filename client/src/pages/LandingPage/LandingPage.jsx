import React, { useEffect } from "react"
import {
  WelcomeTitle,
  PageContainer,
  WelcomeSubtitle,
  WelcomeDesignContainer,
  Design,
  WelcomeText,
  LittleImageContainer,
  ToHome,
  ButtonContainer,
  Image,
} from "./styled"
import design from "../../assets/designWelcome.png"
import image1 from "../../assets/Background-images/bckgr01.jpg"
import image2 from "../../assets/Background-images/bckgr02.jpg"
import image3 from "../../assets/Background-images/bckgr03.jpg"
import image4 from "../../assets/Background-images/bckgr04.jpg"
import image5 from "../../assets/Background-images/bckgr05.jpg"
import image6 from "../../assets/Background-images/bckgr06.jpg"
import image7 from "../../assets/Background-images/bckgr07.jpg"
import image8 from "../../assets/Background-images/bckgr08.jpg"

export default function LandingPage() {
  useEffect(() => {
    return () => {
      window.scroll(0, 0)
    }
  })
  return (
    <PageContainer>
      <WelcomeTitle>We are Rental App</WelcomeTitle>
      <WelcomeSubtitle>
        A web page designed as a final project for HENRY's Bootcamp.
      </WelcomeSubtitle>
      <WelcomeDesignContainer>
        <Design src={design} />
      </WelcomeDesignContainer>
      <WelcomeText>
        The mission of the project is to offer a platform to rent gorgeous
        properties with tourist purposes. Be part of the experience publishing
        properties as a host, renting wonderful places, and many other fantastic
        functionalities.
      </WelcomeText>
      <LittleImageContainer column="1/5" row="10/16">
        <Image src={image1} />
      </LittleImageContainer>
      <LittleImageContainer column="1/6" row="4/10">
        <Image src={image5} />
      </LittleImageContainer>
      <LittleImageContainer column="6/10" row="4/9">
        <Image src={image6} />
      </LittleImageContainer>
      <LittleImageContainer column="6/11" row="9/17">
        <Image src={image3} />
      </LittleImageContainer>
      <LittleImageContainer column="1/5" row="16/21">
        <Image src={image7} />
      </LittleImageContainer>
      <LittleImageContainer column="7/11" row="18/21">
        <Image src={image4} />
      </LittleImageContainer>
      <ButtonContainer>
        <ToHome to={"/home"}>Home</ToHome>
      </ButtonContainer>
    </PageContainer>
  )
}
