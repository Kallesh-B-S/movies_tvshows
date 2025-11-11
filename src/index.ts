import express from 'express';
import digitalEntertainmentRoutes from "./routes/DigitalEntertainment/digitalEntertainmentRoute";
import { generalErrorHandler } from './middlewares/errorHandler'

const app = express();

app.use(express.json());
app.use("/api", digitalEntertainmentRoutes);
app.use(generalErrorHandler)
const port = process.env.PORT || 4112
app.listen(port, () => {
    console.log(`Server running on ${port}`);
})