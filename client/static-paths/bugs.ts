export const fetchAllBugIds = async () => {
  const response = await fetch("http://localhost:5050/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          bugs {
            id
          }
        }`,
    }),
  });
  const {
    data: { bugs },
  } = await response.json();
  return bugs;
};
