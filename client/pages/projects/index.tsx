import * as S from "../../styles/pages/Projects";
import ProjectCard from "../../components/ProjectCard";
import Head from "next/head";
import SearchForm from "../../components/SearchForm";
import { Button } from "../../styles/Button";
import NextLink from "next/link";

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <S.Container>
        <h1>Search Component</h1>
        <SearchForm />
        <NextLink href="/projects/create">
          <Button block as="a">
            Login
          </Button>
        </NextLink>
        <S.ProjectListContainer>
          <S.ProjectList>
            {projects.map(({ name, description }, i: number) => (
              <ProjectCard
                name={name}
                description={description}
                numberOfLikes={i}
                key={i}
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
