import styled from "styled-components";

export type TColors = {
  tartOrange: string;
  pacificBlue:string;
  metallicSeaweed: string
  orangeYellowCrayola: string;
  gainsBoro: string;
  ghostWhite: string;
  raisinBlack: string;
  deepJungleGreen: string;
  oliveGreen: string;
};

export const Colors: TColors = {
  tartOrange: '#fe4a49ff',
  pacificBlue: " #2ab7caff",
  orangeYellowCrayola: "#fed766ff",
  gainsBoro: "#e6e6eaff",
  ghostWhite: "#f4f4f8ff",
  raisinBlack: "#30292f",
  deepJungleGreen: "#08605f",
  metallicSeaweed: "#177e89",
  oliveGreen: "#a2ad59"
}

export const Container = styled.div`
 
`
interface IStyledDivider {
  size: string;
}

export const StyledDivider = styled.hr<IStyledDivider>`
  height: ${(p) => {
    if (p.size == "large") return '5rem;'
    return '0.2rem';
  }};
  margin: 0.1rem 0 0.5rem 0;
  border: none;
  background-color: ${Colors.tartOrange}
`
export const StyledMain = styled.main`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem; 
  width: 100%; 
  padding: 2rem;
`
export const StyledNavigation = styled.nav`
  position: sticky;
  left: 0;
  top: 0;
  display: flex;
  height: 80px;
  padding: 0.5rem;
  background: ${Colors.gainsBoro};
  border-bottom: solid 1px ${Colors.pacificBlue};
` 

export const Header1 = styled.h1`
  font-size: 2.5rem;
`;

export const Header2 = styled.h2`
 
`;

export const Header3 = styled.h3`
 
`;

export const StyledPageHeader = styled.header`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2rem 1rem 4rem 1rem;
`;

export const StyledCard = styled.section`

  padding: 1rem;
  background-color: ${Colors.ghostWhite};
  border-radius: 2px;
  height: auto;
  max-width: 300px;
  border: 1px solid ${Colors.pacificBlue};`

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${Colors.oliveGreen};
  padding: 1rem;
`;


export const StyledButton = styled.button`
  background: ${Colors.gainsBoro};
  padding: 1em;
  margin: 1em 0;
  border: 0;
  box-shadow: 0 0 1px 2px ${Colors.gainsBoro};
  border-radius: 4px;
  &:hover {
    transition: 0.4s;
    background-color: ${Colors.orangeYellowCrayola}
  }
  &:active {
  transition: 0.1s ease-in;
  background-color: ${Colors.orangeYellowCrayola};
  transform: translateY(1px);
  }
`

export const Header6 = styled.h6`
  font-size: 1em;
`;

interface IWrapper {
  bgColor: string
}
export const Wrapper = styled.section<IWrapper>`
  display: flex;
  gap: 10px;
  width: auto;
  background-color: ${p => p.bgColor};
`;

export const StyledText = styled.p`
  margin: 0.5rem 0 1rem;
`;

export const StyledListItem = styled.li`
list-style: none;
`

export const BrandDiv = styled.div`
  flex-grow: 1;
`
interface IStyledImage {
  boxShadow: boolean;
}
export const StyledImage = styled.img<IStyledImage>`
  box-shadow: ${(p)=> {
    if (p.boxShadow){return `60px 30px 1px 4px ${Colors.gainsBoro}`}}};
    margin-bottom: ${(p)=> {
      if (p.boxShadow){return `30px;`}}};
      
`
