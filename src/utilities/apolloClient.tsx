import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = new HttpLink({
  uri: "http://192.168.1.157:4000/graphql"
});

const cache = new InMemoryCache();
const apolloClient: any = new ApolloClient({ link: httpLink, cache: cache });

export { apolloClient };
