import url from "url";
import http, { IncomingMessage, Server, ServerResponse } from "http";

import { Product } from "./inteface";
import service from "./service";
import seeder from "./seeder";
/*
implement your server code here
*/

const server: Server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === "GET") {
      if (req.url === "/api") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(service.getProducts()));
        res.end();
      } else if (req.url?.startsWith("/api?productId")) {
        const q = url.parse(req.url, true).query;
        const productId: string = q.productId+"";
        const product = service.getProduct(productId);
        if(!product) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write("<h1>404 Product Not Found</h1>");
          res.end();
          return;
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(product));
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
      }
    } else if (req.method === "POST") {
      if (req.url === "/api") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", () => {
          let product: Product = JSON.parse(body);
          product = service.addProduct(product);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(product));
          res.end();
        });
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
      }
    } else if (req.method === "PUT") {
      if (req.url === "/api") {
        let body = "";
        req.on("data", (chunk) => {
          body += chunk;
        });
        req.on("end", () => {
          let product: Product = JSON.parse(body);
          product = service.updateProduct(product);
          res.writeHead(200, { "Content-Type": "application/json" });
          res.write(JSON.stringify(product));
          res.end();
        });
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
      }
    } else if (req.method === "DELETE") {
      if (req.url?.startsWith("/api?productId")) {
        const q = url.parse(req.url, true).query;
        const productId: string = q.productId+"";
        const deleteProduct = service.deleteProduct(productId);
        if(!deleteProduct) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write("<h1>404 Product Not Found</h1>");
          res.end();
          return;
        }
        res.writeHead(201, { "Content-Type": "application/json" });
        res.write(JSON.stringify(deleteProduct));
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
      }
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 Not Found</h1>");
      res.end();
    }
  }
);

const PORT = process.env.PORT || 3005;

server.listen(PORT).on("listening", () => { 
  console.log(`Server is listening on port ${PORT}...`);
  seeder();
});
