import express, {Application} from 'express';
import morgan from 'morgan';
import {tokenValidation} from './middlewares/verifiToken.middlware';

const app:Application = express();

import authRoutes from './routes/auth.router'
import moviesRoutes  from "./routes/movies.routes";
import randomRoutes  from "./routes/random.router";
// setings
app.set("port",3000);

// middleares
app.use(morgan('dev'));
app.use(express.json())

// routes
app.use('/api/auth',authRoutes)
app.use('/api1',moviesRoutes)
app.use('/api2',tokenValidation,moviesRoutes)
app.use('/api3',randomRoutes)

export default app;