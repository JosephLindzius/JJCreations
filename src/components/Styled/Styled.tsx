import styled from "styled-components";

export type TColors = {
  tartOrange: string;
  pacificBlue:string;
  orangeYellowCrayola: string;
  gainsBoro: string;
  ghostWhite: string;
  raisinBlack: string;
  deepJungleGreen: string;
};

export const Colors: TColors = {
  tartOrange: '#fe4a49ff',
  pacificBlue: " #2ab7caff",
  orangeYellowCrayola: "#fed766ff",
  gainsBoro: "#e6e6eaff",
  ghostWhite: "#f4f4f8ff",
  raisinBlack: "#30292f",
  deepJungleGreen: "#08605f"
}

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.gainsBoro};
`
export const StyledMain = styled.main`
  display: grid; 
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 5rem; 
  width: 100%; 
padding: 2rem;
`

export const Header1 = styled.h1`
  font-size: 2.5rem;
`;

export const Header2 = styled.h2`
 
`;

export const StyledPageHeader = styled.header`
  margin: 2.5rem 0 2.5rem; 1rem;
`;

export const StyledCard = styled.section`
  margin: 0.5rem;
  padding: 1rem;
  background: ${Colors.ghostWhite};
  border-radius: 2px;
  height: auto;
  border: 1px solid ${Colors.pacificBlue}; 
`

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${Colors.pacificBlue};
  text-align: center;
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
  text-align: center;
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  width: auto;
  background: ${Colors.deepJungleGreen};
`;

export const StyledText = styled.p`

`;

export const StyledListItem = styled.li`
list-style: none;
`