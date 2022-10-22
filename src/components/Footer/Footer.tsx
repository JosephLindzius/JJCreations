import React from "react";
import "./Footer.css";
import styled from "styled-components";

const TomatoButton = styled.button`
  background: tomato;
  color: white;
`

const Title = styled.h6`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 0.5em;
  background: papayawhip;
`;

const Text = styled.p`
  color: white;
`;

function SupportButton (){
  return <TomatoButton>Support</TomatoButton>
}
export default function Footer() {
  return (
    <footer className="footer">
      <SupportButton/>
      <Text>Created by Joseph John Lindzius</Text>
    </footer>
  );
}
