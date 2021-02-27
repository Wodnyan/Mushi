export const fetchAllProjectNames = async () => {
  const response = await fetch("http://localhost:5050/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          projects {
            name
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
  return projects;
};
