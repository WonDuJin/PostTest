const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{


  const staticRoute=(filename,statusCode,contentType)=>{
    const readData = fs.readFileSync(filename,(err)=>{
      if(err) throw  err;
    });
    res.writeHead(statusCode,{"Content-Type":contentType});
    res.write(readData);
    res.end();
  }
  let test = '';
  if (req.method === "POST","GET"){
    let url = req.url;
    switch (url){
      case "/":
        staticRoute("./post.html",200,"text/html");
        break;
      case "/fetch.js":
          staticRoute("./fetch.js",200,"text/javascript")
        break;
      case "/post":  
        req.on('data',(data)=>{
          test = decodeURI(data)
          console.log(test)          
        })
        req.on('end',()=>{
          fs.writeFileSync('test.txt',test)
          staticRoute("./test.txt",200,"text/html; charset=utf-8");
        })
        break;

    }
  }
});


  server.listen(5050,(err)=>{
    console.log("서버 작동중....");
    if (err) throw err;
  });