import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { FormEvent } from "react";
import PasswordInput from "../../components/PasswordInput";
import Input from "../../components/Input";

export default function Create() {
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSignUp}>
      <FormControl>
        <Label htmlFor="username">Username</Label>
        <Input id="username" iconRight="foo" />
      </FormControl>
      <FormControl>
        <Label htmlFor="email">Email</Label>
        <Input id="email" iconLeft="bar" />
      </FormControl>
      <PasswordInput />
      <Button>Sign Up</Button>
    </form>
  );
}
