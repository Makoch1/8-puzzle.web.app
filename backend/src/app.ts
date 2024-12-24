import express from 'express';

// local modules

const app = express();
const PORT = 3000; // TODO: .env

app.use(express.json());

// routes
import { dailyRoutes } from "./features/daily/routes";

app.use('/daily', dailyRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
