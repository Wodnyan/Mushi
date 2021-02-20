import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { ChangeEvent, useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import Input from "../../components/Input";
import { FiMail } from "react-icons/fi";
import { Form } from "../../styles/pages/AccountPages";
import { useLogin } from "../../graphql/mutations/auth";

interface UserInfo {
  email: string;
  password: string;
}

export default function Login() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });
  const { handleLogin } = useLogin(userInfo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Form onSubmit={handleLogin}>
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
      <Button>Login</Button>
    </Form>
  );
}
