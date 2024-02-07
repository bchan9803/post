import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { UserRouter } from './routes/users.js';
import { APIRouter } from './routes/api.js';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://449studios:4949PostPostMan@users.abbiwhk.mongodb.net/postDB");
// mongoose.connect(`${process.env.REACT_MONGODB_CONNECTION_STRING}`);

// const PORT = import.meta.env.VITE_PORT;
const PORT = 3000;

app.use('/user', UserRouter);
app.use('/api', APIRouter);

app.listen(PORT, () => {
  console.log('express is listening at PORT ', PORT);
});
