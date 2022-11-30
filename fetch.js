const data = document.getElementById("form");

// 어제는 form으로만 처리했다면 이번에는 fetch를 써보고싶어서 fetch를 사용
data.addEventListener('submit',(e)=>{
  e.preventDefault();
  
  let test = []
  test = new FormData(data);
  let name = [...test][0][0]
  let value = [...test][0][1]
  // console.log(name, value) 
  
  //객체로 만들어지는지 확인.
  let bonam = {
    'name': value
  }
  // console.log(bonam)
  
  fetch("http://localhost:5050/post",{
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

// buttonClick.addEventListener("click",()=>{
//   location.href="http://localhost:5050/post"
// })
const movePage =()=>{
  location.href="http://localhost:5050/post"
}