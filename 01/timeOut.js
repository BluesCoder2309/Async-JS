const buttonElement = document.querySelector(".button");
const textElement = document.querySelector("#text");
const imageElement = document.querySelector('img');
buttonElement.addEventListener("click", () => {
   textElement.textContent = "Kaisan ba?";
    imageElement.src = 'https://imgs.search.brave.com/iyGATiBrrW9VVenOYdBoVjYyF1YSd2h_kan-49JANX4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTUz/MjcyODYxL3Bob3Rv/L2hlbGxvLWdvb2Ri/eWUtaGlnaC1maXZl/LWRvZy5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9eWVrWVRS/b3lqSHMwaEVDeDJl/ZDVHaTUyb2RnbXpE/N2daVTJEUElFWWJI/ST0';
   setTimeout(() => {
      textElement.textContent = "";
      imageElement.src = '';
   }, 2000);
});
