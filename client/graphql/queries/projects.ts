import { useQuery, gql } from "@apollo/client";

const getAllProjects = gql`
  query GetAllProjecst {
    projects {
      id
      name
    }
  }
`;

export const useFetchAllProjects = () => {
  const { data, loading, error } = useQuery(getAllProjects);
  return {
    data,
    loading,
    error,
  };
};
