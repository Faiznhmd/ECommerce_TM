import express from 'express';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productsRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cookieParser from 'cookie-parser';

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());

const PORT = 5000;
connectDB();

app.get('/', (req, res) => {
  res.send('API is Running...');
});

//routes
app.use('/api/products', productsRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
