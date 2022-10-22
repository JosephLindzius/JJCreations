import React from "react";
import { StyledButton, StyledText, Header6, StyledFooter } from "./Styled/Styled";

function SupportButton (){
  return <StyledButton>Support</StyledButton>
}
export default function Footer() {
  return (
    <StyledFooter>
      <SupportButton/>
      <Header6>Created by:</Header6>
      <StyledText>Joseph John Lindzius</StyledText>
    </StyledFooter>
  );
}
