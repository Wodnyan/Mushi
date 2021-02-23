const Project = ({ project }) => {
  return <h1>{JSON.stringify(project, null, 2)}</h1>;
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
      }
    }`,
    }),
  });
  const { data: project } = await response.json();

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
