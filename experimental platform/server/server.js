var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');
const { exec } = require('child_process');

//------------------------------ Parameters --------------------------

var latency = require('./netlatency.js');

var pointer=0;
var iterations=20;

//------------------------------ replace the interface: use ifconfig to get the interface name --------------------------

var map1int="enp0s9"

var map1latency=shuffle(latency.netlatency,2,9);
var seq0,seq1=0;

//------------------------------ Parameter ---------------------------
//////////////////////////////////////////////////////////////////////
function shuffle(a,group,members) {
    var j, x, i, k,ptr;
	ptr=1;
	for (k =1; k < group+1; k++){
		for (i = (k*members) - 1; i > (k*members)-members; i--) {
			j= Math.floor(Math.random() * ((k*members) - ((k*members)-members+1))) + ((k*members)-members);
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
	ptr++
	}
    return a;
}
function getdataset(step,data,totalrecords)
{
	var i
	var a=[]
	var b=[]
	for (i=0; i<totalrecords;i++)
	{
		if ((i % 2) === 0) {
			a.push(data[i])
		}else
		{
			b.push(data[i])
		}
	}
	if (step==0)
	{
	 return(a)
	} else
	{
	 return(b)
	}
}
function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function latency_add_1(intf,ltc) {

  exec('tc qdisc add dev '+intf+' parent 1:1 handle 10: netem limit 2000 delay '+ltc,(err, stdout, stderr) => {
  if (err) {
    return;
  }
  });
}
function latency_add_2(intf,ltc) {

  exec('tc qdisc add dev '+intf+' parent 2:1 handle 20: netem limit 2000 delay '+ltc,(err, stdout, stderr) => {
  if (err) {
    return;
  }
  });
}
function latency_change_1(intf,ltc) {

  exec('tc qdisc change dev '+intf+' parent 1:1 handle 10: netem limit 2000 delay '+ltc,(err, stdout, stderr) => {
	if (err) {
    return;
	}
  });
}

function latency_change_2(intf,ltc) {

  exec('tc qdisc change dev '+intf+' parent 2:1 handle 20: netem limit 2000 delay '+ltc,(err, stdout, stderr) => {
	if (err) {
    return;
	}
  });
}

function latency_clear_1(intf){
  exec('tc qdisc del dev '+intf+' root ',(err, stdout, stderr) => {
  if (err) {
    //return;
  }
  });
  exec('tc qdisc add dev '+intf+' root handle 1: tbf rate 10Mbit burst 100kb latency 0.01ms',(err, stdout, stderr) => {
  if (err) {
    return;
  }
  });
 }

 function latency_clear_2(intf){
  exec('tc qdisc del dev '+intf+' root ',(err, stdout, stderr) => {
  if (err) {
    //return;
  }
  });
  exec('tc qdisc add dev '+intf+' root handle 2: tbf rate 10Mbit burst 100kb latency 0.01ms',(err, stdout, stderr) => {
  if (err) {
    return;
  }
  });
 }

var server = http.createServer(function(req, res) {

  var setparam='no';
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.writeHead(200);
  res.end('Hello Http');
  pathName= url.parse(req.url).pathname;
  query= url.parse(req.url).query;
  var urlObj = url.parse(req.url, true); 

  var ilts=urlObj['query']['ilt[]']
  var acr=urlObj['query']['acr']
  var qsr=urlObj['query']['qsr']
  var msr=urlObj['query']['mouse_clicks[]']
  var typ=urlObj['query']['type'] 
  var obj=urlObj['query']['obj'] 
  
  setparam=urlObj['query']['setparam'];
  
 		fs.appendFileSync(process.argv[2],typ+'|'+ilts+"|"+acr+"|"+map1latency[pointer][0]+"|"+qsr+"|"+msr+"|"+obj+"\n");

		//console.log('msr=',msr);
		pointer++;
		latency_change_1(map1int,map1latency[pointer][0]);
  if (pointer>iterations) {
	  console.log("Experiement is completed!"+"\007")
	  process.exit();
  }
});
  seq0 = 0;
  seq1 = 1;
  if (seq0==1)
  {
	  seq1=0;
  }
latency_clear_1(map1int);
latency_add_1(map1int,map1latency[pointer][0]);
fs.appendFileSync(process.argv[2],'type|iLTs|ACR|net_delay|qsr|mouse_clicks|obj'+"\n");

server.listen(8181)
