import { createClient } from "urql";

const client = createClient({
  url: "http://localhost:3001/graphql",
});

export default client;
