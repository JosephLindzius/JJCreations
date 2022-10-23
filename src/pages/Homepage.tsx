import React from "react";
import Card from "../components/Card";
import Divider from "../components/Divider";
import PageHeader from "../components/PageHeader";
import { Colors, StyledMain, Wrapper } from "../components/Styled/Styled";
import Video from "../components/Video";

export default function Homepage(): JSX.Element {

    const cards = [
        //<Card key="Blog" title="Blog" text="Learning in public" buttonText="Read my thoughts" imgSource="https://i.picsum.photos/id/63/200/200.jpg?hmac=qWHuiJWhQdWUspXyFKWgfsomzV1IvMNFZQ0hlDl8RZc" link="/blog" />,
        <Card key="Coding" title="Coding" text="Things I have been working on" buttonText="Go to coding" imgSource="https://i.picsum.photos/id/1/200/200.jpg?hmac=jZB9EZ0Vtzq-BZSmo7JKBBKJLW46nntxq79VMkCiBG8" link="/coding" />,
        //<Card key="3D" title="3D" text="Blender and VR/AR" buttonText="Check out 3d" imgSource="https://i.picsum.photos/id/56/200/200.jpg?hmac=rRTTTvbR4tHiWX7-kXoRxkV7ix62g9Re_xUvh4o47jA" link="/3d" />,
        //<Card key="Music" title="Music" text="Digitally composed music" buttonText="Listen to music" imgSource="https://i.picsum.photos/id/304/200/200.jpg?hmac=wUyrHtgxEUGI9l-Dt3YghuHz9rF1c8EzNtn8yHxzpcA" link="/music" />,
        //<Card key="News" title="News" text="News stories to read" buttonText="Read all about it" imgSource="https://i.picsum.photos/id/513/200/200.jpg?hmac=xMRZhdrttvlfIvOf0Qm9J4texbmA0HS2pBNVM-Pho-U" link="news" />,
        <Card key="About" title="About" text="Want to know more about me?" buttonText="All about me" imgSource="https://i.picsum.photos/id/662/200/200.jpg?hmac=LdYzwSk5Qj10-4AVlHBneunSCcoSnwW8D2qHz-GD2U8" link="/about" />,
        <Card key="Contact" title="Contact" text="Feel free to send me a message" buttonText="Get in Contact" imgSource="https://i.picsum.photos/id/528/200/200.jpg?hmac=PsanXgBpbVkZomXAZNZvSK7VAIwkqbc0O9EMxtlgO_8" link="/contact" />
    ]

    return (
        <>
            <PageHeader headerTitle="Welcome to JJ&nbsp;Creations" headerSubtitle="Where creativity thrives" text="Thanks for visiting today, I hope you enjoy your time exploring this site" children={<iframe src="./shaders/index.html"></iframe>} />
            <Wrapper bgColor={Colors.deepJungleGreen}>
                <StyledMain>
                    {cards.map(card=>card)}
                </StyledMain>
            </Wrapper>
       </>
    )
}