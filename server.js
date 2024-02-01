const utils = require('./modules/utils');
const http = require('http');
const url = require('url');
const greetingMessage = require('./lang/en/en');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const name = queryObject.name;
    res.writeHead(200, {'Content-Type': 'text/html'});
    const currentDate = utils.getDate();
    const responseMessage = `<div style="color: blue;">${greetingMessage(name, currentDate)}</div>`;
    res.end(responseMessage);
}).listen(8000);

console.log('Server is running and listening...');
