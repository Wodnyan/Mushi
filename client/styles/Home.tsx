import styled from "styled-components";
import { COLORS } from "../constants/style/colors";
import { BREAKPOINTS } from "../constants/style/breakpoints";

interface MenuProps {
  open?: boolean;
}

export const HeroText = styled.section``;

export const CallToAction = styled.h1`
  font-size: 3rem;
  @media (max-width: ${BREAKPOINTS.sm}) {
    font-size: 2rem;
    text-align: center;
  }
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
  padding: 0 2rem;
  background: ${COLORS.codGray};
  z-index: 100;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin-top: 1rem;
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: block;
    a,
    button {
      margin-top: 10px;
    }
  }
`;

export const Logo = styled.h1`
  font-size: 2rem;
`;

export const Container = styled.main`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: ${COLORS.codGray};
  background: url("fingerprint.svg");
`;

export const Menu = styled.div<MenuProps>`
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  background: ${COLORS.codGray};
  z-index: 10;
  transition: transform 0.2s ease;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
`;

export const BurgerContainer = styled.div`
  @media (min-width: ${BREAKPOINTS.sm}) {
    display: none;
  } ;
`;

export const LoginLinkContainer = styled.div`
  @media (max-width: ${BREAKPOINTS.sm}) {
    display: none;
  } ;
`;
