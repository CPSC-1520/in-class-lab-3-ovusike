// Enter your code below.

const divResource = document.querySelector(".javascript-resources");

const displayButton = document.getElementById('show-resources');

displayButton.addEventListener("click", () =>{
    divResource.classList.remove("d-none");
});


const links = document.querySelectorAll('.javascript-resources a');

links.forEach(link => {
  link.addEventListener('mouseover', (event) => {
    console.log(event.target);
    event.target.classList.add('fw-bold');
  });

  link.addEventListener('mouseout', (event) => {
    event.target.classList.remove('fw-bold');
  });

  link.addEventListener('click', (event) => {
    event.target.classList.add('fst-italic');
  });
});
