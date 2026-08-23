const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "books.json");

const server = http.createServer((req, res) => {
  
  if (req.url === "/books" && req.method === "GET") {
    const data = fs.readFileSync(filePath, "utf8");
    const books = JSON.parse(data);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
  }

  
  else if (req.url === "/books" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const newBook = JSON.parse(body);

      const data = fs.readFileSync(filePath, "utf8");
      const books = JSON.parse(data);

      
      newBook.id = books.length + 1;

      books.push(newBook);

      fs.writeFileSync(filePath, JSON.stringify(books, null, 2));

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newBook));
    });
  }

  
  else if (req.url.startsWith("/books/") && req.method === "DELETE") {
    const id = parseInt(req.url.split("/")[2]);

    const data = fs.readFileSync(filePath, "utf8");
    let books = JSON.parse(data);

    const book = books.find((b) => b.id === id);

    if (!book) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Book not found" }));
    } else {
      books = books.filter((b) => b.id !== id);
      fs.writeFileSync(filePath, JSON.stringify(books, null, 2));

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Book deleted successfully" }));
    }
  }

  
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000...");
});