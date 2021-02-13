import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import Input from "../../components/Input";
import { FiMail, FiUser } from "react-icons/fi";
import { Form } from "../../styles/pages/AccountPages";

interface UserInfo {
  username: string;
  email: string;
  password: string;
}

export default function Create() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    email: "",
    password: "",
  });
  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userInfo);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <Form onSubmit={handleSignUp}>
      <FormControl>
        <Label htmlFor="username">Username</Label>
        <Input
          onChange={handleChange}
          id="username"
          iconLeft={<FiUser size={20} />}
          value={userInfo.username || ""}
        />
      </FormControl>
      <FormControl>
        <Label htmlFor="email">Email</Label>
        <Input
          onChange={handleChange}
          id="email"
          iconLeft={<FiMail size={20} />}
          value={userInfo.email || ""}
        />
      </FormControl>
      <PasswordInput value={userInfo.password || ""} onChange={handleChange} />
      <Button>Sign Up</Button>
    </Form>
  );
}
