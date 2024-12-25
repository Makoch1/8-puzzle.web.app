import express from 'express';

// local modules

const app = express();
const PORT = 3000; // TODO: .env

app.use(express.json());

// routes
import { userRoutes } from './features/user/routes';
import { dailyRoutes } from "./features/daily/routes";
import { puzzleRoutes } from './features/puzzle/routes';
import { sessionRoutes } from './features/session/routes';

app.use('/user', userRoutes);
app.use('/daily', dailyRoutes);
app.use('/puzzle', puzzleRoutes);
app.use('/session', sessionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
