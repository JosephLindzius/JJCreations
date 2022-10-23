import React from 'react'
import { BrandDiv, StyledListItem, StyledNavigation } from './Styled/Styled'

export default function Navigation (){
    return(
      <StyledNavigation>
            <BrandDiv>Home</BrandDiv>
            <ul>
            <StyledListItem>
                <a href="">Projects</a>
            </StyledListItem>
            <StyledListItem>
                <a href="">About</a>
            </StyledListItem>
            <StyledListItem>
                <a href="">Contact</a>
            </StyledListItem>
            </ul>
      </StyledNavigation>
    )
}