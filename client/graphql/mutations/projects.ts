import { gql, useMutation } from "@apollo/client";
import { FormEvent } from "react";
import { useRouter } from "next/router";

interface Project {
  name: string;
  description: string;
  ownerId: null | number;
}

export const CREATE_PROJECT = gql`
  mutation CreateProject(
    $name: String!
    $description: String!
    $ownerId: Int!
  ) {
    createProject(name: $name, description: $description, ownerId: $ownerId) {
      name
      owner {
        username
      }
    }
  }
`;

export const useCreateProject = (project: Project) => {
  const router = useRouter();
  const [createProject, { error, loading }] = useMutation(CREATE_PROJECT);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await createProject({
        variables: project,
      });
      router.push("/projects");
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSubmit,
    error,
    loading,
  };
};
