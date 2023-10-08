const http = require('http');
const fs = require('fs');


const renderHTML = (url, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile(`./${url}.html`, (error, data) => {
        if (error) {
            res.writeHead(404)
            res.write("Page Not Found")
        } else {
            res.write(data)
        }
        res.end()
    })
}
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/about') {
        renderHTML('about', res)
    } else if (url === '/contact') {
        renderHTML('contact', res)
    } else {
        renderHTML('index', res)
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("Listening on port http://127.0.0.1:3000");
});
