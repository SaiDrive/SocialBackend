const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
dotenv.config();

const app = express();

const port = process.env.SERVER_PORT;
const URI = process.env.MONGODB_URI;


app.use(cors());
app.use(express.json());
app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello1');
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });