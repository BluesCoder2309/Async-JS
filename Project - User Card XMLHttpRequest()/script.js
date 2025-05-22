const divEle = document.querySelector(".card-container");

function getDetails(id) {
   const request = new XMLHttpRequest();

   request.open("GET", `https://dummyjson.com/users/${id}`);
   request.send();

   request.addEventListener("load", function () {
       if (request.status === 404) return;
      //  console.log(typeof request.responseText);
      // console.log(JSON.parse(this.responseText));

      const userData = JSON.parse(this.responseText);
      console.log(userData);

      displayUser(userData, "beforeend");

      const prevRequest = new XMLHttpRequest();

      prevRequest.open("GET", `https://dummyjson.com/users/${id - 1}`);
      prevRequest.send();

      prevRequest.addEventListener("load", function () {
         if (prevRequest.status === 404) return;

         const userData = JSON.parse(this.responseText);
         console.log(userData);

         displayUser(userData, "afterbegin", "other");
      });

      const nextRequest = new XMLHttpRequest();

      nextRequest.open("GET", `https://dummyjson.com/users/${id + 1}`);
      nextRequest.send();

      nextRequest.addEventListener("load", function () {
         if (nextRequest.status === 404) return;

         const userData = JSON.parse(this.responseText);
         console.log(userData);

         displayUser(userData, "beforeend", "other");
      });
   });
}

function displayUser(data, pos, className) {
   const card = `<div class="user-card ${className}">
      <img src=${data.image} alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;

   // divEle.innerHTML = card;                //innerHTML causes to replace the id everytime a new id is called, so when multiple id's are called, it shows only one card on the screen. to avoid this and have multiple cards show up we use insertAdjacentHTML.

   divEle.insertAdjacentHTML(pos, card);
}

getDetails(20);
