import styled from "styled-components";

export const InputIcon = styled.button``;

export const Label = styled.label``;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem 0.3rem;
  font-size: 1rem;
  outline: 0;
  border: 1px solid black;
  border-radius: 7px;
  transition: box-shadow 0.2s ease, border 0.2s ease;
  &:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 0.3rem rgba(40, 167, 69, 0.25);
  }
`;

export const FormControl = styled.div`
  padding: 1rem;
  position: relative;
  ${Label} {
    display: inline-block;
    margin-bottom: 0.5rem;
  }
`;
