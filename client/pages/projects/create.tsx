import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input";
import { Form } from "../../styles/pages/AccountPages";
import { useCreateProject } from "../../graphql/mutations/projects";
import { useAuth } from "../../graphql/queries/auth";
import { DEFAULT_UNAUTHORIZED_REDIRECT } from "../../constants/urls";

interface Project {
  name: string;
  description: string;
  ownerId: null | number;
}

export default function CreateProjectPage() {
  const { user, loading } = useAuth(DEFAULT_UNAUTHORIZED_REDIRECT);
  const [project, setProject] = useState<Project>({
    name: "",
    description: "",
    ownerId: null,
  });
  const { handleSubmit } = useCreateProject(project);

  useEffect(() => {
    if (user) {
      setProject((prev) => ({
        ...prev,
        ownerId: user.id,
      }));
    }
  }, [user]);

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
          multiline
          value={project.description || ""}
        />
      </FormControl>
      <Button disabled={loading}>Create a project</Button>
    </Form>
  );
}
