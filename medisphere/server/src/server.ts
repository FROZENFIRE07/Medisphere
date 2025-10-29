import app from './app';

const PORT = process.env.PORT || 5000;

// Only used for traditional server (not serverless)
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

