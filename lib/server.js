'use strict';

import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';

import Config from './core/config';
import IndexRoutes from './routes/index';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Helmet helps you secure your Express apps by setting various HTTP headers
// https://github.com/helmetjs/helmet
app.use(helmet());

// Enable CORS with various options
// https://github.com/expressjs/cors
app.use(cors());

app.use('/public', express.static(`${__dirname}/public`));

app.use('/', IndexRoutes);

app.listen(Config.port, () => {
    console.log(`
      Port: ${Config.port}
      Env: ${app.get('env')}
    `);
});
  
export default app;