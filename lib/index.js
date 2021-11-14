"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = __importDefault(require("url"));
const http_1 = __importDefault(require("http"));
const service_1 = __importDefault(require("./service"));
const seeder_1 = __importDefault(require("./seeder"));
/*
implement your server code here
*/
const server = http_1.default.createServer((req, res) => {
    var _a, _b;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', '*');
    if (req.method === "GET") {
        if (req.url === "/api") {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(service_1.default.getProducts()));
            res.end();
        }
        else if ((_a = req.url) === null || _a === void 0 ? void 0 : _a.startsWith("/api?productId")) {
            const q = url_1.default.parse(req.url, true).query;
            const productId = q.productId + "";
            const product = service_1.default.getProduct(productId);
            if (!product) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write("<h1>404 Product Not Found</h1>");
                res.end();
                return;
            }
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify(product));
            res.end();
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1>404 Not Found</h1>");
            res.end();
        }
    }
    else if (req.method === "POST") {
        if (req.url === "/api") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                let product = JSON.parse(body);
                product = service_1.default.addProduct(product);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(product));
                res.end();
            });
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1>404 Not Found</h1>");
            res.end();
        }
    }
    else if (req.method === "PUT") {
        if (req.url === "/api") {
            let body = "";
            req.on("data", (chunk) => {
                body += chunk;
            });
            req.on("end", () => {
                let product = JSON.parse(body);
                product = service_1.default.updateProduct(product);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(product));
                res.end();
            });
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1>404 Not Found</h1>");
            res.end();
        }
    }
    else if (req.method === "DELETE") {
        if ((_b = req.url) === null || _b === void 0 ? void 0 : _b.startsWith("/api?productId")) {
            const q = url_1.default.parse(req.url, true).query;
            const productId = q.productId + "";
            const deleteProduct = service_1.default.deleteProduct(productId);
            if (!deleteProduct) {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.write("<h1>404 Product Not Found</h1>");
                res.end();
                return;
            }
            res.writeHead(201, { "Content-Type": "application/json" });
            res.write(JSON.stringify(deleteProduct));
            res.end();
        }
        else {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<h1>404 Not Found</h1>");
            res.end();
        }
    }
    else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>404 Not Found</h1>");
        res.end();
    }
});
const PORT = process.env.PORT || 3005;
server.listen(PORT).on("listening", () => {
    console.log(`Server is listening on port ${PORT}...`);
    seeder_1.default();
});
