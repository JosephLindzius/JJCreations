import React from "react";
import { StyledDivider } from "./Styled/Styled";

interface IDividerProps {
    size: string;
}
export default function Divider({size}: IDividerProps){
    return(
        <StyledDivider size={size} />
    )
}