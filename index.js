const express = require("express");
const server = express();

let PORT = process.env.PORT ? process.env.PORT : 4000;

server.listen(PORT, () => {
  console.log("server listening");
});
