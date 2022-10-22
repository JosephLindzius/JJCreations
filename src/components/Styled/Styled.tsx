import styled from "styled-components";

export type TTheme = {
  tartOrange: string;
  pacificBlue:string;
  orangeYellowCrayola: string;
  gainsBoro: string;
  ghostWhite: string;
  raisinBlack: string;
};

export const Theme: TTheme = {
  tartOrange: '#fe4a49ff',
  pacificBlue: " #2ab7caff",
  orangeYellowCrayola: "#fed766ff",
  gainsBoro: "#e6e6eaff",
  ghostWhite: "#f4f4f8ff",
  raisinBlack: "#30292f"
}

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${Theme.gainsBoro};
`
export const StyledMain = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 2rem 0;
`

export const Header1 = styled.h1`
  
`;

export const StyledCard = styled.section`
  margin: 0.5rem;
  padding: 1rem;
  background: ${Theme.ghostWhite};
  border-radius: 2px;
  height: 200px;
`

export const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${Theme.pacificBlue};
  text-align: center;
`;


export const StyledButton = styled.button`
  background: ${Theme.gainsBoro};
  padding: 1em;
  margin-top: 1em;
  border: 0;
  box-shadow: 0 0 1px 2px ${Theme.gainsBoro};
  border-radius: 4px;
  &:hover {
    transition: 0.4s;
    background-color: ${Theme.orangeYellowCrayola}
  }
  &:active {
  transition: 0.1s ease-in;
  background-color: ${Theme.orangeYellowCrayola};
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
  background: ${Theme.tartOrange};
`;

export const StyledText = styled.p`

`;

export const StyledListItem = styled.li`
list-style: none;
`