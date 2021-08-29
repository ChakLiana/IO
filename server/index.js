
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import logger from 'morgan'

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.use(
  cors({
    origin: true,
    credentials: true,
  })
  );
  
app.use(logger('dev'))

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const CONNECTION_URL = 'mongodb+srv://hello_mfk_:hello_mfk_1209@io.bm4ys.mongodb.net/io?retryWrites=true&w=majority'
const PORT = 4200;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server and DB  STARTED ===> : http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect))`));

mongoose.set('useFindAndModify', false);