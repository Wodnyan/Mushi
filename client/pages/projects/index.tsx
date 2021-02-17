import * as S from "../../styles/pages/Projects";
import ProjectCard from "../../components/ProjectCard";
import Head from "next/head";
import SearchForm from "../../components/SearchForm";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <S.Container>
        <h1>Search Component</h1>
        <SearchForm />
        <S.ProjectListContainer>
          <S.ProjectList>
            {Array.from(Array(500).keys()).map((_, i) => (
              <ProjectCard
                name="foo"
                description="this is a description"
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
export default Projects;
