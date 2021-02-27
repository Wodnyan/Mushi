import { fetchAllProjectNames } from "../../../static-paths/projects";

const Project = ({ project }) => {
  return <h1>This will be an admin page</h1>;
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
  const projects = await fetchAllProjectNames();
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
