const http = require("http");
const fs = require("fs");

// http 서버 만들기
const server = http.createServer((req, res)=>{

  // 반복 사용되는 것들 함수화
  const staticRoute=(filename,statusCode,contentType)=>{
    const readData = fs.readFileSync(filename,(err)=>{
      if(err) throw  err;
    });
    res.writeHead(statusCode,{"Content-Type":contentType});
    res.write(readData);
    res.end();
  }

  //GET , POST방식으로 처리
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
        let test = '';
        req.on('data',(data)=>{
          test = decodeURI(data)
          console.log(test)          
        })
        req.on('end',()=>{
          fs.writeFileSync('test.txt',test)
          staticRoute("./test.txt",200,"text/html; charset=utf-8");
        })
        break;
      case "/test":
        staticRoute("./test.txt",200,"text/html; charset=utf-8");
        break;
    }
  }
});


  server.listen(5050,(err)=>{
    console.log("서버 작동중....");
    if (err) throw err;
  });