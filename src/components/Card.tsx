import react from "react";
import { StyledButton, StyledCard } from "./Styled/Styled";

  interface ICardProps {
    title: string;
    text: string;
    buttonText: string; 
  }


 
export default function Card({ title, text, buttonText }: ICardProps) {

    function Image(){
       return (<>
        <img src="https://i.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY"></img>
        </>
       ) 
    }
    return (
      <StyledCard>
        <h3>{title}</h3>
        <Image />
        <p>{text}</p>
        <StyledButton type="button" onClick={(e)=>{
          console.log('Go to', title)
        }}>{buttonText}</StyledButton>
      </StyledCard>
    );
  }