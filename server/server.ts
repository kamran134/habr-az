import * as express from 'express';

const app = express();

app.listen(5555, 'localhost', () => {
  console.log('Listening on 5555');
});
