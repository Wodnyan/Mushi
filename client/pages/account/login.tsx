import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import Input from "../../components/Input";
import { FiMail } from "react-icons/fi";
import { Form } from "../../styles/pages/AccountPages";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/mutations/auth";
import { useRouter } from "next/router";

interface UserInfo {
  email: string;
  password: string;
}

export default function Login() {
  const router = useRouter();
  const [login] = useMutation(LOGIN);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: {
        login: { accessToken },
      },
    } = await login({
      variables: userInfo,
    });
    localStorage.setItem("access_token", accessToken);
    router.push("/");
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
