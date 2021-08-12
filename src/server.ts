import app from './app';

import apolloServer from './graphql';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

apolloServer({ typeDefs, resolvers });

app.listen(3332, () => console.log('😸😺Server is running on port 3333😺😸'));
