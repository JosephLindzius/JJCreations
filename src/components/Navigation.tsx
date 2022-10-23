import React from 'react'
import { Link, LinkProps, Outlet, useMatch, useResolvedPath } from 'react-router-dom';
import { BrandDiv, StyledListItem, StyledNavigation } from './Styled/Styled'
import Image from './Image';

function CustomLink({ children, to, ...props }: LinkProps): JSX.Element {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && " (current)"}
      </div>
    );
  }


export default function Navigation (){
    return(
      <StyledNavigation>
            <BrandDiv><Image size={{height: 60, width: 60}} imgSource="./favicon.svg" altTag="JJ Creations Logo" boxShadow={false}></Image></BrandDiv>
            <ul>
            <StyledListItem>
                <CustomLink to="/">Home</CustomLink>
            </StyledListItem>
            <StyledListItem>
                <CustomLink to="/projects">Projects</CustomLink>    
            </StyledListItem>
            <StyledListItem>
                <CustomLink to="/contact">Contact</CustomLink>
            </StyledListItem>
            </ul>
      </StyledNavigation>
    )
}