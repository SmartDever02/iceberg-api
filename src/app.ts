import * as dotenv from 'dotenv';

import express from 'express';
import middleware from './middleware';
import connectMongo from './models';
import routes from './routes';

dotenv.config();

const app = express();
middleware(app);
app.use(routes);

connectMongo();

app.use('/', (_req: express.Request, res: express.Response) => {
  res.status(200).json({ message: 'Welcome!!! James' });
});

export { app };
