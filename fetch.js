const data = document.getElementById("form");


data.addEventListener('click',(e)=>{
  e.preventDefault();
  
  let test = []
  test = new FormData(data);
  let name = [...test][0][0]
  let value = [...test][0][1]
  console.log(name, value) 
  
  let bonam = {
    'name': value
  }
  console.log(bonam)
  
  fetch("http://localhost:5050",{
    method : "POST",
    headers :{
      "Content-Type" : "application/json ",
    },
    body : JSON.stringify(bonam), 
    
  })
  .then((response) => response.json())
  .then((data)=>console.log(data))  
  
})

const buttonClick = document.getElementById("button");

buttonClick.addEventListener("click",()=>{
  location.href="http://localhost:5050/post"
})
// const movePage =()=>{
//   location.href="http://localhost:5050/post"
// }