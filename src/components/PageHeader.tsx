import React from "react";
import Divider from "./Divider";
import { Header1, Header2, StyledPageHeader, StyledText } from "./Styled/Styled";

interface IPageHeader {
    headerTitle: string;
    headerSubtitle: string;
    text: string;
    children: JSX.Element
}
export default function PageHeader ({children, headerTitle, headerSubtitle, text}: IPageHeader): JSX.Element {
    return (
    <StyledPageHeader>
        <div>
        <Header1>{headerTitle}</Header1>
        <Header2>{headerSubtitle}</Header2>
        <Divider size={""} />
        <StyledText>{text}</StyledText>
        </div>
        {children}
    </StyledPageHeader>
    )
}