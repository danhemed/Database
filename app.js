import express from 'express';
import routerQuestions from "./route.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(routerQuestions);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
