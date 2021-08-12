import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

const serverMongo = 'mongodb://localhost:27017';
const database = 'pokemon_api';

async function apolloServer({ typeDefs, resolvers }: any) {
  try {
    await mongoose.connect(`${serverMongo}/${database}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,

      });

    mongoose.Promise = global.Promise;
    console.log('Succesfully connect to MongoDB🗄🗄');
  } catch (err) {
    console.log('Connection error', err);
    process.exit();
  }

  const server = new ApolloServer({ typeDefs, resolvers });
  server.listen().then(({ url }) => console.log('Apollo server running in:', url));
}

export default apolloServer;
