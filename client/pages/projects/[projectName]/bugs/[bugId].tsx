import { fetchAllBugIds } from "../../../../static-paths/bugs";
import { fetchAllProjectNames } from "../../../../static-paths/projects";

const Bug = ({ comments }) => {
  return (
    <>
      <h1>{JSON.stringify(comments, null, 4)}</h1>
    </>
  );
};

export async function getStaticProps({ params }) {
  const response = await fetch("http://localhost:5050/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          comments {
            id
            comment
            author {
              username
            }
          }
        }
  `,
    }),
  });
  const {
    data: { comments },
  } = await response.json();
  return {
    props: {
      comments,
    },
  };
}

const getProjectNameOfBug = (projects: any[], bugId: number) => {
  let projectName = "";
  projects.forEach((project: any) => {
    project.bugs.forEach((bug: any) => {
      if (bugId === bug.id) {
        projectName = project.name;
      }
    });
  });
  return projectName;
};

export async function getStaticPaths() {
  const bugs = await fetchAllBugIds();
  const projects = await fetchAllProjectNames();
  const paths = bugs.map((bug: any) => ({
    params: {
      bugId: String(bug.id),
      projectName: getProjectNameOfBug(projects, bug.id),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export default Bug;
