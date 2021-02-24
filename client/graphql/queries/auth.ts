import { gql, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const TEMP = gql`
  query GetUserInfo {
    user {
      id
      username
      email
      isAdmin
      avatar
      createdAt
    }
  }
`;

interface User {
  id: number;
}

export const useAuth = (
  redirectUrl: string = "http://localhost:3000/account/create"
) => {
  const router = useRouter();
  const { data, error, loading } = useQuery(TEMP);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    if (error && !loading) {
      router.push(redirectUrl);
    } else {
      setUser(data?.user);
    }
  }, [data, error, loading]);

  return {
    user,
    loading,
  };
};
