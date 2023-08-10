import express from 'express';
import cors from 'cors';

const app = express();
const port = 4000;

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173', // Replace with your frontend's URL
}));

app.use(express.json()); // Add this line to parse JSON in the request body

app.get('/test', (req, res) => {
  res.json('test ok');
});

app.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords don't match" });
  }

  // Save the user data to a database or perform further processing
  // For now, just return the user data
  res.json({ name, email, password });

  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
