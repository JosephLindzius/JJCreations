import React from "react";
import { StyledImage } from "./Styled/Styled";

interface IImage {
    imgSource: string;
    altTag: string;
    boxShadow: boolean;
  }
  
export default function Image({imgSource, altTag, boxShadow}: IImage){
    return (
        <>
            <StyledImage src={imgSource} alt={altTag} boxShadow={boxShadow}></StyledImage>
        </>
    )   
}