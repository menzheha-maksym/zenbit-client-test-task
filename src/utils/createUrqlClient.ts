import { createClient } from "urql";

const client = createClient({
  url: process.env.GRAPHQL_URL! ,
});

export default client;
