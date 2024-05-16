import { config } from '../config/config.js';

const notFound = (req, res, next) => {
  const error = new Error(`Not Found -${req.originalURL}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === 'CastError' && err.Kind === 'ObjectId') {
    message = `Resource not Found`;
    statusCode = 404;
  }
  res.status(statusCode).json({
    message,
    stack: config.env === 'production' ? '*' : err.stack,
  });
};
export { notFound, errorHandler };
