import http from "http";

function startServer() {
  const server = http.createServer((_, res) => {
    res.writeHead(200, { "Content-type": "application/json" });

    res.end(JSON.stringify({ message: "Hello World!" }));
  });

  server.listen(3000, () => {
    console.log("Access page: http://localhost:3000");
  });
}

export default startServer;
