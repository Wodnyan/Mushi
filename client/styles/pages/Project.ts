import styled from "styled-components";

export const BugGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  grid-gap: 20px;
  margin-right: 1rem;
`;

export const Container = styled.div`
  height: 100%;
  background: url("/fingerprint.svg");
  color: #fff;
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
`;
