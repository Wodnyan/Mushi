import * as S from "../../styles/pages/Projects";
import ProjectCard from "../../components/ProjectCard";
import Head from "next/head";
import SearchForm from "../../components/SearchForm";
import { Button } from "../../styles/Button";
import NextLink from "next/link";
import { useAuth } from "../../graphql/queries/auth";

const Projects = ({ projects }) => {
  const { user } = useAuth();
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <S.Container>
        <h1>Search Component</h1>
        <SearchForm />
        {user && (
          <NextLink href="/projects/create">
            <Button block as="a">
              Create new project
            </Button>
          </NextLink>
        )}
        <S.ProjectListContainer>
          <S.ProjectList>
            {projects.map(({ id, name, description, bugs }) => (
              <ProjectCard
                name={name}
                description={description}
                numberOfBugs={bugs.length}
                key={id}
              />
            ))}
          </S.ProjectList>
        </S.ProjectListContainer>
      </S.Container>
    </>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:5050/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
      projects {
        id
        name
        description
        bugs {
          id
        }
      }
    }`,
    }),
  });
  const {
    data: { projects },
  } = await response.json();
  return {
    props: { projects }, // will be passed to the page component as props
  };
}

export default Projects;
