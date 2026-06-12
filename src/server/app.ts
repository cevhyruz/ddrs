import express, { type Request, type Response, type Express } from 'express';

import { Server } from '../server/src/core/server';

const app: Express = express();
const port = 3000;

const server = new Server();
await server.dbConnect();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
