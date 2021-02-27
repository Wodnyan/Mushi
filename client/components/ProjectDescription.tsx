import styled from "styled-components";
import { Avatar } from "../styles/Avatar";
import { convertTimeStampToHumanReadable } from "../utils/convert-timestamp-to-human-readable";

interface Owner {
  username: string;
  email: string;
  avatar?: string;
}

interface ProjectDescriptionProps {
  owner: Owner;
  project: {
    description: string;
    createdAt: string;
    name: string;
  };
}

interface OwnerInfoProps {
  owner: Owner;
  createdAt: string;
}

const Username = styled.h1``;

const Description = styled.p``;

const ProjectName = styled.h1`
  font-size: 2.5rem;
  text-align: center;
`;

const Container = styled.div`
  background: gray;
  flex: 0.35;
  max-height: 500px;
  border-radius: 10px;
`;

const OwnerInfoContainer = styled.section`
  display: flex;
  align-items: center;
`;

const CreatedAt = styled.span``;

const OwnerInfo: React.FC<OwnerInfoProps> = ({
  owner: { username, avatar },
  createdAt,
}) => {
  return (
    <OwnerInfoContainer>
      <Avatar src={avatar} />
      <div>
        <Username>{username}</Username>
        <CreatedAt>
          {convertTimeStampToHumanReadable(Number(createdAt))}
        </CreatedAt>
      </div>
    </OwnerInfoContainer>
  );
};

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  owner,
  project,
}) => {
  return (
    <Container>
      <ProjectName>{project.name}</ProjectName>
      <OwnerInfo createdAt={project.createdAt} owner={owner} />
      <Description>{project.description}</Description>
    </Container>
  );
};

export default ProjectDescription;
