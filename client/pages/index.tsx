import {
  CallToAction,
  Container,
  Nav,
  Logo,
  SubHeader,
  HeroText,
  ButtonGroup,
} from "../styles/Home";
import Button from "../styles/Button";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container>
      <Nav>
        <Logo>Mushi</Logo>
        <NextLink href="/account/login">
          <Button as="a">Login</Button>
        </NextLink>
      </Nav>
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
