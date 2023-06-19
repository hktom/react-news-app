import {
  ApolloClient,
  DefaultOptions,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { ApolloLink, from } from "apollo-link";
import Cookies from "js-cookie";
import { HttpLink } from "apollo-link-http";

export const HOST_URL = "http://127.0.0.1:8000/";

export const TOKEN = Cookies.get("token");

const httpLink = new HttpLink({ uri: `${HOST_URL}graphql/` });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
        authorization: 'Bearer ' + TOKEN,
    },
  }));

  return forward(operation);
});

export const getClient = () =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authMiddleware, httpLink]) as any,
  });

export const apolloQuery = async (object: any) => {
  return await getClient().query({
    query: gql`${object}`,
    context: {
      fetchOptions: {
        next: { revalidate: 1 },
      },
    },
  });
};

export const apolloMutation = async (object: any) => {
  return await getClient().mutate({
    mutation: gql`${object}`,
  });
};
