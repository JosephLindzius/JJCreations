import Card from "./components/Card";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import { Container, StyledListItem, StyledMain, Wrapper } from "./components/Styled/Styled";
import "./styles.css";

export default function App() {
  return (
    <Container>
      <nav>
        <div>Home</div>
        <ul>
          <StyledListItem>Projects</StyledListItem>
          <StyledListItem>About</StyledListItem>
        </ul>
      </nav>
      <PageHeader />
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
