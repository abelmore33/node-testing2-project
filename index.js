const server = require("./api/server");

const Port = process.env.PORT || 5000;

server.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
