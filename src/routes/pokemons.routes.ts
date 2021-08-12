import { Router } from 'express';
import { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import resolvers from '../graphql/resolvers';

const pokemonsRouter = Router();

const schema = new GraphQLSchema(resolvers);

pokemonsRouter.post('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

export default pokemonsRouter;
