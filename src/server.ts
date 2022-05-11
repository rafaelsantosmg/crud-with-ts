import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserController from './controller/userController';

const app = express();

app.use(express.json());

const PORT = 8000;

const userController = new UserController();

app.post('/user', userController.create);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});