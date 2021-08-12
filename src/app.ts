import express from 'express';
import pokemonsRouter from './routes/pokemons.routes';

const app = express();

app.use(express.json());

app.use(pokemonsRouter);

export default app;
