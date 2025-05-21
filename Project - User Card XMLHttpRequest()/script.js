const divEle = document.querySelector(".card-container");

const request = new XMLHttpRequest();

request.open("GET", "https://dummyjson.com/users/1");
request.send();

request.addEventListener("load", function () {
   //  console.log(typeof request.responseText);
   // console.log(JSON.parse(this.responseText));

   const userData = JSON.parse(this.responseText);
   console.log(userData);
});
