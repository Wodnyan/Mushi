import BugCard from "../../components/BugCard";
import ProjectDescription from "../../components/ProjectDescription";
import * as S from "../../styles/pages/Project";

const Project = ({ project }) => {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.BugGrid>
          {project.bugs.map((bug: any) => (
            <BugCard
              key={bug.id}
              description={bug.description}
              title={bug.title}
              createdAt={bug.cretedAt}
              isDuplicate={bug.isDuplicate}
            />
          ))}
        </S.BugGrid>
        <ProjectDescription project={project} owner={project.owner} />
      </S.ContentWrapper>
      <style jsx global>{`
        body {
          background: url("/fingerprint.svg");
        }
      `}</style>
    </S.Container>
  );
};

export async function getStaticProps({ params }) {
  const response = await fetch("http://localhost:5050/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
      project(projectName: "${params.projectName}") {
        name
        description
        icon
        createdAt
        owner {
          username
          email
          avatar
        }
        bugs {
          id
          title
          description
          createdAt
          isDuplicate
        }
      }
    }`,
    }),
  });
  const {
    data: { project },
  } = await response.json();

  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  // TODO: Clean this up
  const response = await fetch("http://localhost:5050/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
      projects {
        name
      }
    }`,
    }),
  });
  const {
    data: { projects },
  } = await response.json();
  const paths = projects.map((project: any) => ({
    params: {
      projectName: project.name,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Project;
