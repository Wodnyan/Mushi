import * as S from "../styles/Forms";
import styled from "styled-components";
import { ChangeEvent } from "react";

interface Props {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  [x: string]: any;
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  multiline?: boolean;
  value?: string;
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
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

const Input: React.FC<Props> = ({
  iconLeft,
  iconRight,
  value,
  multiline,
  onChange,
  ...rest
}) => {
  return (
    <Container>
      {iconLeft && (
        <S.InputIcon type="button" tabIndex={-1}>
          {iconLeft}
        </S.InputIcon>
      )}
      <S.Input
        as={multiline ? "textarea" : "input"}
        onChange={onChange}
        value={value}
        {...rest}
      />
      {iconRight && <S.InputIcon type="button">{iconRight}</S.InputIcon>}
    </Container>
  );
};

export default Input;
