const http = require("http");
const app = require("./src/app");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
