import React from "react";
import styled from "styled-components";

const BarContainer = styled.div`
  height: 5px;
  font-size: 0;
`;

const colors = ["#FF6AD5", "#AD8CFF", "#94D0FF"];

const Color = styled.div`
    width: calc(100% / ${colors.length});
    display: inline-block;
    height: inherit;
`;

export const Bar = () => (
  <BarContainer>
    {colors.map(color => (
      <Color key={color} style={{ backgroundColor: color }} />
    ))}
  </BarContainer>
);
