import Footer from "./components/Footer/Footer";
import { Container, StyledButton, StyledCard, StyledListItem, StyledMain, Theme, Wrapper } from "./components/Styled/Styled";
import "./styles.css";

export default function App() {
 

  interface ICardProps {
    title: string;
    text: string;
    buttonText: string; 
  }

  function Card({ title, text, buttonText }: ICardProps) {
    return (
      <StyledCard>
        <h3>{title}</h3>
        <p>{text}</p>
        <StyledButton onClick={(e)=>{
          console.log('Go to', title)
        }}>{buttonText}</StyledButton>
      </StyledCard>
    );
  }

  return (
    <Container>
      <nav>
        <div>Home</div>
        <ul>
          <StyledListItem>Projects</StyledListItem>
          <StyledListItem>About</StyledListItem>
        </ul>
      </nav>
      <header>
        <h1>Welcome to JJ Creations</h1>
        <h2>Where creativity thrives</h2>
      </header>
      <Wrapper>
      <StyledMain>
        <Card title="Coding" text="Things I have been working on" buttonText="Go to coding"/>
        <Card title="3D" text="Things I have been working on" buttonText="Check out 3d"/>
        <Card title="About" text="Want to know more about me?" buttonText="All about me" />
        <Card title="Contact" text="Want to know more about me?" buttonText="Get in Contact" />
      </StyledMain>
      </Wrapper>
      <Footer />
    </Container>
  );
}
