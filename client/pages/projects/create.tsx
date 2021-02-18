import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/Input";
import { Form } from "../../styles/pages/AccountPages";
import { useMutation } from "@apollo/client";
import { CREATE_PROJECT } from "../../graphql/mutations/projects";
import { useRouter } from "next/router";

interface Project {
  name: string;
  description: string;
  ownerId: null | number;
}

export default function CreateProjectPage() {
  const router = useRouter();
  const [createProject] = useMutation(CREATE_PROJECT);

  const [project, setProject] = useState<Project>({
    name: "",
    description: "",
    ownerId: 1,
  });

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await createProject({
        variables: project,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Form onSubmit={handleSignUp}>
      <FormControl>
        <Label htmlFor="name">Name</Label>
        <Input onChange={handleChange} id="name" value={project.name || ""} />
      </FormControl>
      <FormControl>
        <Label htmlFor="description">Description</Label>
        <Input
          onChange={handleChange}
          id="description"
          value={project.description || ""}
        />
      </FormControl>
      <Button>Create a project</Button>
    </Form>
  );
}
