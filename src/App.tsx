import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { Container, StyledMain } from "./components/Styled/Styled";
import Homepage from "./pages/Homepage";
import "./styles.css";
import Layout from "./components/Layout";
import PageHeader from "./components/PageHeader";

export default function App() {
  function About() {
    return (
      <div>
        <p>About</p>
      </div>
    );
  }

  function Projects() {
    return (
      <div>
        <p>Projects</p>
      </div>
    );
  }

  function Contact() {
    return (
      <div>
        <p>Contact</p>
      </div>
    );
  }

  function NoMatch() {
    return (
      <>
        <PageHeader
          children={<></>}
          headerTitle={"Nothing to see here!"}
          headerSubtitle={"🐛"}
          text={"Error: 404, no page found."}
        ></PageHeader>
        <StyledMain>
          <Link to="/">Go back to homepage</Link>
        </StyledMain>
      </>
    );
  }

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Homepage />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
}
