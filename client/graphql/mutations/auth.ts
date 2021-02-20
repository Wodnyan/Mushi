import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FormEvent } from "react";

interface LoginCreds {
  email: string;
  password: string;
}

interface SignUpCreds {
  username: string;
  email: string;
  password: string;
}

export const SIGN_UP = gql`
  mutation SignUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      accessToken
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      accessToken
    }
  }
`;

export const useLogin = (userCreds: LoginCreds) => {
  const router = useRouter();
  const [login, { loading }] = useMutation(LOGIN);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: {
        login: { accessToken },
      },
    } = await login({
      variables: userCreds,
    });
    localStorage.setItem("access_token", accessToken);
    router.push("/projects");
  };

  return {
    handleLogin,
    loading,
  };
};

export const useSignUp = (userInfo: SignUpCreds) => {
  const router = useRouter();
  const [signUp, { loading }] = useMutation(SIGN_UP);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      data: {
        signUp: { accessToken },
      },
    } = await signUp({
      variables: userInfo,
    });
    localStorage.setItem("access_token", accessToken);
    router.push("/projects");
  };

  return {
    handleSignUp,
    loading,
  };
};
