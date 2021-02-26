import styled from "styled-components";
import { Button } from "../styles/Button";
import { Card } from "../styles/Card";

interface BugCardProps {
  title: string;
  description: string;
  isDuplicate: boolean;
  createdAt: string;
}

const StyledBugCard = styled(Card)`
  //max-height: 400px;
  display: flex;
  flex-direction: column;
  align-self: start;
`;

const Description = styled.p`
  max-height: 150px;
  overflow: auto;
`;

const BottomRow = styled.div`
  margin-top: auto;
`;

const shortenText = (text: string) => {
  return text.substr(0, 250);
};

const BugCard: React.FC<BugCardProps> = ({ description, title }) => {
  return (
    <StyledBugCard>
      <h1>{title}</h1>
      <Description>{shortenText(description)}</Description>
      <BottomRow>
        <Button>Open bug</Button>
      </BottomRow>
    </StyledBugCard>
  );
};
export default BugCard;
