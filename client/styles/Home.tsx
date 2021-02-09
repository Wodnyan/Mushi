import styled from "styled-components";
import { COLORS } from "../constants/style/colors";

export const HeroText = styled.section``;

export const CallToAction = styled.h1`
  font-size: 3.5rem;
`;

export const SubHeader = styled.h2`
  text-align: center;
  color: ${COLORS.jumbo};
`;

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  background: ${COLORS.codGray};
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const Logo = styled.h1`
  font-size: 2rem;
`;

export const Container = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${COLORS.codGray};
  background: url("fingerprint.svg");
`;

export const Link = styled.a``
