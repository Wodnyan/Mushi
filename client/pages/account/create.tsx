import { Label, FormControl } from "../../styles/Forms";
import { Button } from "../../styles/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import PasswordInput from "../../components/PasswordInput";
import Input from "../../components/Input";
import { FiMail, FiUser } from "react-icons/fi";
import { Form } from "../../styles/pages/AccountPages";
import { useMutation } from "@apollo/client";
import { SIGN_UP } from "../../graphql/mutations/auth";
import { useRouter } from "next/router";

interface UserInfo {
  username: string;
  email: string;
  password: string;
}

export default function Create() {
  const router = useRouter();
  const [signUp] = useMutation(SIGN_UP);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: {
        addUser: { accessToken },
      },
    } = await signUp({
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
