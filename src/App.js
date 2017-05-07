import React from "react";
import styled from "styled-components";

import imgOfMe from "./me.jpeg";

const Me = styled.img`
  border-radius: 50%;
  width: 15em;
  height: auto;
  display: block;
  margin: auto;
  margin-top: 3em;
`;

const Description = styled.div`
  margin-top: 0.5em;
  font-size: 2em;
  text-align: center;
  color: #666;
`;

const links = [
  ["LinkedIn", "https://www.linkedin.com/in/samelliott7c7/"],
  ["GitHub", "https://github.com/samelliottdlt"],
  ["AngelList", "https://angel.co/samelliott7c7"],
  ["Twitter", "https://twitter.com/SamElliott7C7"]
];

const Link = styled.a`
  display: inline-block;
  margin: 0 15px;
  text-decoration: none;
  &:hover {
    color: white;
    background-color: #94D0FF;
  }
`;

const colors = ["#FF6AD5", "#AD8CFF", "#94D0FF"];

const Bar = styled.div`
  height: 5px;
  font-size: 0;
  background: linear-gradient(to right, ${colors.join(",")});
`;

export const App = () => (
  <div>
    <Bar />
    <Me src={imgOfMe} />
    <Description>
      <div>
        Hello! I'm Sam Elliott.
      </div>
      <div>
        I build software.
      </div>
    </Description>
    <div style={{ textAlign: "center", marginTop: "1.5em", fontSize: "1.5em" }}>
      {links.map(([text, link]) => <Link href={link} key={text}>{text}</Link>)}
    </div>
  </div>
);
