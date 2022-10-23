import Card from "./components/Card";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import PageHeader from "./components/PageHeader";
import { Colors, Container, StyledMain, StyledText, Wrapper } from "./components/Styled/Styled";
import "./styles.css";

export default function App() {

  return (
    <Container>
      <Navigation />
      <PageHeader headerTitle="Welcome to JJ&nbsp;Creations" headerSubtitle="Where creativity thrives" text="Thanks for visiting today, I hope you enjoy your time exploring this site"/>
      <Wrapper bgColor={Colors.deepJungleGreen}>
        <StyledMain>
          <Card title="Blog" text="Learning in public" buttonText="Read my thoughts" imgSource="https://i.picsum.photos/id/63/200/200.jpg?hmac=qWHuiJWhQdWUspXyFKWgfsomzV1IvMNFZQ0hlDl8RZc"/>
          <Card title="Coding" text="Things I have been working on" buttonText="Go to coding" imgSource="https://i.picsum.photos/id/1/200/200.jpg?hmac=jZB9EZ0Vtzq-BZSmo7JKBBKJLW46nntxq79VMkCiBG8"/>
          <Card title="3D" text="Blender and VR/AR" buttonText="Check out 3d" imgSource="https://i.picsum.photos/id/56/200/200.jpg?hmac=rRTTTvbR4tHiWX7-kXoRxkV7ix62g9Re_xUvh4o47jA"/>
          <Card title="Music" text="Digitally composed music" buttonText="Listen to music" imgSource="https://i.picsum.photos/id/304/200/200.jpg?hmac=wUyrHtgxEUGI9l-Dt3YghuHz9rF1c8EzNtn8yHxzpcA" />
          <Card title="News" text="News stories to read" buttonText="Read all about it" imgSource="https://i.picsum.photos/id/513/200/200.jpg?hmac=xMRZhdrttvlfIvOf0Qm9J4texbmA0HS2pBNVM-Pho-U" />
          <Card title="About" text="Want to know more about me?" buttonText="All about me" imgSource="https://i.picsum.photos/id/662/200/200.jpg?hmac=LdYzwSk5Qj10-4AVlHBneunSCcoSnwW8D2qHz-GD2U8" />
          <Card title="Contact" text="Feel free to send me a message" buttonText="Get in Contact" imgSource="https://i.picsum.photos/id/528/200/200.jpg?hmac=PsanXgBpbVkZomXAZNZvSK7VAIwkqbc0O9EMxtlgO_8" />
        </StyledMain>
      </Wrapper>
      <Footer />
    </Container>
  );
}
