const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const file_name = process.argv[2] || 'http.log';
const port = process.argv[3] || 9000;
const ipaddr = process.argv[4] || "";
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}
http.createServer(function (req, res) {
   //console.log(`${req.method} ${req.url}`);
	fs.appendFileSync(file_name,Date.now()+","+req.url+'\n')
  // parse URL
  const parsedUrl = url.parse(req.url);
  // extract URL path
  let pathname = `.${parsedUrl.pathname}`;
  // based on the URL path, extract the file extention. e.g. .js, .doc, ...
  const ext = path.parse(pathname).ext;
  // maps file extention to MIME typere
  const map = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword'
  };

  fs.exists(pathname, function (exist) {
    if(!exist) {
      // if the file is not found, return 404
      res.statusCode = 404;
      res.end(`File ${pathname} not found!`);
      return;
    }
    // if is a directory search for index file matching the extention
    if (fs.statSync(pathname).isDirectory()) pathname += '/index' + ext;

    // read file from file system
    fs.readFile(pathname, function(err, data){
      if(err){
        res.statusCode = 500;
        res.end(`Error getting the file: ${err}.`);
      } else {
		res.setHeader('Content-type', map[ext] || 'text/plain' );
		res.writeHead(200,{'Connection':'close'} );
		/*if (randomIntFromInterval(0,1))
		{
			setTimeout(function() {res.end(data);}, randomIntFromInterval(0,32000));
		} else
		{
			setTimeout(function() {res.end(data);}, 32000);
		}*/
		res.end(data)
      }
    });
  });


}).listen(parseInt(port),ipaddr);

console.log(`Server listening on port ${port}`);
