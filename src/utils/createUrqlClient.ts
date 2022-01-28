import { createClient } from "urql";

const client = createClient({
  url: process.env.GRAPHQL_URL || "http://localhost:3001/graphql" ,
});

export default client;
