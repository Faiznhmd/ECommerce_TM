import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import connectDB from './config/db.js';
import productsRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import { config } from './config/config.js';

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cookie parser middleware
app.use(cookieParser());

app.use(cors());

const port = config.port || 4000;

connectDB();

app.get('/', (req, res) => {
  res.send('API is Running...');
});

//routes
app.use('/api/products', productsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.get(
  '/api/config/paypal',
  (req, res) => res.send({ clientId: process.env.PAYPAL_CLIENT_ID })

  //client is not there
);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running at ${port}`));
