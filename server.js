// App de exemplo do lvserv: responde na porta configurada, sem dependências.
// teste commit event
import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 3000);
const greeting = process.env.GREETING ?? "Olá do lvserv";

createServer((_req, res) => {
  res.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
  res.end(`${greeting}\n`);
}).listen(port, "0.0.0.0", () => console.log(`ouvindo na porta ${port}`));
