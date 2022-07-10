import server from "./server.js";
import { PORT } from "./constants.js";

server.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);
