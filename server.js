import express from 'express';
import dotenv from 'dotenv';
import { dbConnect } from './dbConnect/dbConnect.js';
import helmet from 'helmet';
import morgan from 'morgan';
import routes from './routes/routes.js';
import cors from 'cors';
const app = express();
dotenv.config();
app.use(helmet());
app.use(morgan("common"));
app.use(express.json());
app.use(cors());

app.use(routes);




app.listen(process.env.PORT,(req,res)=>{
    console.log('server is listening on port 3000');
    //database connection
dbConnect();

});