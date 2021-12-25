const http = require("http");
const port = normalizePort(process.env.PORT || 8080);

// Xử lý File
// const fs = require("fs");
// Xử lý CSDL MongoDB
const libs = require("./libsMongo");



const Dich_vu = http.createServer((req, res) => {
    let method = req.method;
    let url = req.url;

    let kq = `Chào bạn đến Dịch vụ NodeJs - Method: ${method} - Url:${url}`;
    // Quyền truy cập
    res.setHeader("Access-Control-Allow-Origin", '*')
    if (method == "GET") {
        if (url == "/mobile") {
            // kq = fs.readFileSync("./data/mobile.json", "utf8");
            // res.writeHead(200, { "Content-Type": "text/json; charset=utf8" });
            // res.end(kq);
            libs.getAllCollection("mobile").then(result => {
                kq = JSON.stringify(result);
                res.end(kq);
            }).catch(err => {
                console.log(err);
            })
        } else if (url == "/television") {
            // kq = kq = fs.readFileSync("./data/televison.json", "utf8");
            // res.writeHead(200, { "Content-Type": "text/json; charset=utf8" });
            // res.end(kq);
            libs.getAllCollection("television").then(result => {
                kq = JSON.stringify(result);
                res.end(kq);
            }).catch(err => {
                console.log(err);
            })
        } else if (url == "/store") {
            // kq = kq = fs.readFileSync("./data/store.json", "utf8");
            // res.writeHead(200, { "Content-Type": "text/json; charset=utf8" });
            // res.end(kq);
            libs.getAllCollection("store").then(result => {
                kq = JSON.stringify(result);
                res.end(kq);
            }).catch(err => {
                console.log(err);
            })
        } else if (url == "/banner") {
            // kq = kq = fs.readFileSync("./data/banner.json", "utf8");
            // res.writeHead(200, { "Content-Type": "text/json; charset=utf8" });
            // res.end(kq);
            libs.getAllCollection("banner").then(result => {
                kq = JSON.stringify(result[0]);
                res.end(kq);
            }).catch(err => {
                console.log(err);
            })
        } else {
            res.writeHead(200, { "Content-Type": "text/json; charset=utf8" });
            res.end(kq);
        }
    } else if (method == "POST") {
        if (url == "/ThemDienthoai") {
            kq = `Thêm Điện thoại`;
            res.writeHead(200, { "Content-Type": "text/json; charset=utf8" });
            res.end(kq);
        }
    } else {
        res.writeHead(200, { "Content-Type": "text/json; charset=utf8" });
        res.end(kq);
    }

})


Dich_vu.listen(port, () => {
        console.log(`Server Run http://localhost:${port}`);
    })
    ///////////////
Dich_vu.on('error', onError);
Dich_vu.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = Dich_vu.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    console.log('Listening on ' + bind);
}