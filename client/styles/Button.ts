import styled from "styled-components";
import { COLORS } from "../constants/style/colors";

type ButtonColors = "primary" | string;

interface ButtonProps {
  disabled?: boolean;
  block?: boolean;
  color?: ButtonColors;
}

function setBackgroundColor(props: ButtonProps) {
  switch (props.color) {
    case "primary":
      return COLORS.blueRibbon;
    default:
      return COLORS.blueRibbon;
  }
}

function setBackgroundHoverColor(props: ButtonProps) {
  switch (props.color) {
    case "primary":
      return COLORS.electricViolet;
    default:
      return COLORS.electricViolet;
  }
}

//function setSize(props: ButtonProps) {}

export const Button = styled.button<ButtonProps>`
  display: ${(props) => props.block && "block"};
  padding: 0.5rem;
  border: none;
  width: ${(props) => props.block && "100%"};
  background: ${setBackgroundColor};
  border-radius: 4px;
  color: #fff;
  transition: background 0.2s ease;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  &:hover {
    background: ${setBackgroundHoverColor};
  }
  &:disabled {
    background: ${COLORS.mineShaft};
    color: #81abbc;
    pointer-events: none;
  }
`;

export default Button;
