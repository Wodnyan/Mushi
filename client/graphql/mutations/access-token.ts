import { gql, useMutation } from "@apollo/client";
import { useEffect } from "react";

const CREATE_ACCESS_TOKEN = gql`
  mutation CreateAccessToken($accessToken: String!) {
    createAccessToken(accessToken: $accessToken) {
      accessToken
    }
  }
`;

export const useCreateNewAccessToken = () => {
  const accessToken = localStorage.getItem("access_token");
  const [createAccessToken, { error, loading }] = useMutation(
    CREATE_ACCESS_TOKEN
  );
  useEffect(() => {
    console.log(accessToken);
  }, []);
};
