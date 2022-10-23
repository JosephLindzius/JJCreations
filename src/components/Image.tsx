import React from "react";
import { StyledImage } from "./Styled/Styled";

interface IImage {
    imgSource: string;
    altTag: string;
    boxShadow: boolean;
    size?: {
        height: number,
        width: number,
    }
  }
  
export default function Image({imgSource, altTag, boxShadow, size}: IImage): JSX.Element {
    return (
        <>
            <StyledImage height={size?.height} width={size?.width} src={imgSource} alt={altTag} boxShadow={boxShadow}></StyledImage>
        </>
    )   
}