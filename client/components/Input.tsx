import * as S from "../styles/Forms";
import styled from "styled-components";

interface Props {
  iconLeft?: string;
  iconRight?: string;
  [x: string]: any;
}

const Container = styled.div`
  position: relative;
  display: flex;
  padding: 0.5rem 0.3rem;
  font-size: 1rem;
  outline: 0;
  border: 1px solid black;
  border-radius: 7px;
  transition: box-shadow 0.2s ease, border 0.2s ease;
  &:focus-within {
    border-color: #28a745;
    box-shadow: 0 0 0 0.3rem rgba(40, 167, 69, 0.25);
  }
  ${S.Input} {
    border: none;
    flex: 1;
    width: 100%;
    padding: 0;
    &:focus {
      box-shadow: none;
    }
  }
  ${S.InputIcon} {
    height: 50%;
    margin: 0 5px;
  }
`;

const Input: React.FC<Props> = ({ iconLeft, iconRight, ...rest }) => {
  return (
    <Container>
      {iconLeft && <S.InputIcon>What</S.InputIcon>}
      <S.Input {...rest} />
      {iconRight && <S.InputIcon>What</S.InputIcon>}
    </Container>
  );
};

export default Input;
