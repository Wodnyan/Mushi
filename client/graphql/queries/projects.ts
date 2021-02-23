import { useQuery, gql } from "@apollo/client";

export const GET_ALL_PROJECTS = gql`
  query GetAllProjecst {
    projects {
      id
      name
    }
  }
`;

export const useFetchAllProjects = () => {
  const { data, loading, error } = useQuery(GET_ALL_PROJECTS);
  return {
    data,
    loading,
    error,
  };
};
