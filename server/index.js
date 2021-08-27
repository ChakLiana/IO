
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from 'morgan'

import postRoutes from './routes/posts.js';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(
  cors({
    origin: true,
    credentials: true,
  })
  );
  
app.use(logger('dev'))

app.use('/posts', postRoutes);

const CONNECTION_URL = 'mongodb+srv://hello_mfk_:hello_mfk_1209@io.bm4ys.mongodb.net/io?retryWrites=true&w=majority'
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);