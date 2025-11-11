import express from 'express';
import digitalEntertainmentRoutes from "./routes/DigitalEntertainment/digitalEntertainmentRoute";
import { generalErrorHandler } from './middlewares/errorHandler'

const app = express();

app.use(express.json());
app.use("/api", digitalEntertainmentRoutes);
app.use(generalErrorHandler)

app.listen(4000, () => {
    console.log("Server running on 4000");
})