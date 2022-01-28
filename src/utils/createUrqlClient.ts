import { createClient } from "urql";

const client = createClient({
  url: "https://zenbit-server-test-task.herokuapp.com/graphql",//process.env.GRAPHQL_URL! ,
});

export default client;
