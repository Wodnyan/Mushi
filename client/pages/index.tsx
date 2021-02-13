import {
  CallToAction,
  Container,
  Nav,
  Logo,
  SubHeader,
  HeroText,
  ButtonGroup,
  BurgerContainer,
  LoginLinkContainer,
  Menu,
} from "../styles/pages/Home";
import Button from "../styles/Button";
import NextLink from "next/link";
import { Burger } from "../styles/Burger";
import { useState } from "react";

export default function Home() {
  const [showMenu, setShowMenu] = useState(true);
  return (
    <Container>
      <Nav>
        <Logo>Mushi</Logo>
        <LoginLinkContainer>
          <NextLink href="/account/login">
            <Button as="a">Login</Button>
          </NextLink>
        </LoginLinkContainer>
        <BurgerContainer>
          <Burger onClick={() => setShowMenu((prev) => !prev)} open={showMenu}>
            <div />
            <div />
            <div />
          </Burger>
        </BurgerContainer>
      </Nav>
      <Menu open={showMenu}>
        <NextLink href="/account/login">
          <Button block as="a">
            Login
          </Button>
        </NextLink>
      </Menu>
      <HeroText>
        <CallToAction>Get Started With Mushi!</CallToAction>
        <SubHeader>Report bugs with ease.</SubHeader>
        <ButtonGroup>
          <NextLink href="/account/create">
            <Button as="a" style={{ marginRight: "20px" }} block>
              Create an account
            </Button>
          </NextLink>
          <NextLink href="/boards">
            <Button as="a" block>
              Search for boards
            </Button>
          </NextLink>
        </ButtonGroup>
      </HeroText>
    </Container>
  );
}
