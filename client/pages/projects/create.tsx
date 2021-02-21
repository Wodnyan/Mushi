import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../../components/Input";
import { Form } from "../../styles/pages/AccountPages";
import { useCreateProject } from "../../graphql/mutations/projects";

interface Project {
  name: string;
  description: string;
  ownerId: null | number;
}

export default function CreateProjectPage() {
  const [project, setProject] = useState<Project>({
    name: "",
    description: "",
    ownerId: 1,
  });
  const { handleSubmit } = useCreateProject(project);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setProject((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Form onSubmit={handleSubmit}>
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
