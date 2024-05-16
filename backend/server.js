import express from 'express';
import cors from 'cors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productsRoutes from './routes/productRoutes.js';

const app = express();

app.use(cors());

const PORT = 5000;
connectDB();

app.get('/', (req, res) => {
  res.send('API is Running...');
});

//routes
app.use('/api/products', productsRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
