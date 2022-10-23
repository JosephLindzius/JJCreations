import react from "react";
import Divider from "./Divider";
import Image from "./Image";
import { Header3, StyledButton, StyledCard, StyledText } from "./Styled/Styled";

  interface ICardProps {
    title: string;
    text: string;
    buttonText: string;
    imgSource: string; 
  }
 
export default function Card({ title, text, buttonText, imgSource }: ICardProps) {
  return (
      <StyledCard>
        <Header3>{title}</Header3>
        <Divider size="default" />
        <Image imgSource={imgSource} altTag="random generated picture" boxShadow={true} />
        <StyledText>{text}</StyledText>
        <StyledButton type="button" onClick={(e)=>{
          console.log('Go to', title)
        }}>{buttonText}</StyledButton>
      </StyledCard>
    );
  }