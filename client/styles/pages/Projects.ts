import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: url("fingerprint.svg");
  color: white;
  display: flex;
  flex-direction: column;
`;

export const ProjectListContainer = styled.div`
  overflow: auto;
  height: 100%;
`;

export const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
`;
