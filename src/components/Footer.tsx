import React from "react";
import SocialMedia from "./SocialMedia";
import { StyledButton, StyledText, Header6, StyledFooter, Wrapper, Colors } from "./Styled/Styled";

function SupportButton (){
  return <StyledButton>Support</StyledButton>
}
export default function Footer() {
  return (
    <StyledFooter>
      <SupportButton/>
      <Header6>Created by:</Header6>
      <StyledText>Joseph John Lindzius</StyledText>
      <Wrapper bgColor={Colors.oliveGreen}>
        <StyledText>
          <SocialMedia brand="LinkedIn"/>
        </StyledText>
        <StyledText>
          <SocialMedia brand="Instagram"/>
        </StyledText>
        <StyledText>
          <SocialMedia brand="SoundCloud"/>
        </StyledText>
      </Wrapper>
    </StyledFooter>
  );
}
