import * as S from "../styles/Card";
import { Button } from "../styles/Button";
import styled from "styled-components";
import { MdBugReport } from "react-icons/md";

interface ProjectCardProps {
  name: string;
  description: string;
  numberOfBugs: number;
}

const StyledProjectCard = styled(S.Card)`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 200px;
  margin: 5px;
  padding: 1rem;
  background: transparent;
  border: 1px solid yellow;
  transition: background 0.2s ease;
  cursor: pointer;
  &:hover {
    background: yellow;
  }
`;

const ProjectName = styled.h1``;

const ProjectDescription = styled.p`
  overflow: hidden;
`;

const NumberOfBugs = styled.div`
  display: flex;
  align-items: center;
`;

const BottomRow = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  description,
  name,
  numberOfBugs,
}) => {
  return (
    <StyledProjectCard>
      <ProjectName>{name}</ProjectName>
      <ProjectDescription>{description}</ProjectDescription>
      <BottomRow>
        <NumberOfBugs>
          <MdBugReport size={20} />
          {numberOfBugs}
        </NumberOfBugs>
        <Button>See Bugs</Button>
      </BottomRow>
    </StyledProjectCard>
  );
};
export default ProjectCard;
