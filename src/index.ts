import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { Container } from "typedi";
import { buildSchema } from "type-graphql";

import { RecipeResolver } from "./recipe/recipe.resolver";
import { PersonResolver } from "./person/person.resolver";

import express from "express";

async function bootstrap() {
  const app = express();

  const schema = await buildSchema({
    resolvers: [RecipeResolver, PersonResolver],
    container: Container,
    validate: false
  });

  const server = new ApolloServer({ schema });

  app.listen(4000, () => {
    console.log(`Server is connected `);
  });

  await server.applyMiddleware({ app });
}

bootstrap().catch((err) => {
  console.error(err);
});
