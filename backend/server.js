import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';

connectDB(); //Connect to MongoDB
const port= process.env.PORT || 7001;
const app= express();

app.get('/', (req,res) => {
    res.send("Server is running");
});

app.use('/api/products', productRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));


