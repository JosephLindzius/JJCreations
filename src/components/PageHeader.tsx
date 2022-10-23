import React from "react";
import Divider from "./Divider";
import { Header1, Header2, StyledPageHeader, StyledText } from "./Styled/Styled";

interface IPageHeader {
    headerTitle: string;
    headerSubtitle: string;
    text: string;
}
export default function PageHeader ({headerTitle, headerSubtitle, text}: IPageHeader){
    return (
    <StyledPageHeader>
        <Header1>{headerTitle}</Header1>
        <Header2>{headerSubtitle}</Header2>
        <Divider size={""} />
        <StyledText>{text}</StyledText>
    </StyledPageHeader>
    )
}