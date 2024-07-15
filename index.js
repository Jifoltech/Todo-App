const app = require("./app");

const PORT = process.env.PORT || 5000;

// listening to server
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
